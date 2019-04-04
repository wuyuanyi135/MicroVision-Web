import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PREVIEW_SERVICE} from './preview/preview';
import {PreviewMockService} from './preview/preview-mock.service';
import {DEVICE_SERVICE} from './device/device';
import {DeviceMockService} from './device/device-mock.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: PREVIEW_SERVICE,
      useClass: PreviewMockService,
    },
    {
      provide: DEVICE_SERVICE,
      useClass: DeviceMockService,
    }
  ]
})
export class ApiMockModule { }
