;; Auto-generated. Do not edit!


(when (boundp 'multiple_turtlebots_estm::SyncMsg)
  (if (not (find-package "MULTIPLE_TURTLEBOTS_ESTM"))
    (make-package "MULTIPLE_TURTLEBOTS_ESTM"))
  (shadow 'SyncMsg (find-package "MULTIPLE_TURTLEBOTS_ESTM")))
(unless (find-package "MULTIPLE_TURTLEBOTS_ESTM::SYNCMSG")
  (make-package "MULTIPLE_TURTLEBOTS_ESTM::SYNCMSG"))

(in-package "ROS")
;;//! \htmlinclude SyncMsg.msg.html
(if (not (find-package "STD_MSGS"))
  (ros::roseus-add-msgs "std_msgs"))


(defclass multiple_turtlebots_estm::SyncMsg
  :super ros::object
  :slots (_header _odom_x _odom_y _odom_theta _meas_rho _meas_beta _meas_theta _delta_t _gt_rho _gt_beta _gt_theta _case0_x _case0_y _case0_t _case1_x _case1_y _case1_t _case2_x _case2_y _case2_t _case3_x _case3_y _case3_t _case4_x _case4_y _case4_t _case4_vj _case4_wj ))

(defmethod multiple_turtlebots_estm::SyncMsg
  (:init
   (&key
    ((:header __header) (instance std_msgs::Header :init))
    ((:odom_x __odom_x) 0.0)
    ((:odom_y __odom_y) 0.0)
    ((:odom_theta __odom_theta) 0.0)
    ((:meas_rho __meas_rho) 0.0)
    ((:meas_beta __meas_beta) 0.0)
    ((:meas_theta __meas_theta) 0.0)
    ((:delta_t __delta_t) 0.0)
    ((:gt_rho __gt_rho) 0.0)
    ((:gt_beta __gt_beta) 0.0)
    ((:gt_theta __gt_theta) 0.0)
    ((:case0_x __case0_x) 0.0)
    ((:case0_y __case0_y) 0.0)
    ((:case0_t __case0_t) 0.0)
    ((:case1_x __case1_x) 0.0)
    ((:case1_y __case1_y) 0.0)
    ((:case1_t __case1_t) 0.0)
    ((:case2_x __case2_x) 0.0)
    ((:case2_y __case2_y) 0.0)
    ((:case2_t __case2_t) 0.0)
    ((:case3_x __case3_x) 0.0)
    ((:case3_y __case3_y) 0.0)
    ((:case3_t __case3_t) 0.0)
    ((:case4_x __case4_x) 0.0)
    ((:case4_y __case4_y) 0.0)
    ((:case4_t __case4_t) 0.0)
    ((:case4_vj __case4_vj) 0.0)
    ((:case4_wj __case4_wj) 0.0)
    )
   (send-super :init)
   (setq _header __header)
   (setq _odom_x (float __odom_x))
   (setq _odom_y (float __odom_y))
   (setq _odom_theta (float __odom_theta))
   (setq _meas_rho (float __meas_rho))
   (setq _meas_beta (float __meas_beta))
   (setq _meas_theta (float __meas_theta))
   (setq _delta_t (float __delta_t))
   (setq _gt_rho (float __gt_rho))
   (setq _gt_beta (float __gt_beta))
   (setq _gt_theta (float __gt_theta))
   (setq _case0_x (float __case0_x))
   (setq _case0_y (float __case0_y))
   (setq _case0_t (float __case0_t))
   (setq _case1_x (float __case1_x))
   (setq _case1_y (float __case1_y))
   (setq _case1_t (float __case1_t))
   (setq _case2_x (float __case2_x))
   (setq _case2_y (float __case2_y))
   (setq _case2_t (float __case2_t))
   (setq _case3_x (float __case3_x))
   (setq _case3_y (float __case3_y))
   (setq _case3_t (float __case3_t))
   (setq _case4_x (float __case4_x))
   (setq _case4_y (float __case4_y))
   (setq _case4_t (float __case4_t))
   (setq _case4_vj (float __case4_vj))
   (setq _case4_wj (float __case4_wj))
   self)
  (:header
   (&rest __header)
   (if (keywordp (car __header))
       (send* _header __header)
     (progn
       (if __header (setq _header (car __header)))
       _header)))
  (:odom_x
   (&optional __odom_x)
   (if __odom_x (setq _odom_x __odom_x)) _odom_x)
  (:odom_y
   (&optional __odom_y)
   (if __odom_y (setq _odom_y __odom_y)) _odom_y)
  (:odom_theta
   (&optional __odom_theta)
   (if __odom_theta (setq _odom_theta __odom_theta)) _odom_theta)
  (:meas_rho
   (&optional __meas_rho)
   (if __meas_rho (setq _meas_rho __meas_rho)) _meas_rho)
  (:meas_beta
   (&optional __meas_beta)
   (if __meas_beta (setq _meas_beta __meas_beta)) _meas_beta)
  (:meas_theta
   (&optional __meas_theta)
   (if __meas_theta (setq _meas_theta __meas_theta)) _meas_theta)
  (:delta_t
   (&optional __delta_t)
   (if __delta_t (setq _delta_t __delta_t)) _delta_t)
  (:gt_rho
   (&optional __gt_rho)
   (if __gt_rho (setq _gt_rho __gt_rho)) _gt_rho)
  (:gt_beta
   (&optional __gt_beta)
   (if __gt_beta (setq _gt_beta __gt_beta)) _gt_beta)
  (:gt_theta
   (&optional __gt_theta)
   (if __gt_theta (setq _gt_theta __gt_theta)) _gt_theta)
  (:case0_x
   (&optional __case0_x)
   (if __case0_x (setq _case0_x __case0_x)) _case0_x)
  (:case0_y
   (&optional __case0_y)
   (if __case0_y (setq _case0_y __case0_y)) _case0_y)
  (:case0_t
   (&optional __case0_t)
   (if __case0_t (setq _case0_t __case0_t)) _case0_t)
  (:case1_x
   (&optional __case1_x)
   (if __case1_x (setq _case1_x __case1_x)) _case1_x)
  (:case1_y
   (&optional __case1_y)
   (if __case1_y (setq _case1_y __case1_y)) _case1_y)
  (:case1_t
   (&optional __case1_t)
   (if __case1_t (setq _case1_t __case1_t)) _case1_t)
  (:case2_x
   (&optional __case2_x)
   (if __case2_x (setq _case2_x __case2_x)) _case2_x)
  (:case2_y
   (&optional __case2_y)
   (if __case2_y (setq _case2_y __case2_y)) _case2_y)
  (:case2_t
   (&optional __case2_t)
   (if __case2_t (setq _case2_t __case2_t)) _case2_t)
  (:case3_x
   (&optional __case3_x)
   (if __case3_x (setq _case3_x __case3_x)) _case3_x)
  (:case3_y
   (&optional __case3_y)
   (if __case3_y (setq _case3_y __case3_y)) _case3_y)
  (:case3_t
   (&optional __case3_t)
   (if __case3_t (setq _case3_t __case3_t)) _case3_t)
  (:case4_x
   (&optional __case4_x)
   (if __case4_x (setq _case4_x __case4_x)) _case4_x)
  (:case4_y
   (&optional __case4_y)
   (if __case4_y (setq _case4_y __case4_y)) _case4_y)
  (:case4_t
   (&optional __case4_t)
   (if __case4_t (setq _case4_t __case4_t)) _case4_t)
  (:case4_vj
   (&optional __case4_vj)
   (if __case4_vj (setq _case4_vj __case4_vj)) _case4_vj)
  (:case4_wj
   (&optional __case4_wj)
   (if __case4_wj (setq _case4_wj __case4_wj)) _case4_wj)
  (:serialization-length
   ()
   (+
    ;; std_msgs/Header _header
    (send _header :serialization-length)
    ;; float64 _odom_x
    8
    ;; float64 _odom_y
    8
    ;; float64 _odom_theta
    8
    ;; float64 _meas_rho
    8
    ;; float64 _meas_beta
    8
    ;; float64 _meas_theta
    8
    ;; float64 _delta_t
    8
    ;; float64 _gt_rho
    8
    ;; float64 _gt_beta
    8
    ;; float64 _gt_theta
    8
    ;; float64 _case0_x
    8
    ;; float64 _case0_y
    8
    ;; float64 _case0_t
    8
    ;; float64 _case1_x
    8
    ;; float64 _case1_y
    8
    ;; float64 _case1_t
    8
    ;; float64 _case2_x
    8
    ;; float64 _case2_y
    8
    ;; float64 _case2_t
    8
    ;; float64 _case3_x
    8
    ;; float64 _case3_y
    8
    ;; float64 _case3_t
    8
    ;; float64 _case4_x
    8
    ;; float64 _case4_y
    8
    ;; float64 _case4_t
    8
    ;; float64 _case4_vj
    8
    ;; float64 _case4_wj
    8
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; std_msgs/Header _header
       (send _header :serialize s)
     ;; float64 _odom_x
       (sys::poke _odom_x (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _odom_y
       (sys::poke _odom_y (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _odom_theta
       (sys::poke _odom_theta (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _meas_rho
       (sys::poke _meas_rho (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _meas_beta
       (sys::poke _meas_beta (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _meas_theta
       (sys::poke _meas_theta (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _delta_t
       (sys::poke _delta_t (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _gt_rho
       (sys::poke _gt_rho (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _gt_beta
       (sys::poke _gt_beta (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _gt_theta
       (sys::poke _gt_theta (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _case0_x
       (sys::poke _case0_x (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _case0_y
       (sys::poke _case0_y (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _case0_t
       (sys::poke _case0_t (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _case1_x
       (sys::poke _case1_x (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _case1_y
       (sys::poke _case1_y (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _case1_t
       (sys::poke _case1_t (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _case2_x
       (sys::poke _case2_x (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _case2_y
       (sys::poke _case2_y (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _case2_t
       (sys::poke _case2_t (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _case3_x
       (sys::poke _case3_x (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _case3_y
       (sys::poke _case3_y (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _case3_t
       (sys::poke _case3_t (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _case4_x
       (sys::poke _case4_x (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _case4_y
       (sys::poke _case4_y (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _case4_t
       (sys::poke _case4_t (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _case4_vj
       (sys::poke _case4_vj (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _case4_wj
       (sys::poke _case4_wj (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; std_msgs/Header _header
     (send _header :deserialize buf ptr-) (incf ptr- (send _header :serialization-length))
   ;; float64 _odom_x
     (setq _odom_x (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _odom_y
     (setq _odom_y (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _odom_theta
     (setq _odom_theta (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _meas_rho
     (setq _meas_rho (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _meas_beta
     (setq _meas_beta (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _meas_theta
     (setq _meas_theta (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _delta_t
     (setq _delta_t (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _gt_rho
     (setq _gt_rho (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _gt_beta
     (setq _gt_beta (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _gt_theta
     (setq _gt_theta (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _case0_x
     (setq _case0_x (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _case0_y
     (setq _case0_y (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _case0_t
     (setq _case0_t (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _case1_x
     (setq _case1_x (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _case1_y
     (setq _case1_y (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _case1_t
     (setq _case1_t (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _case2_x
     (setq _case2_x (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _case2_y
     (setq _case2_y (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _case2_t
     (setq _case2_t (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _case3_x
     (setq _case3_x (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _case3_y
     (setq _case3_y (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _case3_t
     (setq _case3_t (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _case4_x
     (setq _case4_x (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _case4_y
     (setq _case4_y (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _case4_t
     (setq _case4_t (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _case4_vj
     (setq _case4_vj (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _case4_wj
     (setq _case4_wj (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;;
   self)
  )

(setf (get multiple_turtlebots_estm::SyncMsg :md5sum-) "e6952c1e230cf227605592ba046a70b4")
(setf (get multiple_turtlebots_estm::SyncMsg :datatype-) "multiple_turtlebots_estm/SyncMsg")
(setf (get multiple_turtlebots_estm::SyncMsg :definition-)
      "std_msgs/Header header
float64 odom_x
float64 odom_y
float64 odom_theta
float64 meas_rho
float64 meas_beta
float64 meas_theta
float64 delta_t
float64 gt_rho
float64 gt_beta
float64 gt_theta
float64 case0_x
float64 case0_y
float64 case0_t
float64 case1_x
float64 case1_y
float64 case1_t
float64 case2_x
float64 case2_y
float64 case2_t
float64 case3_x
float64 case3_y
float64 case3_t
float64 case4_x
float64 case4_y
float64 case4_t
float64 case4_vj
float64 case4_wj

================================================================================
MSG: std_msgs/Header
# Standard metadata for higher-level stamped data types.
# This is generally used to communicate timestamped data 
# in a particular coordinate frame.
# 
# sequence ID: consecutively increasing ID 
uint32 seq
#Two-integer timestamp that is expressed as:
# * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')
# * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')
# time-handling sugar is provided by the client library
time stamp
#Frame this data is associated with
string frame_id

")



(provide :multiple_turtlebots_estm/SyncMsg "e6952c1e230cf227605592ba046a70b4")


