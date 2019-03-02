import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsComponent } from './layouts/layouts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule,
  MatDividerModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule, MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {SidenavComponent} from './sidenav/sidenav.component';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import {dashboardRouters} from './dashboard.router';
import { MainComponent } from './main/main.component';
import { DeviceManagerComponent } from './device-manager/device-manager.component';
import {CameraControllerManagerComponent} from './device-manager/camera-controller-manager/camera-controller-manager.component';
import {WebStorageModule} from 'ngx-store';
import { CameraManagerComponent } from './device-manager/camera-manager/camera-manager.component';

@NgModule({
  declarations: [
    LayoutsComponent,
    DashboardComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    MainComponent,
    DeviceManagerComponent,
    CameraControllerManagerComponent,
    CameraManagerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRouters),
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatDividerModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatMenuModule,
    MatButtonModule,
    WebStorageModule,
  ],
  exports: [MainComponent],
  bootstrap: [MainComponent],
})
export class DashboardModule { }
