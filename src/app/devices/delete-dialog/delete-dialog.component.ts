import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {DEVICE_SERVICE, IDeviceService} from '../../core/api/device/device';
import {CRUDAction} from '../../core/crud-action.enum';
import {IDevicePair} from '../../core/device-pair';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    public snack: MatSnackBar,
    @Inject(DEVICE_SERVICE) public devSrv: IDeviceService,
    @Inject(MAT_DIALOG_DATA) public data: IDevicePair,
  ) {
  }

  ngOnInit() {
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  confirmDelete() {
    try {
      this.devSrv.CRUDPair([this.data], CRUDAction.DELETE, true).toPromise();
    } catch (e) {
      this.snack.open(e.toString(), 'DISMISS', {duration: 2000});
    }
    this.dialogRef.close();
  }
}
