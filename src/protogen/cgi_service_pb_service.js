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

MicroVisionCGI.ListDevices = {
  methodName: "ListDevices",
  service: MicroVisionCGI,
  requestStream: false,
  responseStream: false,
  requestType: cgi_definitions_pb.ListDevicesRequest,
  responseType: cgi_definitions_pb.ListDevicesResponse
};

MicroVisionCGI.ConnectDevices = {
  methodName: "ConnectDevices",
  service: MicroVisionCGI,
  requestStream: false,
  responseStream: false,
  requestType: cgi_definitions_pb.ConnectDevicesRequest,
  responseType: cgi_definitions_pb.ConnectDevicesResponse
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

MicroVisionCGIClient.prototype.connectDevices = function connectDevices(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MicroVisionCGI.ConnectDevices, {
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

