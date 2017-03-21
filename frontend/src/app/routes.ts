import { Routes } from '@angular/router';

import { HomePageComponent } from './views/home-page/home-page.component';
import { DevicesScannerPageComponent } from './views/devices-scanner-page/devices-scanner-page.component';
import { HubsPageComponent } from './views/hubs-page/hubs-page.component';
import { NotFoundPageComponent } from './views/not-found-page/not-found-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'devices-scanner',
    component: DevicesScannerPageComponent
  },
  {
    path: 'hubs',
    component: HubsPageComponent
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];
