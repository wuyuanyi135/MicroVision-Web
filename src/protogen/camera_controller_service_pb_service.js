// package: mvcamctrl
// file: camera_controller_service.proto

var camera_controller_service_pb = require("./camera_controller_service_pb");
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb");
var camera_controller_definitions_pb = require("./camera_controller_definitions_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var MicroVisionCameraControlService = (function () {
  function MicroVisionCameraControlService() {}
  MicroVisionCameraControlService.serviceName = "mvcamctrl.MicroVisionCameraControlService";
  return MicroVisionCameraControlService;
}());

MicroVisionCameraControlService.GetSerialDevices = {
  methodName: "GetSerialDevices",
  service: MicroVisionCameraControlService,
  requestStream: false,
  responseStream: false,
  requestType: google_protobuf_empty_pb.Empty,
  responseType: camera_controller_definitions_pb.SerialListResponse
};

MicroVisionCameraControlService.GetDriverVersion = {
  methodName: "GetDriverVersion",
  service: MicroVisionCameraControlService,
  requestStream: false,
  responseStream: false,
  requestType: google_protobuf_empty_pb.Empty,
  responseType: camera_controller_definitions_pb.DriverVersionResponse
};

MicroVisionCameraControlService.Connect = {
  methodName: "Connect",
  service: MicroVisionCameraControlService,
  requestStream: false,
  responseStream: false,
  requestType: camera_controller_definitions_pb.ConnectRequest,
  responseType: camera_controller_definitions_pb.EmptyResponse
};

MicroVisionCameraControlService.Disconnect = {
  methodName: "Disconnect",
  service: MicroVisionCameraControlService,
  requestStream: false,
  responseStream: false,
  requestType: google_protobuf_empty_pb.Empty,
  responseType: camera_controller_definitions_pb.EmptyResponse
};

MicroVisionCameraControlService.GetDeviceVersion = {
  methodName: "GetDeviceVersion",
  service: MicroVisionCameraControlService,
  requestStream: false,
  responseStream: false,
  requestType: google_protobuf_empty_pb.Empty,
  responseType: camera_controller_definitions_pb.DeviceVersionResponse
};

MicroVisionCameraControlService.SetPower = {
  methodName: "SetPower",
  service: MicroVisionCameraControlService,
  requestStream: false,
  responseStream: false,
  requestType: camera_controller_definitions_pb.SetPowerRequest,
  responseType: camera_controller_definitions_pb.EmptyResponse
};

MicroVisionCameraControlService.GetPower = {
  methodName: "GetPower",
  service: MicroVisionCameraControlService,
  requestStream: false,
  responseStream: false,
  requestType: google_protobuf_empty_pb.Empty,
  responseType: camera_controller_definitions_pb.PowerConfiguration
};

MicroVisionCameraControlService.SetLaserParam = {
  methodName: "SetLaserParam",
  service: MicroVisionCameraControlService,
  requestStream: false,
  responseStream: false,
  requestType: camera_controller_definitions_pb.SetLaserRequest,
  responseType: camera_controller_definitions_pb.EmptyResponse
};

MicroVisionCameraControlService.GetLaserParam = {
  methodName: "GetLaserParam",
  service: MicroVisionCameraControlService,
  requestStream: false,
  responseStream: false,
  requestType: google_protobuf_empty_pb.Empty,
  responseType: camera_controller_definitions_pb.LaserConfiguration
};

MicroVisionCameraControlService.CommitParameter = {
  methodName: "CommitParameter",
  service: MicroVisionCameraControlService,
  requestStream: false,
  responseStream: false,
  requestType: google_protobuf_empty_pb.Empty,
  responseType: camera_controller_definitions_pb.EmptyResponse
};

MicroVisionCameraControlService.ControlLaser = {
  methodName: "ControlLaser",
  service: MicroVisionCameraControlService,
  requestStream: false,
  responseStream: false,
  requestType: camera_controller_definitions_pb.ControlLaserRequest,
  responseType: camera_controller_definitions_pb.EmptyResponse
};

MicroVisionCameraControlService.ResetController = {
  methodName: "ResetController",
  service: MicroVisionCameraControlService,
  requestStream: false,
  responseStream: false,
  requestType: google_protobuf_empty_pb.Empty,
  responseType: camera_controller_definitions_pb.EmptyResponse
};

exports.MicroVisionCameraControlService = MicroVisionCameraControlService;

function MicroVisionCameraControlServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MicroVisionCameraControlServiceClient.prototype.getSerialDevices = function getSerialDevices(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MicroVisionCameraControlService.GetSerialDevices, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MicroVisionCameraControlServiceClient.prototype.getDriverVersion = function getDriverVersion(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MicroVisionCameraControlService.GetDriverVersion, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MicroVisionCameraControlServiceClient.prototype.connect = function connect(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MicroVisionCameraControlService.Connect, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MicroVisionCameraControlServiceClient.prototype.disconnect = function disconnect(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MicroVisionCameraControlService.Disconnect, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MicroVisionCameraControlServiceClient.prototype.getDeviceVersion = function getDeviceVersion(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MicroVisionCameraControlService.GetDeviceVersion, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MicroVisionCameraControlServiceClient.prototype.setPower = function setPower(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MicroVisionCameraControlService.SetPower, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MicroVisionCameraControlServiceClient.prototype.getPower = function getPower(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MicroVisionCameraControlService.GetPower, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MicroVisionCameraControlServiceClient.prototype.setLaserParam = function setLaserParam(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MicroVisionCameraControlService.SetLaserParam, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MicroVisionCameraControlServiceClient.prototype.getLaserParam = function getLaserParam(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MicroVisionCameraControlService.GetLaserParam, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MicroVisionCameraControlServiceClient.prototype.commitParameter = function commitParameter(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MicroVisionCameraControlService.CommitParameter, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MicroVisionCameraControlServiceClient.prototype.controlLaser = function controlLaser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MicroVisionCameraControlService.ControlLaser, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MicroVisionCameraControlServiceClient.prototype.resetController = function resetController(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MicroVisionCameraControlService.ResetController, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.MicroVisionCameraControlServiceClient = MicroVisionCameraControlServiceClient;

