import matplotlib.pyplot as plt
import numpy as np

with open('angvel.txt', 'r') as file:
    ang_vel = file.readlines()
ang_v = []
rosgbag_time = []


for line in ang_vel:
    x, y = map(float, line.strip().split('\t'))
    ang_v.append(x)
    rosgbag_time.append(y)

color = 'tab:red'
plt.plot(ang_v, rosgbag_time, marker='s', linestyle='-', color=color, label='Ang_vel')


# color = 'tab:green'
# plt.plot(gt_robot1_x, gt_robot1_y, marker='s', linestyle='-', color=color, label='gt_r1')

plt.title('Angular Velocity(XY-Plane)')
plt.xlabel('Time')
plt.ylabel('Angular vel')
plt.grid(True)
plt.legend()

plt.show()

