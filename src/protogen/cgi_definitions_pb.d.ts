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

export class BackendServerInterfaceRequest extends jspb.Message {
  hasControllerConnection(): boolean;
  clearControllerConnection(): void;
  getControllerConnection(): BackendServerInterfaceRequest.Connection | undefined;
  setControllerConnection(value?: BackendServerInterfaceRequest.Connection): void;

  hasCameraConnection(): boolean;
  clearCameraConnection(): void;
  getCameraConnection(): BackendServerInterfaceRequest.Connection | undefined;
  setCameraConnection(value?: BackendServerInterfaceRequest.Connection): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BackendServerInterfaceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BackendServerInterfaceRequest): BackendServerInterfaceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BackendServerInterfaceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BackendServerInterfaceRequest;
  static deserializeBinaryFromReader(message: BackendServerInterfaceRequest, reader: jspb.BinaryReader): BackendServerInterfaceRequest;
}

export namespace BackendServerInterfaceRequest {
  export type AsObject = {
    controllerConnection?: BackendServerInterfaceRequest.Connection.AsObject,
    cameraConnection?: BackendServerInterfaceRequest.Connection.AsObject,
  }

  export class Connection extends jspb.Message {
    getAction(): ConnectionAction;
    setAction(value: ConnectionAction): void;

    getUrl(): string;
    setUrl(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Connection.AsObject;
    static toObject(includeInstance: boolean, msg: Connection): Connection.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Connection, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Connection;
    static deserializeBinaryFromReader(message: Connection, reader: jspb.BinaryReader): Connection;
  }

  export namespace Connection {
    export type AsObject = {
      action: ConnectionAction,
      url: string,
    }
  }
}

export class BackendServerInterfaceResponse extends jspb.Message {
  getCameraServer(): ConnectionStatus;
  setCameraServer(value: ConnectionStatus): void;

  getControllerServer(): ConnectionStatus;
  setControllerServer(value: ConnectionStatus): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BackendServerInterfaceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BackendServerInterfaceResponse): BackendServerInterfaceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BackendServerInterfaceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BackendServerInterfaceResponse;
  static deserializeBinaryFromReader(message: BackendServerInterfaceResponse, reader: jspb.BinaryReader): BackendServerInterfaceResponse;
}

export namespace BackendServerInterfaceResponse {
  export type AsObject = {
    cameraServer: ConnectionStatus,
    controllerServer: ConnectionStatus,
  }
}

export class ListDevicesRequest extends jspb.Message {
  hasListCamera(): boolean;
  clearListCamera(): void;
  getListCamera(): ListDevicesRequest.Options | undefined;
  setListCamera(value?: ListDevicesRequest.Options): void;

