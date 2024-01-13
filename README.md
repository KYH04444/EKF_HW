# EKF_HW
## Result
### < X,Y plot >
![xy_plot](https://github.com/KYH04444/EKF_HW/assets/121211187/3d6b10e0-6549-4713-8829-7817f540b729)
### < X plot>

###


![x_plot](https://github.com/KYH04444/EKF_HW/assets/121211187/0b179ab7-bc8e-47e2-a2f2-7bf2cad2f61b)

### < Y plot>

![y_plot](https://github.com/KYH04444/EKF_HW/assets/121211187/ff5a87a3-4b98-4298-bb3b-6d34e4939b00)

### < Linear Velocity plot >

![vel_plot](https://github.com/KYH04444/EKF_HW/assets/121211187/7621dcdd-e913-419a-87d1-5914031279c0)



- pub cmd_vel = 0.1396m/s
- Mean of GT linear velocity = 0.1370m/s
- Mean of estimated linear velocity =  0.1797m/s
- mean_vel - mean_gt_vel = 0.0428m/s
---
## SETUP
     Turtlebot1(Anchor): Robot1
        ssh gihun@192.168.x.x
        pw:1123

     Turtlebot2(Tag): Robot2
        ssh asl@192.168.x.x
        pw:10181018
--- 

#### Turtlebot3

    export ROS_MASTER_URT=http://master_ip:11311
    export ROS_HOSTNAME=turtlebot_ip

#### MASTER PC

    export ROS_MASTER_URT=http://master_ip:11311
    export ROS_HOSTNAME=master_ip


# Local_PC

- terminal1(ssh_Turtlebot1)
>roslaunch turtlebot3_bringup turtlebot3_robot.launch 

- terminal2(ssh_Turtlebot1)
>roslaunch nlink_parser linktrack_aoa.launch 

- terminal3(ssh_Turtlebot2)
>roslaunch turtlebot3_bringup turtlebot3_robot.launch 

- terminal4(Local_pc)
>roslaunch multiple_turtlebots_estm turtlebot_kalman.launch 

- terminal5(Local_pc)
>rosbag record -a    

---------------
   
        
*Tips*

_turtlebot_kalman.launch안에서 scenario변경 가능(scenario1은 논문에 명시된 환경)_

_noise가 생각보다 심해서 noise covariance 다시 설정해야할 것 같다(Q,R)_

_uwb_sub.cpp 파일안에서 data날리는 방법(cnt 크게) 써야될듯 plot해보면서 적당한 공분산 찾기_
    
_최대한 앵커, 태그 마주보게 하기, 태그가 앵커랑 마주보지 않으면 값 이상하게 나옴_

~~turtlebot3 자체 odom 사용할거면 시나리오 끝날때마다 bringup껐다켜주기~~

~~nlink_parser 있어야됨 ws에서 multiple_turtlebots_estm이 nlink_parser보다 먼저 빌드 되면 오류남~~

