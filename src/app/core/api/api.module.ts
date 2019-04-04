import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PREVIEW_SERVICE} from './preview/preview';
import {PreviewService} from './preview/preview.service';
import {DEVICE_SERVICE} from './device/device';
import {DeviceService} from './device/device.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: PREVIEW_SERVICE,
      useClass: PreviewService,
    },
    {
      provide: DEVICE_SERVICE,
      useClass: DeviceService,
    }
  ]
})
export class ApiModule { }