  hasListController(): boolean;
  clearListController(): void;
  getListController(): ListDevicesRequest.Options | undefined;
  setListController(value?: ListDevicesRequest.Options): void;

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
    listCamera?: ListDevicesRequest.Options.AsObject,
    listController?: ListDevicesRequest.Options.AsObject,
  }

  export class Options extends jspb.Message {
    getUseCache(): boolean;
    setUseCache(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Options.AsObject;
    static toObject(includeInstance: boolean, msg: Options): Options.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Options, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Options;
    static deserializeBinaryFromReader(message: Options, reader: jspb.BinaryReader): Options;
  }

  export namespace Options {
    export type AsObject = {
      useCache: boolean,
    }
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

export class DeviceInterfaceRequest extends jspb.Message {
  hasControlCamera(): boolean;
  clearControlCamera(): void;
  getControlCamera(): DeviceInterfaceRequest.Options | undefined;
  setControlCamera(value?: DeviceInterfaceRequest.Options): void;

  hasControlController(): boolean;
  clearControlController(): void;
  getControlController(): DeviceInterfaceRequest.Options | undefined;
  setControlController(value?: DeviceInterfaceRequest.Options): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceInterfaceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceInterfaceRequest): DeviceInterfaceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceInterfaceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceInterfaceRequest;
  static deserializeBinaryFromReader(message: DeviceInterfaceRequest, reader: jspb.BinaryReader): DeviceInterfaceRequest;
}

export namespace DeviceInterfaceRequest {
  export type AsObject = {
    controlCamera?: DeviceInterfaceRequest.Options.AsObject,
    controlController?: DeviceInterfaceRequest.Options.AsObject,
  }

  export class Options extends jspb.Message {
    getAction(): ConnectionAction;
    setAction(value: ConnectionAction): void;

    getId(): string;
    setId(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Options.AsObject;
    static toObject(includeInstance: boolean, msg: Options): Options.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Options, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Options;
    static deserializeBinaryFromReader(message: Options, reader: jspb.BinaryReader): Options;
  }

  export namespace Options {
    export type AsObject = {
      action: ConnectionAction,
      id: string,
    }
  }
}

export class DeviceInterfaceResponse extends jspb.Message {
  hasAffectedCamera(): boolean;
  clearAffectedCamera(): void;
  getAffectedCamera(): DeviceInterfaceResponse.AffectedDevice | undefined;
  setAffectedCamera(value?: DeviceInterfaceResponse.AffectedDevice): void;

  hasAffectedController(): boolean;
  clearAffectedController(): void;
  getAffectedController(): DeviceInterfaceResponse.AffectedDevice | undefined;
  setAffectedController(value?: DeviceInterfaceResponse.AffectedDevice): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceInterfaceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceInterfaceResponse): DeviceInterfaceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceInterfaceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceInterfaceResponse;
  static deserializeBinaryFromReader(message: DeviceInterfaceResponse, reader: jspb.BinaryReader): DeviceInterfaceResponse;
}

export namespace DeviceInterfaceResponse {
  export type AsObject = {
    affectedCamera?: DeviceInterfaceResponse.AffectedDevice.AsObject,
    affectedController?: DeviceInterfaceResponse.AffectedDevice.AsObject,
  }

  export class AffectedDevice extends jspb.Message {
    getStatus(): ConnectionStatus;
    setStatus(value: ConnectionStatus): void;

    getId(): string;
    setId(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AffectedDevice.AsObject;
    static toObject(includeInstance: boolean, msg: AffectedDevice): AffectedDevice.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AffectedDevice, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AffectedDevice;
    static deserializeBinaryFromReader(message: AffectedDevice, reader: jspb.BinaryReader): AffectedDevice;
  }

  export namespace AffectedDevice {
    export type AsObject = {
      status: ConnectionStatus,
      id: string,
    }
  }
}

export class DeviceParameterInterfaceRequest extends jspb.Message {
  hasController(): boolean;
  clearController(): void;
  getController(): DeviceParameterInterfaceRequest.ControllerParameters | undefined;
  setController(value?: DeviceParameterInterfaceRequest.ControllerParameters): void;

  hasCamera(): boolean;
  clearCamera(): void;
  getCamera(): DeviceParameterInterfaceRequest.CameraParameters | undefined;
  setCamera(value?: DeviceParameterInterfaceRequest.CameraParameters): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceParameterInterfaceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceParameterInterfaceRequest): DeviceParameterInterfaceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceParameterInterfaceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceParameterInterfaceRequest;
  static deserializeBinaryFromReader(message: DeviceParameterInterfaceRequest, reader: jspb.BinaryReader): DeviceParameterInterfaceRequest;
}

export namespace DeviceParameterInterfaceRequest {
  export type AsObject = {
    controller?: DeviceParameterInterfaceRequest.ControllerParameters.AsObject,
    camera?: DeviceParameterInterfaceRequest.CameraParameters.AsObject,
  }

  export class ControllerParameters extends jspb.Message {
    getId(): string;
    setId(value: string): void;

    hasLaser(): boolean;
    clearLaser(): void;
    getLaser(): camera_controller_definitions_pb.LaserConfiguration | undefined;
    setLaser(value?: camera_controller_definitions_pb.LaserConfiguration): void;

    hasPower(): boolean;
    clearPower(): void;
    getPower(): camera_controller_definitions_pb.PowerConfiguration | undefined;
    setPower(value?: camera_controller_definitions_pb.PowerConfiguration): void;

    hasEnable(): boolean;
    clearEnable(): void;
    getEnable(): camera_controller_definitions_pb.ControlLaserRequest | undefined;
    setEnable(value?: camera_controller_definitions_pb.ControlLaserRequest): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ControllerParameters.AsObject;
    static toObject(includeInstance: boolean, msg: ControllerParameters): ControllerParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ControllerParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ControllerParameters;
    static deserializeBinaryFromReader(message: ControllerParameters, reader: jspb.BinaryReader): ControllerParameters;
  }

  export namespace ControllerParameters {
    export type AsObject = {
      id: string,
      laser?: camera_controller_definitions_pb.LaserConfiguration.AsObject,
      power?: camera_controller_definitions_pb.PowerConfiguration.AsObject,
      enable?: camera_controller_definitions_pb.ControlLaserRequest.AsObject,
    }
  }

  export class CameraParameters extends jspb.Message {
    getId(): string;
    setId(value: string): void;

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): camera_definitions_pb.Configuration | undefined;
    setConfig(value?: camera_definitions_pb.Configuration): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CameraParameters.AsObject;
    static toObject(includeInstance: boolean, msg: CameraParameters): CameraParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CameraParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CameraParameters;
    static deserializeBinaryFromReader(message: CameraParameters, reader: jspb.BinaryReader): CameraParameters;
  }

  export namespace CameraParameters {
    export type AsObject = {
      id: string,
      config?: camera_definitions_pb.Configuration.AsObject,
    }
  }
}

