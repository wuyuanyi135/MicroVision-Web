// package: mvcgi
// file: cgi_service.proto

var cgi_service_pb = require("./cgi_service_pb");
var cgi_definitions_pb = require("./cgi_definitions_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var MicroVisionCGI = (function () {
  function MicroVisionCGI() {}
  MicroVisionCGI.serviceName = "mvcgi.MicroVisionCGI";
  return MicroVisionCGI;
}());

MicroVisionCGI.GetVersion = {
  methodName: "GetVersion",
  service: MicroVisionCGI,
  requestStream: false,
  responseStream: false,
  requestType: cgi_definitions_pb.GetVersionRequest,
  responseType: cgi_definitions_pb.GetVersionResponse
};

MicroVisionCGI.BackendServerInterface = {
  methodName: "BackendServerInterface",
  service: MicroVisionCGI,
  requestStream: false,
  responseStream: false,
  requestType: cgi_definitions_pb.BackendServerInterfaceRequest,
  responseType: cgi_definitions_pb.BackendServerInterfaceResponse
};

MicroVisionCGI.ListDevices = {
  methodName: "ListDevices",
  service: MicroVisionCGI,
  requestStream: false,
  responseStream: false,
  requestType: cgi_definitions_pb.ListDevicesRequest,
  responseType: cgi_definitions_pb.ListDevicesResponse
};

MicroVisionCGI.DeviceInterface = {
  methodName: "DeviceInterface",
  service: MicroVisionCGI,
  requestStream: false,
  responseStream: false,
  requestType: cgi_definitions_pb.DeviceInterfaceRequest,
  responseType: cgi_definitions_pb.DeviceInterfaceResponse
};

MicroVisionCGI.DeviceParameterInterface = {
  methodName: "DeviceParameterInterface",
  service: MicroVisionCGI,
  requestStream: false,
  responseStream: false,
  requestType: cgi_definitions_pb.DeviceParameterInterfaceRequest,
  responseType: cgi_definitions_pb.DeviceParameterInterfaceResponse
};

MicroVisionCGI.CameraStreaming = {
  methodName: "CameraStreaming",
  service: MicroVisionCGI,
  requestStream: false,
  responseStream: true,
  requestType: cgi_definitions_pb.CameraStreamingRequest,
  responseType: cgi_definitions_pb.CameraStream
};

MicroVisionCGI.CameraCapturing = {
  methodName: "CameraCapturing",
  service: MicroVisionCGI,
  requestStream: false,
  responseStream: false,
  requestType: cgi_definitions_pb.CameraCapturingRequest,
  responseType: cgi_definitions_pb.CameraCapturingResponse
};

exports.MicroVisionCGI = MicroVisionCGI;

function MicroVisionCGIClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MicroVisionCGIClient.prototype.getVersion = function getVersion(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MicroVisionCGI.GetVersion, {
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

MicroVisionCGIClient.prototype.backendServerInterface = function backendServerInterface(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MicroVisionCGI.BackendServerInterface, {
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

MicroVisionCGIClient.prototype.listDevices = function listDevices(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MicroVisionCGI.ListDevices, {
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

MicroVisionCGIClient.prototype.deviceInterface = function deviceInterface(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MicroVisionCGI.DeviceInterface, {
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

MicroVisionCGIClient.prototype.deviceParameterInterface = function deviceParameterInterface(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MicroVisionCGI.DeviceParameterInterface, {
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

MicroVisionCGIClient.prototype.cameraStreaming = function cameraStreaming(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(MicroVisionCGI.CameraStreaming, {
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

MicroVisionCGIClient.prototype.cameraCapturing = function cameraCapturing(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MicroVisionCGI.CameraCapturing, {
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

exports.MicroVisionCGIClient = MicroVisionCGIClient;

