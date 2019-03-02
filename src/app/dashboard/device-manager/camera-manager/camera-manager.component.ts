import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {DeviceService} from '../../device.service';
import {DeviceInfo} from 'src/protogen/camera_definitions_pb';
import {MatSelectionListChange, MatSnackBar} from '@angular/material';
import {SerialDeviceMapping} from '../../../../protogen/camera_controller_definitions_pb';

@Component({
  selector: 'app-camera-manager',
  templateUrl: './camera-manager.component.html',
  styleUrls: ['./camera-manager.component.scss']
})
export class CameraManagerComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  public CameraList: DeviceInfo[];

  constructor(private deviceService: DeviceService, private snack: MatSnackBar) {
  }

  ngOnInit() {
    this.subscription = this.deviceService.CameraObservable.subscribe(value => this.CameraList = value);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  async toggleCameraConnection(camera: DeviceInfo) {
    try {
      if (camera.getConnected()) {
        await this.deviceService.disconnectCamera(camera.getId());
      } else {
        await this.deviceService.connectCamera(camera.getId());
      }
    } catch (e) {
      this.snack.open(`Failed to control connection to the camera: ${e}`, 'DISMISS', {duration: 2500});
    } finally {
      await this.deviceService.refreshDevices(false);
    }
  }
}
