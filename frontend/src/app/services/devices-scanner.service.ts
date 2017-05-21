import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers/app.reducer';
import { SelectLocalHubAction } from '../actions/devices-scanner.action';
import { ScanDevicesAction } from '../actions/devices-scanner.action';

@Injectable()
export class DevicesScannerService {

  private store: Store<fromRoot.State>;

  constructor(store: Store<fromRoot.State>) {
    this.store = store;
  }

  public selectLocalHub() {
    this.store.dispatch(new SelectLocalHubAction());
  }

  public scanDevice() {
    this.store.dispatch(new ScanDevicesAction());
  }

  public getManagingHubs() {
    return this.store.select(fromRoot.getManagingHubs);
  }
}
