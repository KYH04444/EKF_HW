#!/usr/bin/env python3
import rospy
from geometry_msgs.msg import Twist
import math as m
import time
time_1 = 100
radius_1 = 1.5
rad =0
init_rad = time.time()
time_2 = 50
radius_2 = 2

rospy.init_node('gazebo_cmd_vel')
pub1 = rospy.Publisher('/robot1/cmd_vel', Twist, queue_size=10)
pub2 = rospy.Publisher('/robot2/cmd_vel', Twist, queue_size=10)
rate = rospy.Rate(20)

move1 = Twist()
move1.linear.x = 2*m.pi*radius_1/time_1
move1.angular.z = 2*m.pi/time_1

move2 = Twist()

while not rospy.is_shutdown():
    rad =time.time()
    

    move2.linear.x = 2*m.pi*radius_2/time_2+0.01*m.sin(2*m.pi*rospy.get_time()/10)
    move2.angular.z = 2*m.pi/time_2
    pub1.publish(move1)
    pub2.publish(move2)
    rospy.sleep(0.1)
