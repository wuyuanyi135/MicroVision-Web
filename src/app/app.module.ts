import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.router';
import {LayoutsComponent} from './layouts/layouts.component';
import {HeaderComponent} from './header/header.component';
import {SidenavComponent} from './sidenav/sidenav.component';
import {MainComponent} from './main/main.component';
import {WebStorageModule} from 'ngx-store';

import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AcquisitionComponent } from './acquisition/acquisition.component';
import { PreviewComponent } from './acquisition/preview/preview.component';
import {MaterialModule} from './import-modules/material.module';
import {environment} from 'src/environments/environment';
import { DevicesComponent } from './devices/devices.component';
import { DeviceConfigurationDialogComponent } from './devices/device-configuration-dialog/device-configuration-dialog.component';
import { DeleteDialogComponent } from './devices/delete-dialog/delete-dialog.component';
import { ConnectionDialogComponent } from './devices/connection-dialog/connection-dialog.component';
import { ConfigurePanelComponent } from './acquisition/configure-panel/configure-panel.component';
import { ProjectSettingComponent } from './acquisition/configure-panel/project-setting/project-setting.component';
import { DisplaySettingComponent } from './acquisition/configure-panel/display-setting/display-setting.component';
import { NumericSliderComponent } from './acquisition/configure-panel/numeric-slider/numeric-slider.component';
import { CameraSettingComponent } from './acquisition/configure-panel/camera-setting/camera-setting.component';
import {AngularBaseModule} from './import-modules/angular-base.module';
import { LightingSettingComponent } from './acquisition/configure-panel/lighting-setting/lighting-setting.component';
import { ActionSettingComponent } from './acquisition/configure-panel/action-setting/action-setting.component';
import {SizeMatchDirective, SizeMatchSrcDirective} from './core/size-match.directive';
import {ResizableModule} from 'angular-resizable-element';
import { DatabaseComponent } from './database/database.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ReadableSizePipe } from './core/pipe/readable-size.pipe';
import { SanitizeUrlPipe } from './core/pipe/sanitize-url.pipe';
import {MatProgressBarModule} from '@angular/material';
import { StorageFooterComponent } from './storage-footer/storage-footer.component';
import { DetailedViewComponent } from './database/detailed-view/detailed-view.component';
import { ConfirmDialogComponent } from './common/dialogs/confirm/confirm-dialog.component';
import {TextInputDialogComponent} from './common/dialogs/text-input-dialog/text-input-dialog.component';
import { ToSafeUrlPipe } from './core/pipe/to-safe-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LayoutsComponent,
    HeaderComponent,
    SidenavComponent,
    MainComponent,
    AcquisitionComponent,
    PreviewComponent,
    DevicesComponent,
    DeviceConfigurationDialogComponent,
    DeleteDialogComponent,
    ConnectionDialogComponent,
    ConfigurePanelComponent,
    ProjectSettingComponent,
    DisplaySettingComponent,
    NumericSliderComponent,
    CameraSettingComponent,
    LightingSettingComponent,
    ActionSettingComponent,
    SizeMatchDirective,
    SizeMatchSrcDirective,
    DatabaseComponent,
    ReadableSizePipe,
    SanitizeUrlPipe,
    StorageFooterComponent,
    DetailedViewComponent,
    ConfirmDialogComponent,
    TextInputDialogComponent,
    ToSafeUrlPipe,
  ],
  imports: [
    CommonModule,
    AngularBaseModule,
    RouterModule.forRoot(appRoutes),
    environment.ApiModule,
    FlexLayoutModule,
    MaterialModule,
    WebStorageModule,
    ResizableModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    MatProgressBarModule,
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    DeviceConfigurationDialogComponent,
    DeleteDialogComponent,
    ConnectionDialogComponent,
    ConfirmDialogComponent,
    TextInputDialogComponent,
  ],
})
export class AppModule { }
