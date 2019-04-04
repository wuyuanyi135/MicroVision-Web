// package: mvcamctrl
// file: camera_controller_service.proto

import * as camera_controller_service_pb from "./camera_controller_service_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as camera_controller_definitions_pb from "./camera_controller_definitions_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MicroVisionCameraControlServiceGetSerialDevices = {
  readonly methodName: string;
  readonly service: typeof MicroVisionCameraControlService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof camera_controller_definitions_pb.GetSerialDevicesRequest;
  readonly responseType: typeof camera_controller_definitions_pb.SerialListResponse;
};

type MicroVisionCameraControlServiceGetDriverVersion = {
  readonly methodName: string;
  readonly service: typeof MicroVisionCameraControlService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof google_protobuf_empty_pb.Empty;
  readonly responseType: typeof camera_controller_definitions_pb.DriverVersionResponse;
};

type MicroVisionCameraControlServiceConnect = {
  readonly methodName: string;
  readonly service: typeof MicroVisionCameraControlService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof camera_controller_definitions_pb.ConnectRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type MicroVisionCameraControlServiceDisconnect = {
  readonly methodName: string;
  readonly service: typeof MicroVisionCameraControlService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof camera_controller_definitions_pb.ConnectRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type MicroVisionCameraControlServiceGetDeviceVersion = {
  readonly methodName: string;
  readonly service: typeof MicroVisionCameraControlService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof google_protobuf_empty_pb.Empty;
  readonly responseType: typeof camera_controller_definitions_pb.DeviceVersionResponse;
};

type MicroVisionCameraControlServiceSetPower = {
  readonly methodName: string;
  readonly service: typeof MicroVisionCameraControlService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof camera_controller_definitions_pb.SetPowerRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type MicroVisionCameraControlServiceGetPower = {
  readonly methodName: string;
  readonly service: typeof MicroVisionCameraControlService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof google_protobuf_empty_pb.Empty;
  readonly responseType: typeof camera_controller_definitions_pb.PowerConfiguration;
};

type MicroVisionCameraControlServiceSetLaserParam = {
  readonly methodName: string;
  readonly service: typeof MicroVisionCameraControlService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof camera_controller_definitions_pb.SetLaserRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type MicroVisionCameraControlServiceGetLaserParam = {
  readonly methodName: string;
  readonly service: typeof MicroVisionCameraControlService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof google_protobuf_empty_pb.Empty;
  readonly responseType: typeof camera_controller_definitions_pb.LaserConfiguration;
};

type MicroVisionCameraControlServiceCommitParameter = {
  readonly methodName: string;
  readonly service: typeof MicroVisionCameraControlService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof google_protobuf_empty_pb.Empty;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type MicroVisionCameraControlServiceControlLaser = {
  readonly methodName: string;
  readonly service: typeof MicroVisionCameraControlService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof camera_controller_definitions_pb.ControlLaserRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type MicroVisionCameraControlServiceResetController = {
  readonly methodName: string;
  readonly service: typeof MicroVisionCameraControlService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof google_protobuf_empty_pb.Empty;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

export class MicroVisionCameraControlService {
  static readonly serviceName: string;
  static readonly GetSerialDevices: MicroVisionCameraControlServiceGetSerialDevices;
  static readonly GetDriverVersion: MicroVisionCameraControlServiceGetDriverVersion;
  static readonly Connect: MicroVisionCameraControlServiceConnect;
  static readonly Disconnect: MicroVisionCameraControlServiceDisconnect;
  static readonly GetDeviceVersion: MicroVisionCameraControlServiceGetDeviceVersion;
  static readonly SetPower: MicroVisionCameraControlServiceSetPower;
  static readonly GetPower: MicroVisionCameraControlServiceGetPower;
  static readonly SetLaserParam: MicroVisionCameraControlServiceSetLaserParam;
  static readonly GetLaserParam: MicroVisionCameraControlServiceGetLaserParam;
  static readonly CommitParameter: MicroVisionCameraControlServiceCommitParameter;
  static readonly ControlLaser: MicroVisionCameraControlServiceControlLaser;
  static readonly ResetController: MicroVisionCameraControlServiceResetController;
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

export class MicroVisionCameraControlServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getSerialDevices(
    requestMessage: camera_controller_definitions_pb.GetSerialDevicesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: camera_controller_definitions_pb.SerialListResponse|null) => void
  ): UnaryResponse;
  getSerialDevices(
    requestMessage: camera_controller_definitions_pb.GetSerialDevicesRequest,
    callback: (error: ServiceError|null, responseMessage: camera_controller_definitions_pb.SerialListResponse|null) => void
  ): UnaryResponse;
  getDriverVersion(
    requestMessage: google_protobuf_empty_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: camera_controller_definitions_pb.DriverVersionResponse|null) => void
  ): UnaryResponse;
  getDriverVersion(
    requestMessage: google_protobuf_empty_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: camera_controller_definitions_pb.DriverVersionResponse|null) => void
  ): UnaryResponse;
  connect(
    requestMessage: camera_controller_definitions_pb.ConnectRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  connect(
    requestMessage: camera_controller_definitions_pb.ConnectRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  disconnect(
    requestMessage: camera_controller_definitions_pb.ConnectRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  disconnect(
    requestMessage: camera_controller_definitions_pb.ConnectRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  getDeviceVersion(
    requestMessage: google_protobuf_empty_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: camera_controller_definitions_pb.DeviceVersionResponse|null) => void
  ): UnaryResponse;
  getDeviceVersion(
    requestMessage: google_protobuf_empty_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: camera_controller_definitions_pb.DeviceVersionResponse|null) => void
  ): UnaryResponse;
  setPower(
    requestMessage: camera_controller_definitions_pb.SetPowerRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  setPower(
    requestMessage: camera_controller_definitions_pb.SetPowerRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  getPower(
    requestMessage: google_protobuf_empty_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: camera_controller_definitions_pb.PowerConfiguration|null) => void
  ): UnaryResponse;
  getPower(
    requestMessage: google_protobuf_empty_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: camera_controller_definitions_pb.PowerConfiguration|null) => void
  ): UnaryResponse;
  setLaserParam(
    requestMessage: camera_controller_definitions_pb.SetLaserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  setLaserParam(
    requestMessage: camera_controller_definitions_pb.SetLaserRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  getLaserParam(
    requestMessage: google_protobuf_empty_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: camera_controller_definitions_pb.LaserConfiguration|null) => void
  ): UnaryResponse;
  getLaserParam(
    requestMessage: google_protobuf_empty_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: camera_controller_definitions_pb.LaserConfiguration|null) => void
  ): UnaryResponse;
  commitParameter(
    requestMessage: google_protobuf_empty_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  commitParameter(
    requestMessage: google_protobuf_empty_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  controlLaser(
    requestMessage: camera_controller_definitions_pb.ControlLaserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  controlLaser(
    requestMessage: camera_controller_definitions_pb.ControlLaserRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  resetController(
    requestMessage: google_protobuf_empty_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  resetController(
    requestMessage: google_protobuf_empty_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
}

