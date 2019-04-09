import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PREVIEW_SERVICE} from './preview/preview';
import {PreviewService} from './preview/preview.service';
import {DEVICE_SERVICE} from './device/device';
import {DeviceService} from './device/device.service';
import {DATABASE_SERVICE} from './database/database';
import {DatabaseService} from './database/database.service';
import {STORAGE_SERVICE} from './storage/storage';
import {StorageService} from './storage/storage.service';

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
    },
    {
      provide: DATABASE_SERVICE,
      useClass: DatabaseService,
    },
    {
      provide: STORAGE_SERVICE,
      useClass: StorageService,
    },
  ]
})
export class ApiModule {
}
