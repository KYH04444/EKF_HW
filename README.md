# EKF_HW

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

#### MASER PC

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
>cd ~/mul_ws/uam_bag && rosbag record -a    
===    
        
*Tips*

_turtlebot_kalman.launch안에서 scenario변경 가능(scenario1은 논문에 명시된 환경)_

_noise가 생각보다 심해서 noise covariance 다시 설정해야할 것 같다(Q,R)_

_uwb_sub.cpp 파일안에서 data날리는 방법(cnt 크게) 써야될듯 plot해보면서 적당한 공분산 찾기_
    
_최대한 앵커, 태그 마주보게 하기, 태그가 앵커랑 마주보지 않으면 값 이상하게 나옴_

~~turtlebot3 자체 odom 사용할거면 시나리오 끝날때마다 bringup껐다켜주기~~

~~nlink_parser 있어야됨 ws에서 multiple_turtlebots_estm이 nlink_parser보다 먼저 빌드 되면 오류남~~
