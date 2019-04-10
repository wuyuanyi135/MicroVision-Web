import {Component, Inject, InjectionToken, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatTable} from '@angular/material';
import {DeviceConfigurationDialogComponent} from './device-configuration-dialog/device-configuration-dialog.component';
import {DeleteDialogComponent} from './delete-dialog/delete-dialog.component';
import {DEVICE_SERVICE, DevicePair, IDeviceService} from '../core/api/device/device';
import {ConnectionDialogComponent} from './connection-dialog/connection-dialog.component';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

  @ViewChild('deviceTable') public deviceTable: MatTable<object>;
  displayedColumns = ['index', 'camera', 'controller', 'edit', 'delete'];
  loading = false;
  constructor(
    private dialog: MatDialog,
    @Inject(DEVICE_SERVICE) public deviceSrv: IDeviceService) { }

  ngOnInit() {
    this.updateTable(true);
  }

  updateTable(discovery: boolean) {
    this.loading = true;
    this.deviceSrv.refresh(discovery).finally(() => this.loading = false);
  }
  createPair() {
    const dialogRef = this.dialog.open(DeviceConfigurationDialogComponent);
    dialogRef.componentInstance.create = true;
    dialogRef.afterClosed().subscribe(value => this.updateTable(false));
  }

  editPair(element: DevicePair) {
    const dialogRef = this.dialog.open(DeviceConfigurationDialogComponent, {data: element});
    dialogRef.componentInstance.create = false;
    dialogRef.afterClosed().subscribe(value => this.updateTable(false));
  }

  deletePair(element: DevicePair) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {data: element});
    dialogRef.afterClosed().subscribe(value => this.updateTable(false));
  }

  toggleConnection(row: DevicePair ) {
    const dialogRef = this.dialog.open(ConnectionDialogComponent, {data: row});
    dialogRef.afterClosed().subscribe(value => this.updateTable(false));
  }
}
