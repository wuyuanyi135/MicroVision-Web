import { Component, OnInit, OnDestroy } from '@angular/core';
import {DeviceService} from '../../device.service';
import {Subscription} from 'rxjs';
import {SerialDeviceMapping} from 'src/protogen/camera_controller_definitions_pb';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-camera-controller-manager',
  templateUrl: './camera-controller-manager.component.html',
  styleUrls: ['./camera-controller-manager.component.scss']
})
export class CameraControllerManagerComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  public ControllerList: SerialDeviceMapping[];
  constructor(private deviceService: DeviceService, private snack: MatSnackBar) {}

  ngOnInit() {
    this.subscription = this.deviceService.ControllerObservable.subscribe(value => {
      this.ControllerList = value;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  async toggleControllerConnection(controller: SerialDeviceMapping) {
    try {
      if (controller.getConnected()) {
        await this.deviceService.disconnectController(controller.getDestination());
      } else {
        await this.deviceService.connectController(controller.getDestination());
      }
    } catch (e) {
      this.snack.open(`Failed to control connection to the controller: ${e}`, 'DISMISS', {duration: 2500});
    } finally {
      await this.deviceService.refreshDevices(false);
    }
  }
}
