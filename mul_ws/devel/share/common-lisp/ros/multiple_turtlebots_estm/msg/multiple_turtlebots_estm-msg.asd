
(cl:in-package :asdf)

(defsystem "multiple_turtlebots_estm-msg"
  :depends-on (:roslisp-msg-protocol :roslisp-utils :std_msgs-msg
)
  :components ((:file "_package")
    (:file "SyncMsg" :depends-on ("_package_SyncMsg"))
    (:file "_package_SyncMsg" :depends-on ("_package"))
  ))