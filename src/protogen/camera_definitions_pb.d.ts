// package: mvcam
// file: camera_definitions.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class AdapterCapability extends jspb.Message {
  getShouldShutDown(): boolean;
  setShouldShutDown(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdapterCapability.AsObject;
  static toObject(includeInstance: boolean, msg: AdapterCapability): AdapterCapability.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdapterCapability, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdapterCapability;
  static deserializeBinaryFromReader(message: AdapterCapability, reader: jspb.BinaryReader): AdapterCapability;
}

export namespace AdapterCapability {
  export type AsObject = {
    shouldShutDown: boolean,
  }
}

export class AdapterInfo extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getInUse(): boolean;
  setInUse(value: boolean): void;

  hasCapability(): boolean;
  clearCapability(): void;
  getCapability(): AdapterCapability | undefined;
  setCapability(value?: AdapterCapability): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdapterInfo.AsObject;
  static toObject(includeInstance: boolean, msg: AdapterInfo): AdapterInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdapterInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdapterInfo;
  static deserializeBinaryFromReader(message: AdapterInfo, reader: jspb.BinaryReader): AdapterInfo;
}

export namespace AdapterInfo {
  export type AsObject = {
    name: string,
    version: string,
    description: string,
    inUse: boolean,
    capability?: AdapterCapability.AsObject,
  }
}

export class AvailableAdaptersResponse extends jspb.Message {
  clearAdaptersList(): void;
  getAdaptersList(): Array<AdapterInfo>;
  setAdaptersList(value: Array<AdapterInfo>): void;
  addAdapters(value?: AdapterInfo, index?: number): AdapterInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AvailableAdaptersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AvailableAdaptersResponse): AvailableAdaptersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AvailableAdaptersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AvailableAdaptersResponse;
  static deserializeBinaryFromReader(message: AvailableAdaptersResponse, reader: jspb.BinaryReader): AvailableAdaptersResponse;
}

export namespace AvailableAdaptersResponse {
  export type AsObject = {
    adaptersList: Array<AdapterInfo.AsObject>,
  }
}

export class GetDevicesRequest extends jspb.Message {
  getAdapterName(): string;
  setAdapterName(value: string): void;

  getUsecache(): boolean;
  setUsecache(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDevicesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDevicesRequest): GetDevicesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDevicesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDevicesRequest;
  static deserializeBinaryFromReader(message: GetDevicesRequest, reader: jspb.BinaryReader): GetDevicesRequest;
}

export namespace GetDevicesRequest {
  export type AsObject = {
    adapterName: string,
    usecache: boolean,
  }
}

export class CameraCapability extends jspb.Message {
  getCanShutdown(): boolean;
  setCanShutdown(value: boolean): void;

  getCanOpen(): boolean;
  setCanOpen(value: boolean): void;

  getCanCaptureAsync(): boolean;
  setCanCaptureAsync(value: boolean): void;

  getCanCapture(): boolean;
  setCanCapture(value: boolean): void;

  getCanAdjustExposure(): boolean;
  setCanAdjustExposure(value: boolean): void;

  getCanAdjustGain(): boolean;
  setCanAdjustGain(value: boolean): void;

  getCanAdjustGamma(): boolean;
  setCanAdjustGamma(value: boolean): void;

  getCanAdjustBlackLevel(): boolean;
  setCanAdjustBlackLevel(value: boolean): void;

  getCanAdjustFrameRate(): boolean;
  setCanAdjustFrameRate(value: boolean): void;

  getCanSetFrameNumber(): boolean;
  setCanSetFrameNumber(value: boolean): void;

  getCanGetTemperature(): boolean;
  setCanGetTemperature(value: boolean): void;

  getCanSuspend(): boolean;
  setCanSuspend(value: boolean): void;

