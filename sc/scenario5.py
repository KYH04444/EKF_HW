#!/usr/bin/env python3
import rospy
from geometry_msgs.msg import Twist
import math as m
import time

time_2 = 50
radius_2 = 1
cnt = 0
rospy.init_node('gazebo_cmd_vel')
pub1 = rospy.Publisher('/robot1/cmd_vel', Twist, queue_size=1)
pub2 = rospy.Publisher('/robot2/cmd_vel', Twist, queue_size=1)
rate = rospy.Rate(20)

move1 = Twist()
move2 = Twist()
move1.linear.x = 0
move1.angular.z = 0
move2.linear.x = 0.1
move2.angular.z = 0

while not rospy.is_shutdown():
    cnt+=1
    if cnt == 10:
        move2.angular.z = m.pi/5
    
    pub1.publish(move1)
    pub2.publish(move2)
    rate.sleep()

