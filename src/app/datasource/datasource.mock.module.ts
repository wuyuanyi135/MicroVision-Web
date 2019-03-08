import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PreviewMockService} from './preview/preview-mock.service';
import {PREVIEW_SERVICE} from './preview/preview';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    {
      provide: PREVIEW_SERVICE,
      useClass: PreviewMockService
    }
  ]
})
export class DatasourceMockModule { }