  getCanReset(): boolean;
  setCanReset(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CameraCapability.AsObject;
  static toObject(includeInstance: boolean, msg: CameraCapability): CameraCapability.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CameraCapability, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CameraCapability;
  static deserializeBinaryFromReader(message: CameraCapability, reader: jspb.BinaryReader): CameraCapability;
}

export namespace CameraCapability {
  export type AsObject = {
    canShutdown: boolean,
    canOpen: boolean,
    canCaptureAsync: boolean,
    canCapture: boolean,
    canAdjustExposure: boolean,
    canAdjustGain: boolean,
    canAdjustGamma: boolean,
    canAdjustBlackLevel: boolean,
    canAdjustFrameRate: boolean,
    canSetFrameNumber: boolean,
    canGetTemperature: boolean,
    canSuspend: boolean,
    canReset: boolean,
  }
}

export class DeviceInfo extends jspb.Message {
  hasAdapter(): boolean;
  clearAdapter(): void;
  getAdapter(): AdapterInfo | undefined;
  setAdapter(value?: AdapterInfo): void;

  getManufacture(): string;
  setManufacture(value: string): void;

  getId(): string;
  setId(value: string): void;

  getModel(): string;
  setModel(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  getSerial(): string;
  setSerial(value: string): void;

  hasCapabilities(): boolean;
  clearCapabilities(): void;
  getCapabilities(): CameraCapability | undefined;
  setCapabilities(value?: CameraCapability): void;

  getConnected(): boolean;
  setConnected(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceInfo.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceInfo): DeviceInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceInfo;
  static deserializeBinaryFromReader(message: DeviceInfo, reader: jspb.BinaryReader): DeviceInfo;
}

export namespace DeviceInfo {
  export type AsObject = {
    adapter?: AdapterInfo.AsObject,
    manufacture: string,
    id: string,
    model: string,
    version: string,
    serial: string,
    capabilities?: CameraCapability.AsObject,
    connected: boolean,
  }
}

export class GetDevicesResponse extends jspb.Message {
  clearDevicesList(): void;
  getDevicesList(): Array<DeviceInfo>;
  setDevicesList(value: Array<DeviceInfo>): void;
  addDevices(value?: DeviceInfo, index?: number): DeviceInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDevicesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDevicesResponse): GetDevicesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDevicesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDevicesResponse;
  static deserializeBinaryFromReader(message: GetDevicesResponse, reader: jspb.BinaryReader): GetDevicesResponse;
}

export namespace GetDevicesResponse {
  export type AsObject = {
    devicesList: Array<DeviceInfo.AsObject>,
  }
}

export class IdRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IdRequest): IdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdRequest;
  static deserializeBinaryFromReader(message: IdRequest, reader: jspb.BinaryReader): IdRequest;
}

export namespace IdRequest {
  export type AsObject = {
    id: string,
  }
}

export class Parameter extends jspb.Message {
  getShouldUpdate(): boolean;
  setShouldUpdate(value: boolean): void;

  getValue(): number;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Parameter.AsObject;
  static toObject(includeInstance: boolean, msg: Parameter): Parameter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Parameter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Parameter;
  static deserializeBinaryFromReader(message: Parameter, reader: jspb.BinaryReader): Parameter;
}

export namespace Parameter {
  export type AsObject = {
    shouldUpdate: boolean,
    value: number,
  }
}

export class Configuration extends jspb.Message {
  hasExposure(): boolean;
  clearExposure(): void;
  getExposure(): Parameter | undefined;
  setExposure(value?: Parameter): void;

  hasFrameRate(): boolean;
  clearFrameRate(): void;
  getFrameRate(): Parameter | undefined;
  setFrameRate(value?: Parameter): void;

  hasGain(): boolean;
  clearGain(): void;
  getGain(): Parameter | undefined;
  setGain(value?: Parameter): void;

  hasBlackLevel(): boolean;
  clearBlackLevel(): void;
  getBlackLevel(): Parameter | undefined;
  setBlackLevel(value?: Parameter): void;

