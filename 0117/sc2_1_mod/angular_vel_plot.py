import matplotlib.pyplot as plt
import numpy as np
def angularplot():
    with open('linear_vel_robot2.txt', 'r') as file:
        lin_vel_r2 = file.readlines()

    with open('angular_vel_robot2.txt', 'r') as file:
        ang_vel_r2 = file.readlines()

    with open('bag_vj.txt', 'r') as file:
        bag_vj = file.readlines()

    with open('bag_wj.txt', 'r') as file:
        bag_wj = file.readlines()

    with open('rosbag_time.txt', 'r') as file:
        rostime = file.readlines()

    bag_lin_vel = []
    bag_ang_vel = []

    gt_lin_vel = []
    gt_ang_vel = []

    bag_v_j = []
    bag_w_j = []

    rosgbag_time = []



    for line in lin_vel_r2:
        gt_lin_vel.append(float(line.strip())) 

    for line in ang_vel_r2:
        ang_vel_value = float(line.strip()) 
        if ang_vel_value <= 0:
            ang_vel_value *= -1
        gt_ang_vel.append(ang_vel_value)


    for line in bag_vj:
        bag_v_j.append(float(line.strip()))
    for line in bag_wj:
        bag_w_j.append(float(line.strip()))

    print(np.mean(gt_ang_vel)-np.mean(bag_w_j))


    for line in rostime:
        rosgbag_time.append(float(line.strip()))



    color = 'tab:red'
    plt.plot(rosgbag_time, bag_w_j, marker='s', linestyle='-', color=color, label='estimation of angular velocity')

    color = 'tab:blue'
    plt.plot(rosgbag_time, gt_ang_vel, marker='s', linestyle='-', color=color, label='GT of angular velocity')

    # color = 'tab:green'
    # plt.plot(gt_robot1_x, gt_robot1_y, marker='s', linestyle='-', color=color, label='gt_r1')

    plt.title('Estimation')
    plt.xlabel('Time')
    plt.ylabel('deg/s')
    plt.grid(True)
    plt.legend()

    plt.show()


if __name__ =="__main__":
    angularplot()
