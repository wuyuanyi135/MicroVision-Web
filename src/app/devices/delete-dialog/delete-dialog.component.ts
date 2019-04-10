import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {DEVICE_SERVICE, DevicePair, IDeviceService} from '../../core/api/device/device';
import {CRUDAction} from '../../core/crud-action.enum';
import {SNACK_DELAY} from '../../core/constants';

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
    @Inject(MAT_DIALOG_DATA) public data: DevicePair,
  ) {
  }

  ngOnInit() {
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  confirmDelete() {
    try {
      this.devSrv.CRUDPair([this.data], CRUDAction.DELETE, true);
    } catch (e) {
      this.snack.open(e.toString(), 'DISMISS', {duration: SNACK_DELAY});
    }
    this.dialogRef.close();
  }
}
