import {Injectable} from '@angular/core';
import {DeviceList, DevicePair, IDeviceService} from './device';
import {CRUDAction} from '../../crud-action.enum';
import {BehaviorSubject, Observable} from 'rxjs';
import {ConnectAction} from '../../connect-action.enum';
import {BackendService} from '../backend-server/backend.service';
import {DevicePairService} from '../../../../protogen/device_pair_service_pb_service';
import * as DPS from '../../../../protogen/device_pair_service_pb';
import {Timestamp} from 'google-protobuf/google/protobuf/timestamp_pb';
import {ConnectionRequest, DiscoveryDevicesRequest} from '../../../../protogen/device_connection_service_pb';
import {DeviceConnectionService} from '../../../../protogen/device_connection_service_pb_service';
import {takeUntil} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DeviceService implements IDeviceService {
  AllDevices = new BehaviorSubject<DeviceList>({});
  DevicePairs = new BehaviorSubject<DevicePair[]>([]);

  async CRUDPair(pairs: DevicePair[], op: CRUDAction, refresh: boolean): Promise<string> {
    for (const pair of pairs) {
      switch (op) {
        case CRUDAction.CREATE:
          try {
            const request = new DPS.CreateDevicePairRequest();
            const device = new DPS.DevicePair();

            const camera = new DPS.DevicePair.Device();
            camera.setDisplayName(pair.camera.displayName);
            camera.setId(pair.camera.id);

            const controller = new DPS.DevicePair.Device();
            controller.setDisplayName(pair.controller.displayName);
            controller.setId(pair.controller.id);

            const timestamp = new Timestamp();
            timestamp.fromDate(new Date());

            device.setCamera(camera);
            device.setController(controller);
            device.setCreatedAt(timestamp);
            request.setDevice(device);

            await this.backendService.InvokeUnary(DevicePairService.Create, request);
          } catch (e) {
            throw Error(`Failed to create device pair: ${e.message}`);
          }
          break;
        case CRUDAction.UPDATE:
          try {
            const request = new DPS.UpdateDevicePairRequest();
            request.setId(pair.id);
            const device = new DPS.DevicePair();

            const camera = new DPS.DevicePair.Device();
            camera.setDisplayName(pair.camera.displayName);
            camera.setId(pair.camera.id);

            const controller = new DPS.DevicePair.Device();
            controller.setDisplayName(pair.controller.displayName);
            controller.setId(pair.controller.id);

            device.setCamera(camera);
            device.setController(controller);

            request.setNewValue(device);
            await this.backendService.InvokeUnary(DevicePairService.Update, request);
          } catch (e) {
            throw Error(`Failed to update device pair: ${e.message}`);
          }
          break;
        case CRUDAction.DELETE:
          try {
            const request = new DPS.DeleteDevicePairRequest();
            request.setId(pair.id);
            await this.backendService.InvokeUnary(DevicePairService.Delete, request);
          } catch (e) {
            throw Error(`Failed to delete pair: ${e.message}`);
          }
          break;
      }
    }
    return 'Operations are successful';
  }

  connectPair(pair: DevicePair, op: ConnectAction): Observable<string> {
    return new Observable(subscriber => {
      const connectionRequest = new ConnectionRequest();
      connectionRequest.setCameraId(pair.camera.id);
      connectionRequest.setControllerId(pair.controller.id);
      switch (op) {
        case ConnectAction.CONNECT:
          this.backendService.InvokeUnary(DeviceConnectionService.Connect, connectionRequest)
            .then(() => {
              subscriber.next('Connected');
              subscriber.complete();
            })
            .catch(reason => subscriber.error(reason));
          break;
        case ConnectAction.DISCONNECT:
          this.backendService.InvokeUnary(DeviceConnectionService.Disconnect, connectionRequest)
            .then(() => {
              subscriber.next('Disconnected');
              subscriber.complete();
            })
            .catch(reason => subscriber.error(reason));
          break;
      }
    });
  }

  async refresh(deviceDiscovery: boolean): Promise<void> {
    const p = [];
    {
      const request = new DiscoveryDevicesRequest();
      request.setDiscoverCamera(true);
      request.setDiscoverController(true);
      request.setUseCache(!deviceDiscovery);
      p.push((async () => {
        try {
          const response = await this.backendService.InvokeUnary(DeviceConnectionService.DiscoveryDevices, request);
          this.AllDevices.next({
            Camera: response.getDiscoveredCameraList().map(v => ({
              id: v.getId(),
              displayName: v.getDisplayName(),
              connected: v.getConnected()
            })),
            Controller: response.getDiscoveredControllerList().map(v => ({
              id: v.getId(),
              displayName: v.getDisplayName(),
              connected: v.getConnected()
            }))
          });
        } catch (e) {
          throw Error(`Failed to discover devices: ${e.message}`);
        }
      })());
      p.push((async () => {
        try {
          const listDevicePairRequest = new DPS.ListDevicePairRequest();
          const response = await this.backendService.InvokeUnary(DevicePairService.List, listDevicePairRequest);
          this.DevicePairs.next(
            response.getDevicesList().map(
              (value): DevicePair => (
                {
                  id: value.getId(),
                  camera: {
                    id: value.getCamera().getId(),
                    displayName: value.getCamera().getDisplayName(),
                  },
                  controller: {
                    id: value.getController().getId(),
                    displayName: value.getController().getDisplayName(),
                  },
                  connected: false, // update later
                })
            )
          );
        } catch (e) {
          throw Error(`Failed to list devices: ${e.message}`);
        }
      })());
    }
    await Promise.all(p);
    this.updatePairConnectionStatus();
  }

  resetAllDevices() {
  }

  updatePairConnectionStatus() {
    let updated = false;
    const devices = this.AllDevices.value;
    const pairs = this.DevicePairs.value;
    for (const pair of pairs) {
      const controller = devices.Controller.find(value => value.id === pair.controller.id);
      const camera = devices.Camera.find(value => value.id === pair.camera.id);
      if (controller && camera) {
        const connected = controller.connected && camera.connected;
        if (pair.connected !== connected) {
          pair.connected = connected;
          updated = true;
        }
      }
    }
    if (updated) {
      this.DevicePairs.next(pairs);
    }
  }

  constructor(private backendService: BackendService) {
  }
}