export class DeviceParameterInterfaceResponse extends jspb.Message {
  hasController(): boolean;
  clearController(): void;
  getController(): DeviceParameterInterfaceResponse.ControllerParameters | undefined;
  setController(value?: DeviceParameterInterfaceResponse.ControllerParameters): void;

  hasCamera(): boolean;
  clearCamera(): void;
  getCamera(): DeviceParameterInterfaceResponse.CameraParameters | undefined;
  setCamera(value?: DeviceParameterInterfaceResponse.CameraParameters): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceParameterInterfaceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceParameterInterfaceResponse): DeviceParameterInterfaceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceParameterInterfaceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceParameterInterfaceResponse;
  static deserializeBinaryFromReader(message: DeviceParameterInterfaceResponse, reader: jspb.BinaryReader): DeviceParameterInterfaceResponse;
}

export namespace DeviceParameterInterfaceResponse {
  export type AsObject = {
    controller?: DeviceParameterInterfaceResponse.ControllerParameters.AsObject,
    camera?: DeviceParameterInterfaceResponse.CameraParameters.AsObject,
  }

  export class ControllerParameters extends jspb.Message {
    hasLaser(): boolean;
    clearLaser(): void;
    getLaser(): camera_controller_definitions_pb.LaserConfiguration | undefined;
    setLaser(value?: camera_controller_definitions_pb.LaserConfiguration): void;

    hasPower(): boolean;
    clearPower(): void;
    getPower(): camera_controller_definitions_pb.PowerConfiguration | undefined;
    setPower(value?: camera_controller_definitions_pb.PowerConfiguration): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ControllerParameters.AsObject;
    static toObject(includeInstance: boolean, msg: ControllerParameters): ControllerParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ControllerParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ControllerParameters;
    static deserializeBinaryFromReader(message: ControllerParameters, reader: jspb.BinaryReader): ControllerParameters;
  }

  export namespace ControllerParameters {
    export type AsObject = {
      laser?: camera_controller_definitions_pb.LaserConfiguration.AsObject,
      power?: camera_controller_definitions_pb.PowerConfiguration.AsObject,
    }
  }

