import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {DEVICE_SERVICE, IDeviceService} from '../../core/api/device/device';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CRUDAction} from '../../core/crud-action.enum';
import {IDevicePair} from '../../core/device-pair';

@Component({
  selector: 'app-device-configuration-dialog',
  templateUrl: './device-configuration-dialog.component.html',
  styleUrls: ['./device-configuration-dialog.component.scss']
})
export class DeviceConfigurationDialogComponent implements OnInit {

  @Input() create: boolean;

  private fg: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DeviceConfigurationDialogComponent>,
    private formBuilder: FormBuilder,
    private snack: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: IDevicePair,
    @Inject(DEVICE_SERVICE) private devSrv: IDeviceService,
  ) {
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.fg = this.formBuilder.group({
        pairName: new FormControl(this.create ? 'default' : this.data.pairName, [Validators.required]),
        camera: new FormControl(this.create ? '' : this.data.camera, [Validators.required]),
        controller: new FormControl(this.create ? '' : this.data.controller, [Validators.required]),
      }
    );
  }
  onCancelClick() {
    this.dialogRef.close();
  }

  async submit() {
    const id = this.data ? this.data.id : undefined;
    const pair: IDevicePair = {
      id,
      pairName: this.fg.value.pairName,
      camera: this.fg.value.camera,
      controller: this.fg.value.controller,
    };
    try {
      await this.devSrv.CRUDPair([pair], CRUDAction.UPDATE_OR_CREATE, true).toPromise();
    } catch (e) {
      this.snack.open(e.toString(), 'DISMISS', {duration: 2000});
    }
    this.dialogRef.close();
  }

  rediscovery() {
    this.devSrv.refresh(true);
  }
}
