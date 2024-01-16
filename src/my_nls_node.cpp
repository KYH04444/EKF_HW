/**
 *  @brief Robot 2D trajectory optimization
 *
 *  @author Atsushi Sakai
 **/
#include <vector>
#include <cstdlib>
#include <ctime>
#include <chrono>
#include "ceres/ceres.h"
#include "glog/logging.h"
#include "math.h"
#include "csvparser.h"
#include "matplotlibcpp.h"
#include <fstream>

using namespace std;

namespace plt = matplotlibcpp;

using ceres::AutoDiffCostFunction;
using ceres::CostFunction;
using ceres::CauchyLoss;
using ceres::HuberLoss;
using ceres::TukeyLoss;
using ceres::ArctanLoss;
using ceres::Problem;
using ceres::Solver;
using ceres::Solve;
// M estimation. Robust curve fitting

struct MyConstraintCase3{
    MyConstraintCase3(double rho, double beta)
        :rho_(rho), beta_(beta) {}

    template<typename T>
    bool operator()(const T* const x_ji, const T* const y_ji, T* residual) const
    {
        residual[0] = (sqrt(x_ji[0]*x_ji[0] + y_ji[0]*y_ji[0]) - T(rho_)) ;
        T tmp = atan2(y_ji[0], x_ji[0]);
        // if (tmp < 0)
        //     tmp += 2 * M_PI;
        residual[1] = (tmp - T(beta_ * M_PI / 180)) ;
        return true;
    }

    static ceres::CostFunction* Create(
            const double rho,
            const double beta)
    {
        return (new ceres::AutoDiffCostFunction<MyConstraintCase3,2,1,1>(
                    new MyConstraintCase3(rho, beta)));
    }

private:
    const double rho_;
    const double beta_;
//    const double theta_;
};

struct withoutNetworkOdomConstraint{
    withoutNetworkOdomConstraint(double delta_t)
        : delta_t_(delta_t) {}

    template<typename T>
    bool operator()(
            const T* const cx,
            const T* const cy,
            const T* const cyaw,
            const T* const vj,
            const T* const wj,
            const T* const nx,
            const T* const ny,
            const T* const nyaw,
            const T* const nvj,
            const T* const nwj,
            T* residual) const {
        residual[0] = (nx[0] - (cx[0] + delta_t_*(vj[0]*cos(cyaw[0])+cy[0]*w_i-v_i))) / 0.1;
        residual[1] = (ny[0] - (cy[0] + delta_t_*(vj[0]*sin(cyaw[0])-cx[0]*w_i))) / 0.1;
        residual[2] = (nyaw[0] - (cyaw[0] + delta_t_*(wj[0]-w_i))) / 0.01;
        residual[3] = (nvj[0] - vj[0]) / 0.01;
        residual[4] = (nwj[0] - wj[0]) / 0.01;
        return true;
    }

    static ceres::CostFunction* Create(
            const double delta_t)
    {
        return (new ceres::AutoDiffCostFunction<withoutNetworkOdomConstraint,5,1,1,1,1,1,1,1,1,1,1>(
                    new withoutNetworkOdomConstraint(delta_t)));
    }

private:
    const double delta_t_;
    const double v_i = 0.2;
    const double w_i = 0.1;
    // const double v_j = 0.4;
    // const double w_j = 0.09;
};

