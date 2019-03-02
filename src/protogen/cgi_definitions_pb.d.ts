// package: mvcgi
// file: cgi_definitions.proto

import * as jspb from "google-protobuf";
import * as camera_controller_definitions_pb from "./camera_controller_definitions_pb";
import * as camera_definitions_pb from "./camera_definitions_pb";

export class GetVersionRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVersionRequest): GetVersionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetVersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVersionRequest;
  static deserializeBinaryFromReader(message: GetVersionRequest, reader: jspb.BinaryReader): GetVersionRequest;
}

export namespace GetVersionRequest {
  export type AsObject = {
  }
}

export class GetVersionResponse extends jspb.Message {
  getVersion(): string;
  setVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVersionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetVersionResponse): GetVersionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetVersionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVersionResponse;
  static deserializeBinaryFromReader(message: GetVersionResponse, reader: jspb.BinaryReader): GetVersionResponse;
}

export namespace GetVersionResponse {
  export type AsObject = {
    version: string,
  }
}

export class ListDevicesRequest extends jspb.Message {
  getControllerUrl(): string;
  setControllerUrl(value: string): void;

  getCameraUrl(): string;
  setCameraUrl(value: string): void;

  getUseCache(): boolean;
  setUseCache(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDevicesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDevicesRequest): ListDevicesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDevicesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDevicesRequest;
  static deserializeBinaryFromReader(message: ListDevicesRequest, reader: jspb.BinaryReader): ListDevicesRequest;
}

export namespace ListDevicesRequest {
  export type AsObject = {
    controllerUrl: string,
    cameraUrl: string,
    useCache: boolean,
  }
}

export class ListDevicesResponse extends jspb.Message {
  clearControllerList(): void;
  getControllerList(): Array<camera_controller_definitions_pb.SerialDeviceMapping>;
  setControllerList(value: Array<camera_controller_definitions_pb.SerialDeviceMapping>): void;
  addController(value?: camera_controller_definitions_pb.SerialDeviceMapping, index?: number): camera_controller_definitions_pb.SerialDeviceMapping;

  clearDevicesList(): void;
  getDevicesList(): Array<camera_definitions_pb.DeviceInfo>;
  setDevicesList(value: Array<camera_definitions_pb.DeviceInfo>): void;
  addDevices(value?: camera_definitions_pb.DeviceInfo, index?: number): camera_definitions_pb.DeviceInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDevicesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDevicesResponse): ListDevicesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDevicesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDevicesResponse;
  static deserializeBinaryFromReader(message: ListDevicesResponse, reader: jspb.BinaryReader): ListDevicesResponse;
}

export namespace ListDevicesResponse {
  export type AsObject = {
    controllerList: Array<camera_controller_definitions_pb.SerialDeviceMapping.AsObject>,
    devicesList: Array<camera_definitions_pb.DeviceInfo.AsObject>,
  }
}

export class ConnectDevicesRequest extends jspb.Message {
  hasControllerConnection(): boolean;
  clearControllerConnection(): void;
  getControllerConnection(): ConnectDevicesRequest.ControllerConnection | undefined;
  setControllerConnection(value?: ConnectDevicesRequest.ControllerConnection): void;

  hasCameraConnection(): boolean;
  clearCameraConnection(): void;
  getCameraConnection(): ConnectDevicesRequest.CameraConnection | undefined;
  setCameraConnection(value?: ConnectDevicesRequest.CameraConnection): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectDevicesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectDevicesRequest): ConnectDevicesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConnectDevicesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectDevicesRequest;
  static deserializeBinaryFromReader(message: ConnectDevicesRequest, reader: jspb.BinaryReader): ConnectDevicesRequest;
}

export namespace ConnectDevicesRequest {
  export type AsObject = {
    controllerConnection?: ConnectDevicesRequest.ControllerConnection.AsObject,
    cameraConnection?: ConnectDevicesRequest.CameraConnection.AsObject,
  }

  export class ControllerConnection extends jspb.Message {
    getAction(): ConnectionAction;
    setAction(value: ConnectionAction): void;

    hasConnectionInfo(): boolean;
    clearConnectionInfo(): void;
    getConnectionInfo(): camera_controller_definitions_pb.ConnectRequest | undefined;
    setConnectionInfo(value?: camera_controller_definitions_pb.ConnectRequest): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ControllerConnection.AsObject;
    static toObject(includeInstance: boolean, msg: ControllerConnection): ControllerConnection.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ControllerConnection, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ControllerConnection;
    static deserializeBinaryFromReader(message: ControllerConnection, reader: jspb.BinaryReader): ControllerConnection;
  }

  export namespace ControllerConnection {
    export type AsObject = {
      action: ConnectionAction,
      connectionInfo?: camera_controller_definitions_pb.ConnectRequest.AsObject,
    }
  }

  export class CameraConnection extends jspb.Message {
    getAction(): ConnectionAction;
    setAction(value: ConnectionAction): void;

    hasConnectionInfo(): boolean;
    clearConnectionInfo(): void;
    getConnectionInfo(): camera_definitions_pb.IdRequest | undefined;
    setConnectionInfo(value?: camera_definitions_pb.IdRequest): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CameraConnection.AsObject;
    static toObject(includeInstance: boolean, msg: CameraConnection): CameraConnection.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CameraConnection, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CameraConnection;
    static deserializeBinaryFromReader(message: CameraConnection, reader: jspb.BinaryReader): CameraConnection;
  }

  export namespace CameraConnection {
    export type AsObject = {
      action: ConnectionAction,
      connectionInfo?: camera_definitions_pb.IdRequest.AsObject,
    }
  }
}

export class ConnectDevicesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectDevicesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectDevicesResponse): ConnectDevicesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConnectDevicesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectDevicesResponse;
  static deserializeBinaryFromReader(message: ConnectDevicesResponse, reader: jspb.BinaryReader): ConnectDevicesResponse;
}

export namespace ConnectDevicesResponse {
  export type AsObject = {
  }
}

export enum ConnectionAction {
  NO_OP = 0,
  CONNECT = 1,
  DISCONNECT = 2,
}

export enum ConnectionStatus {
  CONNECTED = 0,
  DISCONNECTED = 1,
}

