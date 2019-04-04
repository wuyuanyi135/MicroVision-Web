// package: mvcam
// file: camera_service.proto

var camera_service_pb = require("./camera_service_pb");
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb");
var camera_definitions_pb = require("./camera_definitions_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var MicroVisionCameraService = (function () {
  function MicroVisionCameraService() {}
  MicroVisionCameraService.serviceName = "mvcam.MicroVisionCameraService";
  return MicroVisionCameraService;
}());

MicroVisionCameraService.GetAvailableAdapters = {
  methodName: "GetAvailableAdapters",
  service: MicroVisionCameraService,
  requestStream: false,
  responseStream: false,
  requestType: google_protobuf_empty_pb.Empty,
  responseType: camera_definitions_pb.AvailableAdaptersResponse
};

MicroVisionCameraService.GetDevices = {
  methodName: "GetDevices",
  service: MicroVisionCameraService,
  requestStream: false,
  responseStream: false,
  requestType: camera_definitions_pb.GetDevicesRequest,
  responseType: camera_definitions_pb.GetDevicesResponse
};

MicroVisionCameraService.QueryDeviceById = {
  methodName: "QueryDeviceById",
  service: MicroVisionCameraService,
  requestStream: false,
  responseStream: false,
  requestType: camera_definitions_pb.IdRequest,
  responseType: camera_definitions_pb.DeviceInfo
};

MicroVisionCameraService.OpenCamera = {
  methodName: "OpenCamera",
  service: MicroVisionCameraService,
  requestStream: false,
  responseStream: false,
  requestType: camera_definitions_pb.IdRequest,
  responseType: google_protobuf_empty_pb.Empty
};

MicroVisionCameraService.ShutdownCamera = {
  methodName: "ShutdownCamera",
  service: MicroVisionCameraService,
  requestStream: false,
  responseStream: false,
  requestType: camera_definitions_pb.IdRequest,
  responseType: google_protobuf_empty_pb.Empty
};

MicroVisionCameraService.ConfigureCamera = {
  methodName: "ConfigureCamera",
  service: MicroVisionCameraService,
  requestStream: false,
  responseStream: false,
  requestType: camera_definitions_pb.ConfigureRequest,
  responseType: google_protobuf_empty_pb.Empty
};

MicroVisionCameraService.GetConfiguration = {
  methodName: "GetConfiguration",
  service: MicroVisionCameraService,
  requestStream: false,
  responseStream: false,
  requestType: camera_definitions_pb.IdRequest,
  responseType: camera_definitions_pb.Configuration
};

MicroVisionCameraService.GetStatus = {
  methodName: "GetStatus",
  service: MicroVisionCameraService,
  requestStream: false,
  responseStream: false,
  requestType: camera_definitions_pb.IdRequest,
  responseType: camera_definitions_pb.Status
};

MicroVisionCameraService.Capture = {
  methodName: "Capture",
  service: MicroVisionCameraService,
  requestStream: false,
  responseStream: false,
  requestType: camera_definitions_pb.IdRequest,
  responseType: camera_definitions_pb.Frame
};

MicroVisionCameraService.Streaming = {
  methodName: "Streaming",
  service: MicroVisionCameraService,
  requestStream: false,
  responseStream: true,
  requestType: camera_definitions_pb.StreamingRequest,
  responseType: camera_definitions_pb.FrameStream
};

MicroVisionCameraService.ResetDevice = {
  methodName: "ResetDevice",
  service: MicroVisionCameraService,
  requestStream: false,
  responseStream: false,
  requestType: camera_definitions_pb.IdRequest,
  responseType: google_protobuf_empty_pb.Empty
};

MicroVisionCameraService.ControlDeviceState = {
  methodName: "ControlDeviceState",
  service: MicroVisionCameraService,
  requestStream: false,
  responseStream: false,
  requestType: camera_definitions_pb.DeviceControlRequest,
  responseType: google_protobuf_empty_pb.Empty
};

exports.MicroVisionCameraService = MicroVisionCameraService;

function MicroVisionCameraServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MicroVisionCameraServiceClient.prototype.getAvailableAdapters = function getAvailableAdapters(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MicroVisionCameraService.GetAvailableAdapters, {
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

MicroVisionCameraServiceClient.prototype.getDevices = function getDevices(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MicroVisionCameraService.GetDevices, {
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

MicroVisionCameraServiceClient.prototype.queryDeviceById = function queryDeviceById(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MicroVisionCameraService.QueryDeviceById, {
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

MicroVisionCameraServiceClient.prototype.openCamera = function openCamera(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MicroVisionCameraService.OpenCamera, {
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

MicroVisionCameraServiceClient.prototype.shutdownCamera = function shutdownCamera(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MicroVisionCameraService.ShutdownCamera, {
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

MicroVisionCameraServiceClient.prototype.configureCamera = function configureCamera(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MicroVisionCameraService.ConfigureCamera, {
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

MicroVisionCameraServiceClient.prototype.getConfiguration = function getConfiguration(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MicroVisionCameraService.GetConfiguration, {
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

MicroVisionCameraServiceClient.prototype.getStatus = function getStatus(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MicroVisionCameraService.GetStatus, {
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

MicroVisionCameraServiceClient.prototype.capture = function capture(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MicroVisionCameraService.Capture, {
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

MicroVisionCameraServiceClient.prototype.streaming = function streaming(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(MicroVisionCameraService.Streaming, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.end.forEach(function (handler) {
        handler();
      });
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

MicroVisionCameraServiceClient.prototype.resetDevice = function resetDevice(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MicroVisionCameraService.ResetDevice, {
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

MicroVisionCameraServiceClient.prototype.controlDeviceState = function controlDeviceState(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MicroVisionCameraService.ControlDeviceState, {
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

exports.MicroVisionCameraServiceClient = MicroVisionCameraServiceClient;

