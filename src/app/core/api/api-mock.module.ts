import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PREVIEW_SERVICE} from './preview/preview';
import {PreviewMockService} from './preview/preview-mock.service';
import {DEVICE_SERVICE} from './device/device';
import {DeviceMockService} from './device/device-mock.service';
import {DATABASE_SERVICE} from './database/database';
import {DatabaseMockService} from './database/database-mock.service';
import {STORAGE_SERVICE} from './storage/storage';
import {StorageMockService} from './storage/storage-mock.service';

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
    },
    {
      provide: DATABASE_SERVICE,
      useClass: DatabaseMockService,
    },
    {
      provide: STORAGE_SERVICE,
      useClass: StorageMockService,
    },
  ]
})
export class ApiMockModule { }