  export class CameraParameters extends jspb.Message {
    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): camera_definitions_pb.Configuration | undefined;
    setConfig(value?: camera_definitions_pb.Configuration): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CameraParameters.AsObject;
    static toObject(includeInstance: boolean, msg: CameraParameters): CameraParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CameraParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CameraParameters;
    static deserializeBinaryFromReader(message: CameraParameters, reader: jspb.BinaryReader): CameraParameters;
  }

  export namespace CameraParameters {
    export type AsObject = {
      config?: camera_definitions_pb.Configuration.AsObject,
    }
  }
}

export class CameraStreamingRequest extends jspb.Message {
  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): camera_definitions_pb.StreamingRequest | undefined;
  setRequest(value?: camera_definitions_pb.StreamingRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CameraStreamingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CameraStreamingRequest): CameraStreamingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CameraStreamingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CameraStreamingRequest;
  static deserializeBinaryFromReader(message: CameraStreamingRequest, reader: jspb.BinaryReader): CameraStreamingRequest;
}

export namespace CameraStreamingRequest {
  export type AsObject = {
    request?: camera_definitions_pb.StreamingRequest.AsObject,
  }
}

export class CameraStream extends jspb.Message {
  hasFrameStream(): boolean;
  clearFrameStream(): void;
  getFrameStream(): camera_definitions_pb.FrameStream | undefined;
  setFrameStream(value?: camera_definitions_pb.FrameStream): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CameraStream.AsObject;
  static toObject(includeInstance: boolean, msg: CameraStream): CameraStream.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CameraStream, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CameraStream;
  static deserializeBinaryFromReader(message: CameraStream, reader: jspb.BinaryReader): CameraStream;
}

export namespace CameraStream {
  export type AsObject = {
    frameStream?: camera_definitions_pb.FrameStream.AsObject,
  }
}

export class CameraCapturingRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CameraCapturingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CameraCapturingRequest): CameraCapturingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CameraCapturingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CameraCapturingRequest;
  static deserializeBinaryFromReader(message: CameraCapturingRequest, reader: jspb.BinaryReader): CameraCapturingRequest;
}

export namespace CameraCapturingRequest {
  export type AsObject = {
    id: string,
  }
}

export class CameraCapturingResponse extends jspb.Message {
  hasFrame(): boolean;
  clearFrame(): void;
  getFrame(): camera_definitions_pb.Frame | undefined;
  setFrame(value?: camera_definitions_pb.Frame): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CameraCapturingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CameraCapturingResponse): CameraCapturingResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CameraCapturingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CameraCapturingResponse;
  static deserializeBinaryFromReader(message: CameraCapturingResponse, reader: jspb.BinaryReader): CameraCapturingResponse;
}

export namespace CameraCapturingResponse {
  export type AsObject = {
    frame?: camera_definitions_pb.Frame.AsObject,
  }
}

export class DevicePair extends jspb.Message {
  getPairName(): string;
  setPairName(value: string): void;

  getControllerPath(): string;
  setControllerPath(value: string): void;

  getCameraId(): string;
  setCameraId(value: string): void;

  getConnected(): boolean;
  setConnected(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DevicePair.AsObject;
  static toObject(includeInstance: boolean, msg: DevicePair): DevicePair.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DevicePair, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DevicePair;
  static deserializeBinaryFromReader(message: DevicePair, reader: jspb.BinaryReader): DevicePair;
}

export namespace DevicePair {
  export type AsObject = {
    pairName: string,
    controllerPath: string,
    cameraId: string,
    connected: boolean,
  }
}

export enum ConnectionStatus {
  CONNECTED = 0,
  DISCONNECTED = 1,
}

export enum ConnectionAction {
  NO_OP = 0,
  CONNECT = 1,
  DISCONNECT = 2,
}

