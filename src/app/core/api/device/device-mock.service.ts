/* tslint:disable:no-bitwise */
import {Injectable} from '@angular/core';
import {DeviceList, DevicePair, IDeviceService} from './device';
import {CRUDAction} from '../../crud-action.enum';
import * as faker from 'faker';
import {BehaviorSubject, Observable, of, throwError} from 'rxjs';
import {ConnectAction} from '../../connect-action.enum';
import {delay} from 'q';
import {take} from 'rxjs/operators';
import {SNACK_DELAY} from '../../constants';

@Injectable()
export class DeviceMockService implements IDeviceService {

  public DevicePairs = new BehaviorSubject<DevicePair[]>([]);
  public AllDevices = new BehaviorSubject<DeviceList>({});


  async CRUDPair(pair: DevicePair[], op: CRUDAction, refresh: boolean): Promise<string> {
    let devicePairs = this.DevicePairs.value;
    for (const p of pair) {
      switch (op) {
        case CRUDAction.UPDATE:
          if (!p.id) {
            continue;
          }
          const i = devicePairs.findIndex(value => p.id === value.id);
          devicePairs[i] = p;
          break;

        case CRUDAction.DELETE:
          if (!p.id) {
            continue;
          }
          devicePairs = devicePairs.filter(value => p.id !== value.id);
          break;
        case CRUDAction.CREATE:
          if (!p.id) {
            p.id = faker.random.number({precision: 1});
            devicePairs.push(p);
            continue;
          }
          const ind = devicePairs.findIndex(value => p.id === value.id);
          if (ind < 0) {
            devicePairs.push(p);
          } else {
            devicePairs[ind] = p;
          }
          break;
        default:
          throw Error(`Unknown action ${op}`);
      }
      this.DevicePairs.next(devicePairs);
    }
    if (refresh) {
      this.refresh(false);
    }
    return 'Mock pair CRUD complete';
  }

  connectPair(pair: DevicePair, op: ConnectAction): Observable<string> {
    return new Observable(subscriber => {
      (async () => {
        const allDevices = this.AllDevices.value;
        if (!allDevices.Camera.find(v => v.id === pair.camera.id)) {
          throw new Error('Camera does not exist');
        }
        if (!allDevices.Controller.find(v => v.id === pair.camera.id)) {
          throw new Error('Controller does not exist');
        }
        if (faker.random.boolean()) {
          setTimeout(() => subscriber.error('Connection Failed'), SNACK_DELAY);
        } else {
          await delay(1000);
          const devicePair = this.DevicePairs.value.find(value => pair.id === value.id);
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

  async refresh(deviceDiscovery: boolean): Promise<void> {
    if (deviceDiscovery) {
      const camera = [];
      for (let i = 0; i < faker.random.number(10); i++) {
        camera.push(`Camera_${i}`);
      }
      const controller = [];
      for (let i = 0; i < faker.random.number(10); i++) {
        controller.push(`Controller_${i}`);
      }
      this.AllDevices.next({Camera: camera, Controller: controller});
    }
  }

  resetAllDevices() {
    const devicePairs = this.DevicePairs.value;
    devicePairs.forEach(value => {
      value.connected = false;
    });
    this.DevicePairs.next(devicePairs);
  }

  constructor() {
    this.refresh(true);
    console.log(`Mock device service initialized`);
  }
}

