import {Injectable} from '@angular/core';
import {DeviceList, DevicePair, IDeviceService} from './device';
import {CRUDAction} from '../../crud-action.enum';
import {BehaviorSubject, Observable} from 'rxjs';
import {ConnectAction} from '../../connect-action.enum';
import {BackendService} from '../backend-server/backend.service';
import {DevicePairService} from '../../../../protogen/device_pair_service_pb_service';
import * as DPS from '../../../../protogen/device_pair_service_pb';
import {Timestamp} from 'google-protobuf/google/protobuf/timestamp_pb';
import {DeviceDiscoveryService} from '../../../../protogen/device_discovery_service_pb_service';
import {DiscoveryDevicesRequest} from '../../../../protogen/device_discovery_service_pb';

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
    return undefined;
  }

  async refresh(deviceDiscovery: boolean) {
    if (deviceDiscovery) {
      const request = new DiscoveryDevicesRequest();
      request.setDiscoverCamera(true);
      request.setDiscoverController(true);
      try {
        const response = await this.backendService.InvokeUnary(DeviceDiscoveryService.DiscoveryDevices, request);
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
    }
    try {
      const request = new DPS.ListDevicePairRequest();
      const response = await this.backendService.InvokeUnary(DevicePairService.List, request);
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
              connected: false, // TODO: check connection status
            })
        )
      );
    } catch (e) {
      throw Error(`Failed to list devices: ${e.message}`);
    }
  }

  resetAllDevices() {
  }


  constructor(private backendService: BackendService) {
  }
}
