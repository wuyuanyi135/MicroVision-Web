import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MainComponent} from './main/main.component';
import {DeviceManagerComponent} from './device-manager/device-manager.component';

export const dashboardRouters: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      }, {
        path: '',
        component: HomeComponent,
      }, {
        path: 'devman',
        component: DeviceManagerComponent,
      }
    ]
  }
];

