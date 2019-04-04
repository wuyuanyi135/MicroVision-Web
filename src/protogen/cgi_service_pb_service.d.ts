// package: mvcgi
// file: cgi_service.proto

import * as cgi_service_pb from "./cgi_service_pb";
import * as cgi_definitions_pb from "./cgi_definitions_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MicroVisionCGIGetVersion = {
  readonly methodName: string;
  readonly service: typeof MicroVisionCGI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cgi_definitions_pb.GetVersionRequest;
  readonly responseType: typeof cgi_definitions_pb.GetVersionResponse;
};

type MicroVisionCGIBackendServerInterface = {
  readonly methodName: string;
  readonly service: typeof MicroVisionCGI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cgi_definitions_pb.BackendServerInterfaceRequest;
  readonly responseType: typeof cgi_definitions_pb.BackendServerInterfaceResponse;
};

type MicroVisionCGIListDevices = {
  readonly methodName: string;
  readonly service: typeof MicroVisionCGI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cgi_definitions_pb.ListDevicesRequest;
  readonly responseType: typeof cgi_definitions_pb.ListDevicesResponse;
};

type MicroVisionCGIDeviceInterface = {
  readonly methodName: string;
  readonly service: typeof MicroVisionCGI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cgi_definitions_pb.DeviceInterfaceRequest;
  readonly responseType: typeof cgi_definitions_pb.DeviceInterfaceResponse;
};

type MicroVisionCGIDeviceParameterInterface = {
  readonly methodName: string;
  readonly service: typeof MicroVisionCGI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cgi_definitions_pb.DeviceParameterInterfaceRequest;
  readonly responseType: typeof cgi_definitions_pb.DeviceParameterInterfaceResponse;
};

type MicroVisionCGICameraStreaming = {
  readonly methodName: string;
  readonly service: typeof MicroVisionCGI;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof cgi_definitions_pb.CameraStreamingRequest;
  readonly responseType: typeof cgi_definitions_pb.CameraStream;
};

type MicroVisionCGICameraCapturing = {
  readonly methodName: string;
  readonly service: typeof MicroVisionCGI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cgi_definitions_pb.CameraCapturingRequest;
  readonly responseType: typeof cgi_definitions_pb.CameraCapturingResponse;
};

export class MicroVisionCGI {
  static readonly serviceName: string;
  static readonly GetVersion: MicroVisionCGIGetVersion;
  static readonly BackendServerInterface: MicroVisionCGIBackendServerInterface;
  static readonly ListDevices: MicroVisionCGIListDevices;
  static readonly DeviceInterface: MicroVisionCGIDeviceInterface;
  static readonly DeviceParameterInterface: MicroVisionCGIDeviceParameterInterface;
  static readonly CameraStreaming: MicroVisionCGICameraStreaming;
  static readonly CameraCapturing: MicroVisionCGICameraCapturing;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: () => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: () => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: () => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class MicroVisionCGIClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getVersion(
    requestMessage: cgi_definitions_pb.GetVersionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cgi_definitions_pb.GetVersionResponse|null) => void
  ): UnaryResponse;
  getVersion(
    requestMessage: cgi_definitions_pb.GetVersionRequest,
    callback: (error: ServiceError|null, responseMessage: cgi_definitions_pb.GetVersionResponse|null) => void
  ): UnaryResponse;
  backendServerInterface(
    requestMessage: cgi_definitions_pb.BackendServerInterfaceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cgi_definitions_pb.BackendServerInterfaceResponse|null) => void
  ): UnaryResponse;
  backendServerInterface(
    requestMessage: cgi_definitions_pb.BackendServerInterfaceRequest,
    callback: (error: ServiceError|null, responseMessage: cgi_definitions_pb.BackendServerInterfaceResponse|null) => void
  ): UnaryResponse;
  listDevices(
    requestMessage: cgi_definitions_pb.ListDevicesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cgi_definitions_pb.ListDevicesResponse|null) => void
  ): UnaryResponse;
  listDevices(
    requestMessage: cgi_definitions_pb.ListDevicesRequest,
    callback: (error: ServiceError|null, responseMessage: cgi_definitions_pb.ListDevicesResponse|null) => void
  ): UnaryResponse;
  deviceInterface(
    requestMessage: cgi_definitions_pb.DeviceInterfaceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cgi_definitions_pb.DeviceInterfaceResponse|null) => void
  ): UnaryResponse;
  deviceInterface(
    requestMessage: cgi_definitions_pb.DeviceInterfaceRequest,
    callback: (error: ServiceError|null, responseMessage: cgi_definitions_pb.DeviceInterfaceResponse|null) => void
  ): UnaryResponse;
  deviceParameterInterface(
    requestMessage: cgi_definitions_pb.DeviceParameterInterfaceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cgi_definitions_pb.DeviceParameterInterfaceResponse|null) => void
  ): UnaryResponse;
  deviceParameterInterface(
    requestMessage: cgi_definitions_pb.DeviceParameterInterfaceRequest,
    callback: (error: ServiceError|null, responseMessage: cgi_definitions_pb.DeviceParameterInterfaceResponse|null) => void
  ): UnaryResponse;
  cameraStreaming(requestMessage: cgi_definitions_pb.CameraStreamingRequest, metadata?: grpc.Metadata): ResponseStream<cgi_definitions_pb.CameraStream>;
  cameraCapturing(
    requestMessage: cgi_definitions_pb.CameraCapturingRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cgi_definitions_pb.CameraCapturingResponse|null) => void
  ): UnaryResponse;
  cameraCapturing(
    requestMessage: cgi_definitions_pb.CameraCapturingRequest,
    callback: (error: ServiceError|null, responseMessage: cgi_definitions_pb.CameraCapturingResponse|null) => void
  ): UnaryResponse;
}