int main(int argc, char** argv){
  cout<<"Start similation"<<endl;
  google::InitGoogleLogging(argv[0]);

  //data read
//  CSVParser csvparser("/home/gihun/catkin_tools_ws/files/1003/_2023-10-03-15-19-08-sync_data.csv");
  CSVParser csvparser("/home/gihun/Downloads/sc1_ceres.csv");

  int colSize = csvparser.ncol_ / 2;

  //parameter
  vector<double> xji;
  vector<double> yji;
  vector<double> thetaji;
  //ground truth
  vector<double> t_xji;
  vector<double> t_yji;
  vector<double> t_thetaji;

  vector<double> ekf_x;
  vector<double> ekf_y;
  
  //kf estimated
  // case4
  vector<double> c4_xji;
  vector<double> c4_yji;
  vector<double> c4_thetaji;

  vector<double> rho;
  vector<double> beta;
  vector<double> theta;

  // input
  vector<double> delta_t;
  // for visualization
  vector<double> visualization;

  vector<double> vj(colSize, 0.4);
  vector<double> wj(colSize, 0.09);
  vector<double> trueVj(colSize, 0.4);
  vector<double> trueWj(colSize, 0.09);

// read data from CSV
  for(int i=0;i< colSize ;i++){
      xji.push_back(csvparser.data_[i][5]); //odom x
      yji.push_back(csvparser.data_[i][6]); //odom y
      thetaji.push_back(csvparser.data_[i][7]); //odom theta

      rho.push_back(csvparser.data_[i][8]); //measure range
      beta.push_back(csvparser.data_[i][9]); //measure bearing
      theta.push_back(csvparser.data_[i][10]); //calculatied by measured data

      delta_t.push_back(csvparser.data_[i][11]); //dt

      t_xji.push_back(csvparser.data_[i][12]); //gt_xji
      t_yji.push_back(csvparser.data_[i][13]); //gt_yji
      t_thetaji.push_back(csvparser.data_[i][14]); //gt_xji

      c4_xji.push_back(csvparser.data_[i][27]); //xji (calculatied by measered) 
      c4_yji.push_back(csvparser.data_[i][28]); //yji (calculatied by measered)
      c4_thetaji.push_back(csvparser.data_[i][29]); //thetaji (calculatied by measered)
      
      // ekf_x.push_back(csvparser.data_[i][33]);
      // ekf_y.push_back(csvparser.data_[i][34]);

      visualization.push_back(i); // for matplotlib plot
  }

  /*************************Adds outliers to measurement data************************/
  
  /**********************************************************************************/

  // Initialize parameters for optimization

  // init param
  vector<double> initialXji;
  vector<double> initialYji;
  vector<double> initialThetaji;
  initialXji=xji;
  initialYji=yji;
  initialThetaji=thetaji;
  vector<double> initialVj;
  vector<double> initialWj;
  initialVj = vj;
  initialWj = wj;
// ====================================Optimization========================================
  // Record the starting time
  auto start_time = std::chrono::high_resolution_clock::now();

  // Perform task that you want to measure the duration

  ceres::Problem problem;
  for(int i = 0; i < colSize - 1; i++){

    problem.AddResidualBlock(
          withoutNetworkOdomConstraint::Create(delta_t[i]),
          NULL,
          &(xji[i]),
          &(yji[i]),
          &(thetaji[i]),
          &(vj[i]),
          &(wj[i]),
          &(xji[i+1]),
          &(yji[i+1]),
          &(thetaji[i+1]),
          &(vj[i+1]),
          &(wj[i+1])
          );
          
      problem.AddResidualBlock(
            MyConstraintCase3::Create(rho[i], beta[i]), // o_rhom, o_beta : data with outliers
          NULL,
          &xji[i],
          &yji[i]
            );
  }

  // Optimization
  Solver::Options options;
  options.linear_solver_type=ceres::DENSE_QR;
  options.minimizer_progress_to_stdout=true;
  Solver::Summary summary;
  Solve(options,&problem,&summary);

  for (auto& ele : thetaji)
    ele += 2 * M_PI;

  // Record the ending time
  auto end_time = std::chrono::high_resolution_clock::now();

  // Calculate the time duration
  auto duration = std::chrono::duration_cast<std::chrono::milliseconds>(end_time - start_time);

  // Output the duration in milliseconds
  std::cout << "Time duration: " << duration.count() << "milliseconds" << endl;
  std::ofstream outputFile("xji.txt");
 if (!outputFile.is_open()){
      std::cerr << "Error: Unable to open the file for writing." << std::endl;
      return 1;
  }

  // outputFile << "xji" << " " << "yji" << " " << "thetaji" << std::endl;
  outputFile << "xji" << std::endl;
  
  for (size_t i = 0; i < xji.size(); ++i){
      // outputFile << xji[i] << " " << yji[i] << " " << thetaji[i] << std::endl;
      outputFile << xji[i] << std::endl;
  }

  outputFile.close();

  // std::cout << "Data saved to output.txt" << std::endl;
 plt::title("xji");
 plt::plot(visualization, xji, "r*");
 plt::plot(visualization, c4_xji, "b*");
 plt::show();

 plt::title("yji");
 plt::plot(visualization, yji, "r*");
 plt::plot(visualization, c4_yji, "b*");
 plt::show();

 plt::title("thetaji");
 plt::plot(visualization, thetaji, "r*");
//  plt::plot(visualization, o_theta, "b*");
 plt::show();

////**********************Save CSV file****************************

//  std::string header1 = "xji";
//  std::string header2 = "yji";
//  std::string header3 = "thetaji";
//  std::string header4 = "vj";
//  std::string header5 = "wj";
//  std::string header6 = "trueXji";
//  std::string header7 = "trueYji";
//  std::string header8 = "trueThetaji";

//  const std::string filename = "/home/gihun/catkin_ws/src/multiple_turtlebots_sim/data/withoutOutlier/Nls/test.csv";


//  std::ofstream outputFile(filename);

//  if (!outputFile.is_open()){
//      std::cerr << "Error: Unable to open the file " << filename << std::endl;
//      return 1;
//  }

//  // Write headers to the CSV file
//  outputFile << header1 << "," << header2 << "," << header3 <<  "," << header4 << "," << header5 <<
//                "," << header6 << "," << header7 << "," << header8 << std::endl;

//  // Write the vectors as columns in the CSV file
//  size_t maxLength = t_xji.size();
//  for (size_t i = 0; i < maxLength; ++i){
//      if (i < xji.size()){
//          outputFile << xji[i];
//      }
//      outputFile << ","; // Add a comma to separate columns
//      if (i < yji.size()){
//          outputFile << yji[i];
//      }
//      outputFile << ",";
//      if (i < thetaji.size()){
//          outputFile << thetaji[i];
//      }
//      outputFile << ",";
//      if (i < vj.size()){
//          outputFile << vj[i];
//      }
//      outputFile << ",";
//      if (i < wj.size()){
//          outputFile << wj[i];
//      }
//      outputFile << ",";
//      if (i < t_xji.size()){
//          outputFile << t_xji[i];
//      }
//      outputFile << ",";
//      if (i < t_yji.size()){
//          outputFile << t_yji[i];
//      }
//      outputFile << ",";
//      if (i < t_thetaji.size()){
//          outputFile << t_thetaji[i];
//      }
//      outputFile << std::endl; // Start a new row
//  }

//  outputFile.close();

//  std::cout << "Data saved to " << filename << std::endl;
  return 0;
}