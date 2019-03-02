import { Component, OnInit } from '@angular/core';
import {DeviceService} from '../device.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-device-manager',
  templateUrl: './device-manager.component.html',
  styleUrls: ['./device-manager.component.scss']
})
export class DeviceManagerComponent implements OnInit {

  constructor(private deviceService: DeviceService, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  async refreshDevices() {
    try {
      await this.deviceService.refreshDevices(false);
    } catch (e) {
      this.snackBar.open(`Failed to refresh devices: ${e.toString()}`, 'DISMISS', {duration: 2500});
    }
  }
}
