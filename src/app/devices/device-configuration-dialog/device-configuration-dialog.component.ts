import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {DEVICE_SERVICE, DevicePair, IDeviceService} from '../../core/api/device/device';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CRUDAction} from '../../core/crud-action.enum';
import {SNACK_DELAY} from '../../core/constants';

@Component({
  selector: 'app-device-configuration-dialog',
  templateUrl: './device-configuration-dialog.component.html',
  styleUrls: ['./device-configuration-dialog.component.scss'],
})
export class DeviceConfigurationDialogComponent implements OnInit {

  @Input() create: boolean;

  public fg: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DeviceConfigurationDialogComponent>,
    private formBuilder: FormBuilder,
    private snack: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: DevicePair,
    @Inject(DEVICE_SERVICE) public devSrv: IDeviceService,
  ) {
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.fg = this.formBuilder.group({
        camera: new FormControl(this.create ? '' : this.data.camera.displayName, [Validators.required]),
        controller: new FormControl(this.create ? '' : this.data.controller.displayName, [Validators.required]),
      }
    );
  }
  onCancelClick() {
    this.dialogRef.close();
  }

  async submit() {
    const id = this.data ? this.data.id : null;
    const pair: DevicePair = {
      id,
      camera: this.fg.value.camera,
      controller: this.fg.value.controller,
    };
    try {
      if (this.create) {
        await this.devSrv.CRUDPair([pair], CRUDAction.CREATE, true);
      } else {
        await this.devSrv.CRUDPair([pair], CRUDAction.UPDATE, true);
      }
    } catch (e) {
      this.snack.open(e.toString(), 'DISMISS', {duration: SNACK_DELAY});
    }
    this.dialogRef.close();
  }

  rediscovery() {
    this.devSrv.refresh(true);
  }
}
