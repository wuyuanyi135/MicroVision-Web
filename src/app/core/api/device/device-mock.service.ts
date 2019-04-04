/* tslint:disable:no-bitwise */
import {Injectable} from '@angular/core';
import {IDeviceService} from './device';
import {CRUDAction} from '../../crud-action.enum';
import * as faker from 'faker';
import {Observable, of, throwError} from 'rxjs';
import {ConnectAction} from '../../connect-action.enum';
import {IDevicePair} from '../../device-pair';
import {delay} from 'q';

@Injectable()
export class DeviceMockService implements IDeviceService {

  AllDevices: { Camera?: string[]; Controller?: string[] };
  devicePairs: IDevicePair[];


  CRUDPair(pair: IDevicePair[], op: CRUDAction, refresh: boolean): Observable<string> {
    for (const p of pair) {
      switch (op) {
        case CRUDAction.UPDATE:
          if (!p.id) { continue; }
          const i = this.devicePairs.findIndex(value => p.id === value.id);
          this.devicePairs[i] = p;
          break;

        case CRUDAction.DELETE:
          if (!p.id) { continue; }
          this.devicePairs = this.devicePairs.filter(value => p.id !== value.id);
          break;
        case CRUDAction.UPDATE_OR_CREATE:
        case CRUDAction.CREATE:
          if (!p.id) {
            p.id = this.uuidv4();
            this.devicePairs.push(p);
            continue;
          }
          const ind = this.devicePairs.findIndex(value => p.id === value.id);
          if (ind < 0) {
            this.devicePairs.push(p);
          } else {
            this.devicePairs[ind] = p;
          }
          break;
        default:
          return throwError(`Unknown action ${op}`);
      }
    }
    if (refresh) {
      this.refresh(false);
    }
    return of('Mock pair CRUD complete');
  }

  connectPair(pair: IDevicePair, op: ConnectAction): Observable<string> {
    const allDevices = this.AllDevices;
    if (!allDevices.Camera.includes(pair.camera))  {
      throw new Error('Camera does not exist');
    }
    if (!allDevices.Controller.includes(pair.controller)) {
      throw new Error('Controller does not exist');
    }
    return new Observable(subscriber => {
      (async () => {
        if (faker.random.boolean()) {
          setTimeout(() => subscriber.error('Connection Failed'), 2000);
        } else {
          await delay(1000);
          const devicePair = this.devicePairs.find(value => pair.id === value.id);
          const operation = op === ConnectAction.CONNECT ? 'connected' : 'disconnected';
          subscriber.next(`Controller ${operation}`);
          await delay(1000);
          subscriber.next(`Camera ${operation}`);
          devicePair.connected = !devicePair.connected;
          subscriber.complete();
        }
      })();
    });
  }

  refresh(deviceDiscovery: boolean) {
    if (deviceDiscovery) {
      this.AllDevices.Camera = [];
      for (let i = 0; i < faker.random.number(10); i++) {
        this.AllDevices.Camera.push(`Camera_${i}`);
      }
      this.AllDevices.Controller = [];
      for (let i = 0; i < faker.random.number(10); i++) {
        this.AllDevices.Controller.push(`Controller_${i}`);
      }
    }
  }

  resetAllDevices() {
    this.devicePairs.forEach(value => {
      value.connected = false;
    });
  }
  uuidv4(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  constructor() {
    this.AllDevices = {};
    this.devicePairs = [];
    this.refresh(true);
    console.log(`Mock device service initialized`);
    console.log(this.AllDevices.Controller);
    console.log(this.AllDevices.Camera);

  }
}

