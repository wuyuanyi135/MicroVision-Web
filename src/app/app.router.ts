import {Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {AcquisitionComponent} from './acquisition/acquisition.component';
import {DevicesComponent} from './devices/devices.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'devices',
        component: DevicesComponent,
      },
      {
        path: 'acquisition',
        component: AcquisitionComponent,
      }, {
        path: '',
        redirectTo: 'acquisition',
        pathMatch: 'full'
      }
    ]
  }
];