  hasGamma(): boolean;
  clearGamma(): void;
  getGamma(): Parameter | undefined;
  setGamma(value?: Parameter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Configuration.AsObject;
  static toObject(includeInstance: boolean, msg: Configuration): Configuration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Configuration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Configuration;
  static deserializeBinaryFromReader(message: Configuration, reader: jspb.BinaryReader): Configuration;
}

export namespace Configuration {
  export type AsObject = {
    exposure?: Parameter.AsObject,
    frameRate?: Parameter.AsObject,
    gain?: Parameter.AsObject,
    blackLevel?: Parameter.AsObject,
    gamma?: Parameter.AsObject,
  }
}

export class ConfigureRequest extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): IdRequest | undefined;
  setId(value?: IdRequest): void;

  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): Configuration | undefined;
  setConfig(value?: Configuration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigureRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigureRequest): ConfigureRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfigureRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigureRequest;
  static deserializeBinaryFromReader(message: ConfigureRequest, reader: jspb.BinaryReader): ConfigureRequest;
}

export namespace ConfigureRequest {
  export type AsObject = {
    id?: IdRequest.AsObject,
    config?: Configuration.AsObject,
  }
}

export class Frame extends jspb.Message {
  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getId(): number;
  setId(value: number): void;

  getSize(): number;
  setSize(value: number): void;

  getHeight(): number;
  setHeight(value: number): void;

  getWidth(): number;
  setWidth(value: number): void;

  getPixelFormat(): number;
  setPixelFormat(value: number): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Frame.AsObject;
  static toObject(includeInstance: boolean, msg: Frame): Frame.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Frame, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Frame;
  static deserializeBinaryFromReader(message: Frame, reader: jspb.BinaryReader): Frame;
}

export namespace Frame {
  export type AsObject = {
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    id: number,
    size: number,
    height: number,
    width: number,
    pixelFormat: number,
    data: Uint8Array | string,
  }
}

export class FrameStream extends jspb.Message {
  clearFramesList(): void;
  getFramesList(): Array<Frame>;
  setFramesList(value: Array<Frame>): void;
  addFrames(value?: Frame, index?: number): Frame;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FrameStream.AsObject;
  static toObject(includeInstance: boolean, msg: FrameStream): FrameStream.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FrameStream, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FrameStream;
  static deserializeBinaryFromReader(message: FrameStream, reader: jspb.BinaryReader): FrameStream;
}

export namespace FrameStream {
  export type AsObject = {
    framesList: Array<Frame.AsObject>,
  }
}

export class StreamingRequest extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): IdRequest | undefined;
  setId(value?: IdRequest): void;

  getNumberFrames(): number;
  setNumberFrames(value: number): void;

  getBatchSize(): number;
  setBatchSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamingRequest): StreamingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamingRequest;
  static deserializeBinaryFromReader(message: StreamingRequest, reader: jspb.BinaryReader): StreamingRequest;
}

export namespace StreamingRequest {
  export type AsObject = {
    id?: IdRequest.AsObject,
    numberFrames: number,
    batchSize: number,
  }
}

export class Status extends jspb.Message {
  getTemperature(): number;
  setTemperature(value: number): void;

  getOpened(): boolean;
  setOpened(value: boolean): void;

  getCapturing(): boolean;
  setCapturing(value: boolean): void;

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
    temperature: number,
    opened: boolean,
    capturing: boolean,
  }
}

export class DeviceControlRequest extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): IdRequest | undefined;
  setId(value?: IdRequest): void;

  getAction(): DeviceControlAction;
  setAction(value: DeviceControlAction): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceControlRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceControlRequest): DeviceControlRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceControlRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceControlRequest;
  static deserializeBinaryFromReader(message: DeviceControlRequest, reader: jspb.BinaryReader): DeviceControlRequest;
}

export namespace DeviceControlRequest {
  export type AsObject = {
    id?: IdRequest.AsObject,
    action: DeviceControlAction,
  }
}

export enum DeviceControlAction {
  SUSPEND = 0,
  RESUME = 1,
}

