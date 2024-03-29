import matplotlib.pyplot as plt
import numpy as np
import math as m

with open('rosbag_x.txt', 'r') as file:
    rosbag_x = file.readlines()

with open('rosbag_y.txt', 'r') as file:
    rosbag_y = file.readlines()

with open('rosbag_time.txt', 'r') as file:
    rostime = file.readlines()

with open('sc1_robot1_gt.txt', 'r') as file:
    robot1_gt = file.readlines()

with open('sc1_robot2_gt.txt', 'r') as file:
    robot2_gt = file.readlines()

esti_x = []
esti_y = []
rosgbag_time = []

gt_robot1_x = []
gt_robot1_y = []

gt_robot2_x = []
gt_robot2_y = []

_esti_x = []
_esti_y = []
for line in rostime:
    rosgbag_time.append(float(line.strip()))

for line in rosbag_x:
    esti_x.append(float(line.strip()))
    _esti_x.append(0)

for line in rosbag_y:
    esti_y.append(float(line.strip()))
    _esti_y.append(0)
downsample_ratio = int(9535 / 1127)
cnt = 0

for line in robot1_gt:
    if cnt % downsample_ratio == 0:
        x, y = map(float, line.strip().split('\t'))
        gt_robot1_x.append(x)
        gt_robot1_y.append(y)
    cnt += 1
cnt = 0 
for line in robot2_gt:
    if cnt % downsample_ratio == 0:
        x, y = map(float, line.strip().split('\t'))
        gt_robot2_x.append(x)
        gt_robot2_y.append(y)
    cnt += 1    
# print(len(gt_robot1_x))
# print(len(esti_x))
min_length = min(len(gt_robot1_x), len(esti_x), len(esti_y))
# print(range(min_length))

for i in range(min_length):
    theta_cnt = i * 2 / 1127 * np.pi
    # print(esti_x[1],esti_y[1])
    # print("---------------------")

    _esti_x[i] = m.cos(theta_cnt+np.pi/2) * esti_x[i] - m.sin(theta_cnt+m.pi/2) * esti_y[i]  + gt_robot1_x[i] 
    _esti_y[i] = m.sin(theta_cnt+np.pi/2) * esti_x[i] + m.cos(theta_cnt+m.pi/2) * esti_y[i] + gt_robot1_y[i]  
    if i == 1:
        print("0 degree")
        print(theta_cnt)
        # print(theta_cnt+np.pi/2)
        # print(np.cos(theta_cnt+np.pi/2))
        # print(init_x)
        # print(np.sin(theta_cnt+np.pi/2))
        # print(esti_y[i])
        # print(gt_robot1_x[i])
        # print(theta_cnt)
        # print(np.cos(theta_cnt+np.pi/2),np.sin(theta_cnt+np.pi/2))
        print(gt_robot1_x[i], gt_robot1_y[i])
        print(_esti_x[i],_esti_y[i])
        print("---------------------")
    elif i == 1128/4:
        print("90 degree")
        print(theta_cnt)
        print(np.cos(theta_cnt+np.pi/2),np.sin(theta_cnt+np.pi/2))
        print(gt_robot1_x[i], gt_robot1_y[i])
        print(_esti_x[i],_esti_y[i])
        print("---------------------")
    elif i == 1126/2:
        print("180 degree")
        print(theta_cnt)
        print(np.cos(theta_cnt+np.pi/2),np.sin(theta_cnt+np.pi/2))
        print(gt_robot1_x[i], gt_robot1_y[i])
        print(_esti_x[i],_esti_y[i])
        print("---------------------")
    elif i == 1128*3/4:
        print("270 degree")
        print(theta_cnt)
        print(np.cos(theta_cnt+np.pi/2),np.sin(theta_cnt+np.pi/2))
        print(gt_robot1_x[i], gt_robot1_y[i])
        print(_esti_x[i],_esti_y[i])
color = 'tab:red'
plt.plot(_esti_x, _esti_y, marker='s', linestyle='-', color=color, label='Estimated')

color = 'tab:blue'
plt.plot(gt_robot2_x, gt_robot2_y, marker='s', linestyle='-', color=color, label='gt_r2')

color = 'tab:green'
plt.plot(gt_robot1_x, gt_robot1_y, marker='s', linestyle='-', color=color, label='gt_r1')

plt.title('Estimation')
plt.xlabel('axis X')
plt.ylabel('axis Y')
plt.grid(True)
plt.legend()

plt.show()

