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
  constructor(
    private dialog: MatDialog,
    @Inject(DEVICE_SERVICE) public deviceSrv: IDeviceService) { }

  ngOnInit() {
    this.updateTable();
  }

  updateTable() {
    this.deviceSrv.refresh(false);
  }
  createPair() {
    const dialogRef = this.dialog.open(DeviceConfigurationDialogComponent);
    dialogRef.componentInstance.create = true;
    dialogRef.afterClosed().subscribe(value => this.updateTable());
  }

  editPair(element: DevicePair) {
    const dialogRef = this.dialog.open(DeviceConfigurationDialogComponent, {data: element});
    dialogRef.componentInstance.create = false;
    dialogRef.afterClosed().subscribe(value => this.updateTable());
  }

  deletePair(element: DevicePair) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {data: element});
    dialogRef.afterClosed().subscribe(value => this.updateTable());
  }

  toggleConnection(row: DevicePair ) {
    const dialogRef = this.dialog.open(ConnectionDialogComponent, {data: row});
    dialogRef.afterClosed().subscribe(value => this.updateTable());
  }
}
