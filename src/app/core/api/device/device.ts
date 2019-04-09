import {CRUDAction} from 'src/app/core/crud-action.enum';
import {InjectionToken} from '@angular/core';
import {Observable} from 'rxjs';
import {ConnectAction} from '../../connect-action.enum';

export interface Device {
  id?: string;
  displayName: string;
  connected?: boolean;
}
export interface DeviceList {
  Camera?: Device[];
  Controller?: Device[];
}

export interface DevicePair {
  id?: number;
  camera: Device;
  controller: Device;
  connected?: boolean;
}

export interface IDeviceService {

  DevicePairs: Observable<DevicePair[]>;
  AllDevices: Observable<DeviceList>;

  refresh(deviceDiscovery: boolean);

  CRUDPair(pair: DevicePair[], op: CRUDAction, refresh: boolean): Promise<string>;

  connectPair(pair: DevicePair, op: ConnectAction): Observable<string>;

  // Restore the state of connection
  resetAllDevices();

}

export const DEVICE_SERVICE = new InjectionToken('DEVICE_SERVICE');
