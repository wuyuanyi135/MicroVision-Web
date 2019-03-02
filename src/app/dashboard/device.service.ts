import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {BehaviorSubject} from 'rxjs';
import {SerialDeviceMapping} from 'src/protogen/camera_controller_definitions_pb';
import {DeviceInfo} from 'src/protogen/camera_definitions_pb';
import {CameraControllerDevice} from './core/camera-controller-device';
import {CookieStorage} from 'ngx-store';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  public ControllerObservable = new BehaviorSubject<SerialDeviceMapping[]>(null);
  public CameraObservable = new BehaviorSubject<DeviceInfo[]>(null);
  public CameraOpenObservable = new BehaviorSubject<DeviceInfo>(null);
  public ControllerOpenObservable = new BehaviorSubject<SerialDeviceMapping>(null);

  @CookieStorage({key: 'camera_server_url', expires: new Date(new Date().getTime() + 10 * 365 * 24 * 60 * 60 * 1000)})
  public CameraServerUrl = 'localhost:5074';

  @CookieStorage({key: 'controller_server_url', expires: new Date(new Date().getTime() + 10 * 365 * 24 * 60 * 60 * 1000)})
  public ControllerServerUrl = 'localhost:3050';

  public async refreshDevices(useCache?: boolean) {
    try {
      const devices = await this.apiService.UpdateDeviceList({useCache});
      this.ControllerObservable.next(devices.getControllerList());
      this.CameraObservable.next(devices.getDevicesList());
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  public async updateServerUrl(cameraServerUrl: string, controllerServerUrl: string) {
    try {
      const devices = await this.apiService.UpdateDeviceList({useCache: false, cameraServerUrl, controllerServerUrl});
      this.ControllerObservable.next(devices.getControllerList());
      this.CameraObservable.next(devices.getDevicesList());
    } catch (e) {
      throw e;
    }
  }

  public async connectController(path: string) {
    try {
      const connectedDevices = await this.apiService.ConnectDevices({controller: {path, action: 'connect'}});
    } catch (e) {
      throw e;
    }
  }
  public async disconnectController(path: string) {
    try {
      const connectedDevices = await this.apiService.ConnectDevices({controller: {path, action: 'disconnect'}});
    } catch (e) {
      throw e;
    }
  }
  public async connectCamera(id: string) {
    try {
      const connectedDevices = await this.apiService.ConnectDevices({camera: {id, action: 'connect'}});
    } catch (e) {
      throw e;
    }
  }
  public async disconnectCamera(id: string) {
    try {
      const connectedDevices = await this.apiService.ConnectDevices({camera: {id, action: 'disconnect'}});
    } catch (e) {
      throw e;
    }
  }
  async init() {

    // request to connect with the stored urls once initialized
    await this.updateServerUrl(this.CameraServerUrl, this.ControllerServerUrl);

  }

  constructor(private apiService: ApiService) {
    this.init();
  }


}
