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

type MicroVisionCGIListDevices = {
  readonly methodName: string;
  readonly service: typeof MicroVisionCGI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cgi_definitions_pb.ListDevicesRequest;
  readonly responseType: typeof cgi_definitions_pb.ListDevicesResponse;
};

type MicroVisionCGIConnectDevices = {
  readonly methodName: string;
  readonly service: typeof MicroVisionCGI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cgi_definitions_pb.ConnectDevicesRequest;
  readonly responseType: typeof cgi_definitions_pb.ConnectDevicesResponse;
};

export class MicroVisionCGI {
  static readonly serviceName: string;
  static readonly GetVersion: MicroVisionCGIGetVersion;
  static readonly ListDevices: MicroVisionCGIListDevices;
  static readonly ConnectDevices: MicroVisionCGIConnectDevices;
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
  listDevices(
    requestMessage: cgi_definitions_pb.ListDevicesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cgi_definitions_pb.ListDevicesResponse|null) => void
  ): UnaryResponse;
  listDevices(
    requestMessage: cgi_definitions_pb.ListDevicesRequest,
    callback: (error: ServiceError|null, responseMessage: cgi_definitions_pb.ListDevicesResponse|null) => void
  ): UnaryResponse;
  connectDevices(
    requestMessage: cgi_definitions_pb.ConnectDevicesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cgi_definitions_pb.ConnectDevicesResponse|null) => void
  ): UnaryResponse;
  connectDevices(
    requestMessage: cgi_definitions_pb.ConnectDevicesRequest,
    callback: (error: ServiceError|null, responseMessage: cgi_definitions_pb.ConnectDevicesResponse|null) => void
  ): UnaryResponse;
}

