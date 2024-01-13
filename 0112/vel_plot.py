import matplotlib.pyplot as plt
import numpy as np

with open('vel_robot2.txt', 'r') as file:
    vel_r2 = file.readlines()

with open('rosbag_vel.txt', 'r') as file:
    rosbag_vel = file.readlines()

with open('rosbag_time.txt', 'r') as file:
    rostime = file.readlines()

with open('rosbag_time_plus.txt', 'r') as file:
    rostime_plus = file.readlines()

gt_vel = []

rosgbag_time = []
rosgbag_time_plus = []

estim_vel = []

for line in rostime_plus:
    rosgbag_time_plus.append(float(line.strip()))

for line in rosbag_vel:
    estim_vel.append(float(line.strip()))

for line in rostime:
    rosgbag_time.append(float(line.strip()))
downsample_ratio = int(9535 / 1127)
cnt = 0
for line in vel_r2:
    if cnt % downsample_ratio == 0:
        x, y = map(float, line.strip().split('\t'))
        gt_vel.append(y)
    cnt += 1
cnt = 0 

color = 'tab:red'
plt.plot(rosgbag_time, estim_vel, marker='s', linestyle='-', color=color, label='estimation of linear velocity')

color = 'tab:blue'
plt.plot(rosgbag_time_plus, gt_vel, marker='s', linestyle='-', color=color, label='GT of linear velocity')

# color = 'tab:green'
# plt.plot(gt_robot1_x, gt_robot1_y, marker='s', linestyle='-', color=color, label='gt_r1')

plt.title('Estimation')
plt.xlabel('Time')
plt.ylabel('m/s')
plt.grid(True)
plt.legend()

plt.show()

