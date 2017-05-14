import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { State } from '../reducers/app.reducer';
import { ScanDevicesAction } from '../actions/devices-scanner.action';

@Injectable()
export class DevicesScannerService {

  private store: Store<State>;

  constructor(store: Store<State>) {
    this.store = store;
  }

  scanDevice() {
    this.store.dispatch(new ScanDevicesAction());
  }
}
