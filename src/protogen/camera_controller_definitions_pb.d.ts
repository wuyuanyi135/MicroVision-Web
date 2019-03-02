// package: mvcamctrl
// file: camera_controller_definitions.proto

import * as jspb from "google-protobuf";

export class SerialDeviceMapping extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDestination(): string;
  setDestination(value: string): void;

  getConnected(): boolean;
  setConnected(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SerialDeviceMapping.AsObject;
  static toObject(includeInstance: boolean, msg: SerialDeviceMapping): SerialDeviceMapping.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SerialDeviceMapping, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SerialDeviceMapping;
  static deserializeBinaryFromReader(message: SerialDeviceMapping, reader: jspb.BinaryReader): SerialDeviceMapping;
}

export namespace SerialDeviceMapping {
  export type AsObject = {
    name: string,
    destination: string,
    connected: boolean,
  }
}

export class SerialListResponse extends jspb.Message {
  clearDeviceListList(): void;
  getDeviceListList(): Array<SerialDeviceMapping>;
  setDeviceListList(value: Array<SerialDeviceMapping>): void;
  addDeviceList(value?: SerialDeviceMapping, index?: number): SerialDeviceMapping;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SerialListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SerialListResponse): SerialListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SerialListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SerialListResponse;
  static deserializeBinaryFromReader(message: SerialListResponse, reader: jspb.BinaryReader): SerialListResponse;
}

export namespace SerialListResponse {
  export type AsObject = {
    deviceListList: Array<SerialDeviceMapping.AsObject>,
  }
}

export class EmptyResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmptyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EmptyResponse): EmptyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmptyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmptyResponse;
  static deserializeBinaryFromReader(message: EmptyResponse, reader: jspb.BinaryReader): EmptyResponse;
}

export namespace EmptyResponse {
  export type AsObject = {
  }
}

export class ConnectRequest extends jspb.Message {
  hasName(): boolean;
  clearName(): void;
  getName(): string;
  setName(value: string): void;

  hasPath(): boolean;
  clearPath(): void;
  getPath(): string;
  setPath(value: string): void;

  getDeviceIdentifierCase(): ConnectRequest.DeviceIdentifierCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectRequest): ConnectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConnectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectRequest;
  static deserializeBinaryFromReader(message: ConnectRequest, reader: jspb.BinaryReader): ConnectRequest;
}

export namespace ConnectRequest {
  export type AsObject = {
    name: string,
    path: string,
  }

  export enum DeviceIdentifierCase {
    DEVICE_IDENTIFIER_NOT_SET = 0,
    NAME = 1,
    PATH = 2,
  }
}

export class DriverVersionResponse extends jspb.Message {
  getVersion(): string;
  setVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DriverVersionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DriverVersionResponse): DriverVersionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DriverVersionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DriverVersionResponse;
  static deserializeBinaryFromReader(message: DriverVersionResponse, reader: jspb.BinaryReader): DriverVersionResponse;
}

export namespace DriverVersionResponse {
  export type AsObject = {
    version: string,
  }
}

export class DeviceVersionResponse extends jspb.Message {
  getHardwareVersion(): number;
  setHardwareVersion(value: number): void;

  getFirmwareVersion(): number;
  setFirmwareVersion(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceVersionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceVersionResponse): DeviceVersionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceVersionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceVersionResponse;
  static deserializeBinaryFromReader(message: DeviceVersionResponse, reader: jspb.BinaryReader): DeviceVersionResponse;
}

export namespace DeviceVersionResponse {
  export type AsObject = {
    hardwareVersion: number,
    firmwareVersion: number,
  }
}

export class PowerConfiguration extends jspb.Message {
  getMasterPower(): boolean;
  setMasterPower(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PowerConfiguration.AsObject;
  static toObject(includeInstance: boolean, msg: PowerConfiguration): PowerConfiguration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PowerConfiguration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PowerConfiguration;
  static deserializeBinaryFromReader(message: PowerConfiguration, reader: jspb.BinaryReader): PowerConfiguration;
}

export namespace PowerConfiguration {
  export type AsObject = {
    masterPower: boolean,
  }
}

export class SetPowerRequest extends jspb.Message {
  hasPower(): boolean;
  clearPower(): void;
  getPower(): PowerConfiguration | undefined;
  setPower(value?: PowerConfiguration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetPowerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetPowerRequest): SetPowerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetPowerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetPowerRequest;
  static deserializeBinaryFromReader(message: SetPowerRequest, reader: jspb.BinaryReader): SetPowerRequest;
}

export namespace SetPowerRequest {
  export type AsObject = {
    power?: PowerConfiguration.AsObject,
  }
}

export class LaserConfiguration extends jspb.Message {
  getExposureTick(): number;
  setExposureTick(value: number): void;

  getPulseDelay(): number;
  setPulseDelay(value: number): void;

  getDigitalFilter(): number;
  setDigitalFilter(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LaserConfiguration.AsObject;
  static toObject(includeInstance: boolean, msg: LaserConfiguration): LaserConfiguration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LaserConfiguration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LaserConfiguration;
  static deserializeBinaryFromReader(message: LaserConfiguration, reader: jspb.BinaryReader): LaserConfiguration;
}

export namespace LaserConfiguration {
  export type AsObject = {
    exposureTick: number,
    pulseDelay: number,
    digitalFilter: number,
  }
}

export class SetLaserRequest extends jspb.Message {
  hasLaser(): boolean;
  clearLaser(): void;
  getLaser(): LaserConfiguration | undefined;
  setLaser(value?: LaserConfiguration): void;

  getCommit(): boolean;
  setCommit(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetLaserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetLaserRequest): SetLaserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetLaserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetLaserRequest;
  static deserializeBinaryFromReader(message: SetLaserRequest, reader: jspb.BinaryReader): SetLaserRequest;
}

export namespace SetLaserRequest {
  export type AsObject = {
    laser?: LaserConfiguration.AsObject,
    commit: boolean,
  }
}

export class ControlLaserRequest extends jspb.Message {
  getEnable(): boolean;
  setEnable(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ControlLaserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ControlLaserRequest): ControlLaserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ControlLaserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ControlLaserRequest;
  static deserializeBinaryFromReader(message: ControlLaserRequest, reader: jspb.BinaryReader): ControlLaserRequest;
}

export namespace ControlLaserRequest {
  export type AsObject = {
    enable: boolean,
  }
}

export class Status extends jspb.Message {
  getLaserState(): boolean;
  setLaserState(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Status.AsObject;
  static toObject(includeInstance: boolean, msg: Status): Status.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Status, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Status;
  static deserializeBinaryFromReader(message: Status, reader: jspb.BinaryReader): Status;
}

export namespace Status {
  export type AsObject = {
    laserState: boolean,
  }
}

