import matplotlib.pyplot as plt
import numpy as np

with open('rosbag_x.txt', 'r') as file:
    rosbag_x = file.readlines()

with open('rosbag_y.txt', 'r') as file:
    rosbag_y = file.readlines()

with open('rosbag_time.txt', 'r') as file:
    rostime = file.readlines()

with open('rosbag_time_plus.txt', 'r') as file:
    rostime_plus = file.readlines()

with open('sc1_robot1_gt.txt', 'r') as file:
    robot1_gt = file.readlines()

with open('sc1_robot2_gt.txt', 'r') as file:
    robot2_gt = file.readlines()

esti_x = []
esti_y = []
rosgbag_time = []
rosgbag_time_plus = []

gt_robot1_x = []
gt_robot1_y = []

gt_robot2_x = []
gt_robot2_y = []

for line in rostime:
    rosgbag_time.append(float(line.strip()))

for line in rostime_plus:
    rosgbag_time_plus.append(float(line.strip()))

for line in rosbag_x:
    esti_x.append(float(line.strip()))

for line in rosbag_y:
    esti_y.append(float(line.strip()))

downsample_ratio = int(9535 / 1127)
cnt = 0
print(downsample_ratio)
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
# for i in range(65):
#     gt_robot2_x.append(0)
#     gt_robot2_y.append(0)
min_length = min(len(gt_robot1_x), len(esti_x), len(esti_y))

for i in range(min_length):
    theta_cnt = i * 2 / 1127 * np.pi
    esti_x[i] = (np.cos(theta_cnt) * esti_x[i] - np.sin(theta_cnt) * esti_y[i])  + gt_robot1_x[i] 
    esti_y[i] = (np.sin(theta_cnt) * esti_x[i] + np.cos(theta_cnt) * esti_y[i]) + gt_robot1_y[i]  

color = 'tab:red'
plt.plot(rosgbag_time, esti_y, marker='s', linestyle='-', color=color, label='Estimation of Y')

color = 'tab:blue'
plt.plot(rosgbag_time_plus, gt_robot2_y, marker='s', linestyle='-', color=color, label='GT of Y')

# color = 'tab:green'
# plt.plot(gt_robot1_x, gt_robot1_y, marker='s', linestyle='-', color=color, label='gt_r1')

plt.title('Estimation')
plt.xlabel('Time')
plt.ylabel('Estimated Y')
plt.grid(True)
plt.legend()

plt.show()

