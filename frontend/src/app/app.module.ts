import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { COMPILER_PROVIDERS } from '@angular/compiler';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { WebBluetoothModule } from '@manekinekko/angular-web-bluetooth';
import { StoreModule } from '@ngrx/store';
import { RouterStoreModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';

import { LocalStorageModule } from 'angular-2-local-storage';

import { MdButtonModule, MdSidenavModule, MdCheckboxModule,
         MdSlideToggleModule, MdIconModule, MdListModule,
         MdToolbarModule, MdTabsModule } from '@angular/material';

import { AppComponent } from './views/app/app.component';
import { HeaderToolbarComponent } from './components/header-toolbar/header-toolbar.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { DevicesScannerPageComponent } from './views/devices-scanner-page/devices-scanner-page.component';
import { HubsPageComponent } from './views/hubs-page/hubs-page.component';
import { NotFoundPageComponent } from './views/not-found-page/not-found-page.component';

import {DevicesScannerService} from "./services/devices-scanner.service";
import { BLEScannerService } from './services/bluetooth/ble-scanner.service';
import { BluetoothCoreExtended } from './services/bluetooth/ble-scanner.utils';
import { StorageManager } from './services/local/storage-manager.service';
import { HubStorageManager } from './services/local/hub-storage-manager.service';

import { DeviceScannerEffects } from './effects/devices-scanner.effect';

import { routes } from './routes';
import { reducer } from './reducers/app.reducer';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NavItemComponent } from './components/nav-item/nav-item.component';
import { DeviceControlPageComponent } from './views/device-control-page/device-control-page.component';
import { DynamicControlComponent } from './components/dynamic-control/dynamic-control.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderToolbarComponent,
    HomePageComponent,
    DevicesScannerPageComponent,
    HubsPageComponent,
    NotFoundPageComponent,
    SidenavComponent,
    NavItemComponent,
    DeviceControlPageComponent,
    DynamicControlComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    LocalStorageModule.withConfig({
        prefix: 'piot',
        storageType: 'localStorage'
    }),
    MdButtonModule,
    MdSidenavModule,
    MdCheckboxModule,
    MdSlideToggleModule,
    MdIconModule,
    MdListModule,
    MdToolbarModule,
    MdTabsModule,
    RouterModule.forRoot(routes, { useHash: true }),
    StoreModule.provideStore(reducer),
    RouterStoreModule.connectRouter(),
    WebBluetoothModule.forRoot({
      enableTracing: false
    }),
    EffectsModule.run(DeviceScannerEffects)
  ],
  providers: [
    COMPILER_PROVIDERS,
    DevicesScannerService,
    BLEScannerService,
    BluetoothCoreExtended,
    StorageManager,
    HubStorageManager
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
