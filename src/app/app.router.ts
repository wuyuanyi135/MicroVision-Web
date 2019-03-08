import {Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {AcquisitionComponent} from './acquisition/acquisition.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'acquisition',
        component: AcquisitionComponent,
      }, {
        path: '',
        component: AcquisitionComponent,
      }
    ]
  }
];

