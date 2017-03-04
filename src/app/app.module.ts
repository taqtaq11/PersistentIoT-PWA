import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { WebBluetoothModule } from '@manekinekko/angular-web-bluetooth';
import { StoreModule } from '@ngrx/store';
import { RouterStoreModule } from '@ngrx/router-store';

import { AppComponent } from './views/app/app.component';
import { HeaderToolbarComponent } from './components/header-toolbar/header-toolbar.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { DevicesScannerPageComponent } from './views/devices-scanner-page/devices-scanner-page.component';
import { HubsPageComponent } from './views/hubs-page/hubs-page.component';
import { NotFoundPageComponent } from './views/not-found-page/not-found-page.component';

import { BatteryLevelTestService } from './services/battery-level-test.service'

import { routes } from './routes';
import { reducer } from './reducers/layout.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderToolbarComponent,
    HomePageComponent,
    DevicesScannerPageComponent,
    HubsPageComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(routes, { useHash: true }),
    StoreModule.provideStore(reducer),
    RouterStoreModule.connectRouter(),
    WebBluetoothModule.forRoot()
  ],
  providers: [ BatteryLevelTestService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
