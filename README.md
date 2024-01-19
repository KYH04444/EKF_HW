# EKF_HW
## RESULT | Estimated and Ground Truth data
### < X,Y plot >
![xy](https://github.com/KYH04444/EKF_HW/assets/121211187/a79cdd19-f4db-4f57-a0b3-ca01b5f8acde)

### < X >


![x](https://github.com/KYH04444/EKF_HW/assets/121211187/64cf1ff2-1783-4f19-804a-346910e9e27d)

### < Y >


![y](https://github.com/KYH04444/EKF_HW/assets/121211187/2493db4e-edd9-4165-a142-e08100a9baae)

### < Theta >

![theta](https://github.com/KYH04444/EKF_HW/assets/121211187/2c13ba61-e63f-4a61-aa8e-46ba5ea5546b)

### < Linear Velocity >

![w](https://github.com/KYH04444/EKF_HW/assets/121211187/a6399271-c7e0-419d-8321-1f34ea8958b1)

### < Angular Velocity >

![v](https://github.com/KYH04444/EKF_HW/assets/121211187/ea92d3f3-169a-4804-961d-b2b54dbbc6c0)

### < EKF-CeresSolver Xji plot >

![ekf_ceres_xji](https://github.com/KYH04444/EKF_HW/assets/121211187/e4ea534a-3867-422c-b540-e3363a183e27)

### < EKF-CeresSolver Yji plot >

![ekf_ceres_yji](https://github.com/KYH04444/EKF_HW/assets/121211187/33c3efc3-6bde-4809-9957-69ea0ac8759d)



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

