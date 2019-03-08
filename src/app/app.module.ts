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
import {MaterialModule} from './material/material.module';
import {DatasourceModule} from './datasource/datasource.module';
import {environment} from '../environments/environment';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LayoutsComponent,
    HeaderComponent,
    SidenavComponent,
    MainComponent,
    AcquisitionComponent,
    PreviewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    environment.DataSourceModule,
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    WebStorageModule,
  ],
  providers: [{provide: Window, useValue: window}],
  bootstrap: [AppComponent]
})
export class AppModule { }
