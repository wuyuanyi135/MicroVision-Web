import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DEVICE_SERVICE, DevicePair, IDeviceService} from '../../core/api/device/device';
import {ConnectAction} from '../../core/connect-action.enum';

@Component({
  selector: 'app-connection-dialog',
  templateUrl: './connection-dialog.component.html',
  styleUrls: ['./connection-dialog.component.scss']
})
export class ConnectionDialogComponent implements OnInit {

  public displayText: { text: string, error?: boolean }[];
  public action: ConnectAction;
  public completed = false;

  constructor(
    public dialogRef: MatDialogRef<ConnectionDialogComponent>,
    @Inject(DEVICE_SERVICE) public devSrv: IDeviceService,
    @Inject(MAT_DIALOG_DATA) public data: DevicePair,
  ) {
    if (data.connected) {
      this.action = ConnectAction.DISCONNECT;
    } else {
      this.action = ConnectAction.CONNECT;
    }
  }
  ngOnInit() {
    this.dialogRef.disableClose = true;

    this.displayText = [];
    try {
      const observable = this.devSrv.connectPair(this.data, this.action);
      observable.subscribe(
        value => {
          this.displayText.push({text: value});
        },
        err => {
          this.displayText.push({text: err.toString(), error: true});
          this.unlock();
        },
        () => {
          this.displayText.push({text: 'Completed', error: false});
          this.unlock();
        }
      );
    } catch (e) {
      this.displayText.push({text: e.toString(), error: true});
      this.unlock();
    }
  }
  unlock() {
    this.completed = true;
    this.dialogRef.disableClose = false;
  }
  done() {
    this.dialogRef.close();
  }

  getTitle(): string {
    if (this.action === ConnectAction.CONNECT ) {
      return `Connecting device`;
    } else {
      return `Disconnecting device`;
    }
  }
}
