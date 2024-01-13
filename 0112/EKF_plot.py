import matplotlib.pyplot as plt
import numpy as np

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

for line in rostime:
    rosgbag_time.append(float(line.strip()))

for line in rosbag_x:
    esti_x.append(float(line.strip()))

for line in rosbag_y:
    esti_y.append(float(line.strip()))

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
    esti_x[i] = (np.cos(theta_cnt) * esti_x[i] - np.sin(theta_cnt) * esti_y[i])  + gt_robot1_x[i] 
    esti_y[i] = (np.sin(theta_cnt) * esti_x[i] + np.cos(theta_cnt) * esti_y[i]) + gt_robot1_y[i]  
    # if i == 1:
    #     print("0 degree")
    #     print(theta_cnt)
    #     print(np.cos(theta_cnt),np.sin(theta_cnt))
    #     print(gt_robot1_x[i], gt_robot1_y[i])
    #     print(esti_x[i],esti_y[i])
    # elif i == 1128/4:
    #     print(theta_cnt)
    #     print("90 degree")
    #     print(np.cos(theta_cnt),np.sin(theta_cnt))
    #     print(gt_robot1_x[i], gt_robot1_y[i])
    #     print(esti_x[i],esti_y[i])    
    # elif i == 1126/2:
    #     print("180 degree")
    #     print(theta_cnt)
    #     print(np.cos(theta_cnt),np.sin(theta_cnt))
    #     print(gt_robot1_x[i], gt_robot1_y[i])
    #     print(esti_x[i],esti_y[i])
    # elif i == 1128*3/4:
    #     print("270 degree")
    #     print(theta_cnt)
    #     print(np.cos(theta_cnt),np.sin(theta_cnt))
    #     print(gt_robot1_x[i], gt_robot1_y[i])
    #     print(esti_x[i],esti_y[i])
color = 'tab:red'
plt.plot(esti_x, esti_y, marker='s', linestyle='-', color=color, label='Estimated')

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
