// package: mvcam
// file: camera_service.proto

import * as camera_service_pb from "./camera_service_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as camera_definitions_pb from "./camera_definitions_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MicroVisionCameraServiceGetAvailableAdapters = {
  readonly methodName: string;
  readonly service: typeof MicroVisionCameraService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof google_protobuf_empty_pb.Empty;
  readonly responseType: typeof camera_definitions_pb.AvailableAdaptersResponse;
};

type MicroVisionCameraServiceGetDevices = {
  readonly methodName: string;
  readonly service: typeof MicroVisionCameraService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof camera_definitions_pb.AdapterRequest;
  readonly responseType: typeof camera_definitions_pb.DeviceListResponse;
};

type MicroVisionCameraServiceQueryDeviceById = {
  readonly methodName: string;
  readonly service: typeof MicroVisionCameraService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof camera_definitions_pb.IdRequest;
  readonly responseType: typeof camera_definitions_pb.DeviceInfo;
};

type MicroVisionCameraServiceOpenCamera = {
  readonly methodName: string;
  readonly service: typeof MicroVisionCameraService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof camera_definitions_pb.IdRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type MicroVisionCameraServiceShutdownCamera = {
  readonly methodName: string;
  readonly service: typeof MicroVisionCameraService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof camera_definitions_pb.IdRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type MicroVisionCameraServiceConfigureCamera = {
  readonly methodName: string;
  readonly service: typeof MicroVisionCameraService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof camera_definitions_pb.ConfigureRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type MicroVisionCameraServiceGetConfiguration = {
  readonly methodName: string;
  readonly service: typeof MicroVisionCameraService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof camera_definitions_pb.IdRequest;
  readonly responseType: typeof camera_definitions_pb.Configuration;
};

type MicroVisionCameraServiceGetStatus = {
  readonly methodName: string;
  readonly service: typeof MicroVisionCameraService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof camera_definitions_pb.IdRequest;
  readonly responseType: typeof camera_definitions_pb.Status;
};

type MicroVisionCameraServiceCapture = {
  readonly methodName: string;
  readonly service: typeof MicroVisionCameraService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof camera_definitions_pb.IdRequest;
  readonly responseType: typeof camera_definitions_pb.Frame;
};

type MicroVisionCameraServiceStreaming = {
  readonly methodName: string;
  readonly service: typeof MicroVisionCameraService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof camera_definitions_pb.StreamingRequest;
  readonly responseType: typeof camera_definitions_pb.FrameStream;
};

type MicroVisionCameraServiceResetDevice = {
  readonly methodName: string;
  readonly service: typeof MicroVisionCameraService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof camera_definitions_pb.IdRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type MicroVisionCameraServiceControlDeviceState = {
  readonly methodName: string;
  readonly service: typeof MicroVisionCameraService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof camera_definitions_pb.DeviceControlRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

export class MicroVisionCameraService {
  static readonly serviceName: string;
  static readonly GetAvailableAdapters: MicroVisionCameraServiceGetAvailableAdapters;
  static readonly GetDevices: MicroVisionCameraServiceGetDevices;
  static readonly QueryDeviceById: MicroVisionCameraServiceQueryDeviceById;
  static readonly OpenCamera: MicroVisionCameraServiceOpenCamera;
  static readonly ShutdownCamera: MicroVisionCameraServiceShutdownCamera;
  static readonly ConfigureCamera: MicroVisionCameraServiceConfigureCamera;
  static readonly GetConfiguration: MicroVisionCameraServiceGetConfiguration;
  static readonly GetStatus: MicroVisionCameraServiceGetStatus;
  static readonly Capture: MicroVisionCameraServiceCapture;
  static readonly Streaming: MicroVisionCameraServiceStreaming;
  static readonly ResetDevice: MicroVisionCameraServiceResetDevice;
  static readonly ControlDeviceState: MicroVisionCameraServiceControlDeviceState;
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

export class MicroVisionCameraServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getAvailableAdapters(
    requestMessage: google_protobuf_empty_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: camera_definitions_pb.AvailableAdaptersResponse|null) => void
  ): UnaryResponse;
  getAvailableAdapters(
    requestMessage: google_protobuf_empty_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: camera_definitions_pb.AvailableAdaptersResponse|null) => void
  ): UnaryResponse;
  getDevices(
    requestMessage: camera_definitions_pb.AdapterRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: camera_definitions_pb.DeviceListResponse|null) => void
  ): UnaryResponse;
  getDevices(
    requestMessage: camera_definitions_pb.AdapterRequest,
    callback: (error: ServiceError|null, responseMessage: camera_definitions_pb.DeviceListResponse|null) => void
  ): UnaryResponse;
  queryDeviceById(
    requestMessage: camera_definitions_pb.IdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: camera_definitions_pb.DeviceInfo|null) => void
  ): UnaryResponse;
  queryDeviceById(
    requestMessage: camera_definitions_pb.IdRequest,
    callback: (error: ServiceError|null, responseMessage: camera_definitions_pb.DeviceInfo|null) => void
  ): UnaryResponse;
  openCamera(
    requestMessage: camera_definitions_pb.IdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  openCamera(
    requestMessage: camera_definitions_pb.IdRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  shutdownCamera(
    requestMessage: camera_definitions_pb.IdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  shutdownCamera(
    requestMessage: camera_definitions_pb.IdRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  configureCamera(
    requestMessage: camera_definitions_pb.ConfigureRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  configureCamera(
    requestMessage: camera_definitions_pb.ConfigureRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  getConfiguration(
    requestMessage: camera_definitions_pb.IdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: camera_definitions_pb.Configuration|null) => void
  ): UnaryResponse;
  getConfiguration(
    requestMessage: camera_definitions_pb.IdRequest,
    callback: (error: ServiceError|null, responseMessage: camera_definitions_pb.Configuration|null) => void
  ): UnaryResponse;
  getStatus(
    requestMessage: camera_definitions_pb.IdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: camera_definitions_pb.Status|null) => void
  ): UnaryResponse;
  getStatus(
    requestMessage: camera_definitions_pb.IdRequest,
    callback: (error: ServiceError|null, responseMessage: camera_definitions_pb.Status|null) => void
  ): UnaryResponse;
  capture(
    requestMessage: camera_definitions_pb.IdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: camera_definitions_pb.Frame|null) => void
  ): UnaryResponse;
  capture(
    requestMessage: camera_definitions_pb.IdRequest,
    callback: (error: ServiceError|null, responseMessage: camera_definitions_pb.Frame|null) => void
  ): UnaryResponse;
  streaming(requestMessage: camera_definitions_pb.StreamingRequest, metadata?: grpc.Metadata): ResponseStream<camera_definitions_pb.FrameStream>;
  resetDevice(
    requestMessage: camera_definitions_pb.IdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  resetDevice(
    requestMessage: camera_definitions_pb.IdRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  controlDeviceState(
    requestMessage: camera_definitions_pb.DeviceControlRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  controlDeviceState(
    requestMessage: camera_definitions_pb.DeviceControlRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
}

