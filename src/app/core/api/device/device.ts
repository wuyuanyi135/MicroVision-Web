import {CRUDAction} from 'src/app/core/crud-action.enum';
import {InjectionToken} from '@angular/core';
import {Observable} from 'rxjs';
import {ConnectAction} from '../../connect-action.enum';
import {IDevicePair} from '../../device-pair';


export interface IDeviceService {

  devicePairs: IDevicePair[];
  AllDevices: {Camera?: string[], Controller?: string[]};

  refresh(deviceDiscovery: boolean);

  CRUDPair(pair: IDevicePair[], op: CRUDAction, refresh: boolean): Observable<string>;

  connectPair(pair: IDevicePair, op: ConnectAction): Observable<string>;

  // Restore the state of connection
  resetAllDevices();

}

export const DEVICE_SERVICE = new InjectionToken('DEVICE_SERVICE');
