// Auto-generated. Do not edit!

// (in-package multiple_turtlebots_estm.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class SyncMsg {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.header = null;
      this.odom_x = null;
      this.odom_y = null;
      this.odom_theta = null;
      this.meas_rho = null;
      this.meas_beta = null;
      this.meas_theta = null;
      this.delta_t = null;
      this.gt_rho = null;
      this.gt_beta = null;
      this.gt_theta = null;
      this.case0_x = null;
      this.case0_y = null;
      this.case0_t = null;
      this.case1_x = null;
      this.case1_y = null;
      this.case1_t = null;
      this.case2_x = null;
      this.case2_y = null;
      this.case2_t = null;
      this.case3_x = null;
      this.case3_y = null;
      this.case3_t = null;
      this.case4_x = null;
      this.case4_y = null;
      this.case4_t = null;
      this.case4_vj = null;
      this.case4_wj = null;
    }
    else {
      if (initObj.hasOwnProperty('header')) {
        this.header = initObj.header
      }
      else {
        this.header = new std_msgs.msg.Header();
      }
      if (initObj.hasOwnProperty('odom_x')) {
        this.odom_x = initObj.odom_x
      }
      else {
        this.odom_x = 0.0;
      }
      if (initObj.hasOwnProperty('odom_y')) {
        this.odom_y = initObj.odom_y
      }
      else {
        this.odom_y = 0.0;
      }
      if (initObj.hasOwnProperty('odom_theta')) {
        this.odom_theta = initObj.odom_theta
      }
      else {
        this.odom_theta = 0.0;
      }
      if (initObj.hasOwnProperty('meas_rho')) {
        this.meas_rho = initObj.meas_rho
      }
      else {
        this.meas_rho = 0.0;
      }
      if (initObj.hasOwnProperty('meas_beta')) {
        this.meas_beta = initObj.meas_beta
      }
      else {
        this.meas_beta = 0.0;
      }
      if (initObj.hasOwnProperty('meas_theta')) {
        this.meas_theta = initObj.meas_theta
      }
      else {
        this.meas_theta = 0.0;
      }
      if (initObj.hasOwnProperty('delta_t')) {
        this.delta_t = initObj.delta_t
      }
      else {
        this.delta_t = 0.0;
      }
      if (initObj.hasOwnProperty('gt_rho')) {
        this.gt_rho = initObj.gt_rho
      }
      else {
        this.gt_rho = 0.0;
      }
      if (initObj.hasOwnProperty('gt_beta')) {
        this.gt_beta = initObj.gt_beta
      }
      else {
        this.gt_beta = 0.0;
      }
      if (initObj.hasOwnProperty('gt_theta')) {
        this.gt_theta = initObj.gt_theta
      }
      else {
        this.gt_theta = 0.0;
      }
      if (initObj.hasOwnProperty('case0_x')) {
        this.case0_x = initObj.case0_x
      }
      else {
        this.case0_x = 0.0;
      }
      if (initObj.hasOwnProperty('case0_y')) {
        this.case0_y = initObj.case0_y
      }
      else {
        this.case0_y = 0.0;
      }
      if (initObj.hasOwnProperty('case0_t')) {
        this.case0_t = initObj.case0_t
      }
      else {
        this.case0_t = 0.0;
      }
      if (initObj.hasOwnProperty('case1_x')) {
        this.case1_x = initObj.case1_x
      }
      else {
        this.case1_x = 0.0;
      }
      if (initObj.hasOwnProperty('case1_y')) {
        this.case1_y = initObj.case1_y
      }
      else {
        this.case1_y = 0.0;
      }
      if (initObj.hasOwnProperty('case1_t')) {
        this.case1_t = initObj.case1_t
      }
      else {
        this.case1_t = 0.0;
      }
      if (initObj.hasOwnProperty('case2_x')) {
        this.case2_x = initObj.case2_x
      }
      else {
        this.case2_x = 0.0;
      }
      if (initObj.hasOwnProperty('case2_y')) {
        this.case2_y = initObj.case2_y
      }
      else {
        this.case2_y = 0.0;
      }
      if (initObj.hasOwnProperty('case2_t')) {
        this.case2_t = initObj.case2_t
      }
      else {
        this.case2_t = 0.0;
      }
      if (initObj.hasOwnProperty('case3_x')) {
        this.case3_x = initObj.case3_x
      }
      else {
        this.case3_x = 0.0;
      }
      if (initObj.hasOwnProperty('case3_y')) {
        this.case3_y = initObj.case3_y
      }
      else {
        this.case3_y = 0.0;
      }
      if (initObj.hasOwnProperty('case3_t')) {
        this.case3_t = initObj.case3_t
      }
      else {
        this.case3_t = 0.0;
      }
      if (initObj.hasOwnProperty('case4_x')) {
        this.case4_x = initObj.case4_x
      }
      else {
        this.case4_x = 0.0;
      }
      if (initObj.hasOwnProperty('case4_y')) {
        this.case4_y = initObj.case4_y
      }
      else {
        this.case4_y = 0.0;
      }
      if (initObj.hasOwnProperty('case4_t')) {
        this.case4_t = initObj.case4_t
      }
      else {
        this.case4_t = 0.0;
      }
      if (initObj.hasOwnProperty('case4_vj')) {
        this.case4_vj = initObj.case4_vj
      }
      else {
        this.case4_vj = 0.0;
      }
      if (initObj.hasOwnProperty('case4_wj')) {
        this.case4_wj = initObj.case4_wj
      }
      else {
        this.case4_wj = 0.0;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type SyncMsg
    // Serialize message field [header]
    bufferOffset = std_msgs.msg.Header.serialize(obj.header, buffer, bufferOffset);
    // Serialize message field [odom_x]
    bufferOffset = _serializer.float64(obj.odom_x, buffer, bufferOffset);
    // Serialize message field [odom_y]
    bufferOffset = _serializer.float64(obj.odom_y, buffer, bufferOffset);
    // Serialize message field [odom_theta]
    bufferOffset = _serializer.float64(obj.odom_theta, buffer, bufferOffset);
    // Serialize message field [meas_rho]
    bufferOffset = _serializer.float64(obj.meas_rho, buffer, bufferOffset);
    // Serialize message field [meas_beta]
    bufferOffset = _serializer.float64(obj.meas_beta, buffer, bufferOffset);
    // Serialize message field [meas_theta]
    bufferOffset = _serializer.float64(obj.meas_theta, buffer, bufferOffset);
    // Serialize message field [delta_t]
    bufferOffset = _serializer.float64(obj.delta_t, buffer, bufferOffset);
    // Serialize message field [gt_rho]
    bufferOffset = _serializer.float64(obj.gt_rho, buffer, bufferOffset);
    // Serialize message field [gt_beta]
    bufferOffset = _serializer.float64(obj.gt_beta, buffer, bufferOffset);
    // Serialize message field [gt_theta]
    bufferOffset = _serializer.float64(obj.gt_theta, buffer, bufferOffset);
    // Serialize message field [case0_x]
    bufferOffset = _serializer.float64(obj.case0_x, buffer, bufferOffset);
    // Serialize message field [case0_y]
    bufferOffset = _serializer.float64(obj.case0_y, buffer, bufferOffset);
    // Serialize message field [case0_t]
    bufferOffset = _serializer.float64(obj.case0_t, buffer, bufferOffset);
    // Serialize message field [case1_x]
    bufferOffset = _serializer.float64(obj.case1_x, buffer, bufferOffset);
    // Serialize message field [case1_y]
    bufferOffset = _serializer.float64(obj.case1_y, buffer, bufferOffset);
    // Serialize message field [case1_t]
    bufferOffset = _serializer.float64(obj.case1_t, buffer, bufferOffset);
    // Serialize message field [case2_x]
    bufferOffset = _serializer.float64(obj.case2_x, buffer, bufferOffset);
    // Serialize message field [case2_y]
    bufferOffset = _serializer.float64(obj.case2_y, buffer, bufferOffset);
    // Serialize message field [case2_t]
    bufferOffset = _serializer.float64(obj.case2_t, buffer, bufferOffset);
    // Serialize message field [case3_x]
    bufferOffset = _serializer.float64(obj.case3_x, buffer, bufferOffset);
    // Serialize message field [case3_y]
    bufferOffset = _serializer.float64(obj.case3_y, buffer, bufferOffset);
    // Serialize message field [case3_t]
    bufferOffset = _serializer.float64(obj.case3_t, buffer, bufferOffset);
    // Serialize message field [case4_x]
    bufferOffset = _serializer.float64(obj.case4_x, buffer, bufferOffset);
    // Serialize message field [case4_y]
    bufferOffset = _serializer.float64(obj.case4_y, buffer, bufferOffset);
    // Serialize message field [case4_t]
    bufferOffset = _serializer.float64(obj.case4_t, buffer, bufferOffset);
    // Serialize message field [case4_vj]
    bufferOffset = _serializer.float64(obj.case4_vj, buffer, bufferOffset);
    // Serialize message field [case4_wj]
    bufferOffset = _serializer.float64(obj.case4_wj, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type SyncMsg
    let len;
    let data = new SyncMsg(null);
    // Deserialize message field [header]
    data.header = std_msgs.msg.Header.deserialize(buffer, bufferOffset);
    // Deserialize message field [odom_x]
    data.odom_x = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [odom_y]
    data.odom_y = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [odom_theta]
    data.odom_theta = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [meas_rho]
    data.meas_rho = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [meas_beta]
    data.meas_beta = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [meas_theta]
    data.meas_theta = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [delta_t]
    data.delta_t = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [gt_rho]
    data.gt_rho = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [gt_beta]
    data.gt_beta = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [gt_theta]
    data.gt_theta = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [case0_x]
    data.case0_x = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [case0_y]
    data.case0_y = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [case0_t]
    data.case0_t = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [case1_x]
    data.case1_x = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [case1_y]
    data.case1_y = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [case1_t]
    data.case1_t = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [case2_x]
    data.case2_x = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [case2_y]
    data.case2_y = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [case2_t]
    data.case2_t = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [case3_x]
    data.case3_x = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [case3_y]
    data.case3_y = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [case3_t]
    data.case3_t = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [case4_x]
    data.case4_x = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [case4_y]
    data.case4_y = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [case4_t]
    data.case4_t = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [case4_vj]
    data.case4_vj = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [case4_wj]
    data.case4_wj = _deserializer.float64(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += std_msgs.msg.Header.getMessageSize(object.header);
    return length + 216;
  }

  static datatype() {
    // Returns string type for a message object
    return 'multiple_turtlebots_estm/SyncMsg';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'e6952c1e230cf227605592ba046a70b4';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    std_msgs/Header header
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
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new SyncMsg(null);
    if (msg.header !== undefined) {
      resolved.header = std_msgs.msg.Header.Resolve(msg.header)
    }
    else {
      resolved.header = new std_msgs.msg.Header()
    }

    if (msg.odom_x !== undefined) {
      resolved.odom_x = msg.odom_x;
    }
    else {
      resolved.odom_x = 0.0
    }

    if (msg.odom_y !== undefined) {
      resolved.odom_y = msg.odom_y;
    }
    else {
      resolved.odom_y = 0.0
    }

    if (msg.odom_theta !== undefined) {
      resolved.odom_theta = msg.odom_theta;
    }
    else {
      resolved.odom_theta = 0.0
    }

    if (msg.meas_rho !== undefined) {
      resolved.meas_rho = msg.meas_rho;
    }
    else {
      resolved.meas_rho = 0.0
    }

    if (msg.meas_beta !== undefined) {
      resolved.meas_beta = msg.meas_beta;
    }
    else {
      resolved.meas_beta = 0.0
    }

    if (msg.meas_theta !== undefined) {
      resolved.meas_theta = msg.meas_theta;
    }
    else {
      resolved.meas_theta = 0.0
    }

    if (msg.delta_t !== undefined) {
      resolved.delta_t = msg.delta_t;
    }
    else {
      resolved.delta_t = 0.0
    }

    if (msg.gt_rho !== undefined) {
      resolved.gt_rho = msg.gt_rho;
    }
    else {
      resolved.gt_rho = 0.0
    }

    if (msg.gt_beta !== undefined) {
      resolved.gt_beta = msg.gt_beta;
    }
    else {
      resolved.gt_beta = 0.0
    }

    if (msg.gt_theta !== undefined) {
      resolved.gt_theta = msg.gt_theta;
    }
    else {
      resolved.gt_theta = 0.0
    }

    if (msg.case0_x !== undefined) {
      resolved.case0_x = msg.case0_x;
    }
    else {
      resolved.case0_x = 0.0
    }

    if (msg.case0_y !== undefined) {
      resolved.case0_y = msg.case0_y;
    }
    else {
      resolved.case0_y = 0.0
    }

    if (msg.case0_t !== undefined) {
      resolved.case0_t = msg.case0_t;
    }
    else {
      resolved.case0_t = 0.0
    }

    if (msg.case1_x !== undefined) {
      resolved.case1_x = msg.case1_x;
    }
    else {
      resolved.case1_x = 0.0
    }

    if (msg.case1_y !== undefined) {
      resolved.case1_y = msg.case1_y;
    }
    else {
      resolved.case1_y = 0.0
    }

    if (msg.case1_t !== undefined) {
      resolved.case1_t = msg.case1_t;
    }
    else {
      resolved.case1_t = 0.0
    }

    if (msg.case2_x !== undefined) {
      resolved.case2_x = msg.case2_x;
    }
    else {
      resolved.case2_x = 0.0
    }

    if (msg.case2_y !== undefined) {
      resolved.case2_y = msg.case2_y;
    }
    else {
      resolved.case2_y = 0.0
    }

    if (msg.case2_t !== undefined) {
      resolved.case2_t = msg.case2_t;
    }
    else {
      resolved.case2_t = 0.0
    }

    if (msg.case3_x !== undefined) {
      resolved.case3_x = msg.case3_x;
    }
    else {
      resolved.case3_x = 0.0
    }

    if (msg.case3_y !== undefined) {
      resolved.case3_y = msg.case3_y;
    }
    else {
      resolved.case3_y = 0.0
    }

    if (msg.case3_t !== undefined) {
      resolved.case3_t = msg.case3_t;
    }
    else {
      resolved.case3_t = 0.0
    }

    if (msg.case4_x !== undefined) {
      resolved.case4_x = msg.case4_x;
    }
    else {
      resolved.case4_x = 0.0
    }

    if (msg.case4_y !== undefined) {
      resolved.case4_y = msg.case4_y;
    }
    else {
      resolved.case4_y = 0.0
    }

    if (msg.case4_t !== undefined) {
      resolved.case4_t = msg.case4_t;
    }
    else {
      resolved.case4_t = 0.0
    }

    if (msg.case4_vj !== undefined) {
      resolved.case4_vj = msg.case4_vj;
    }
    else {
      resolved.case4_vj = 0.0
    }

    if (msg.case4_wj !== undefined) {
      resolved.case4_wj = msg.case4_wj;
    }
    else {
      resolved.case4_wj = 0.0
    }

    return resolved;
    }
};

module.exports = SyncMsg;
