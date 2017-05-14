import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

import * as devicesScannerActionInfo from '../actions/devices-scanner.action';

import {Device} from "../models/device";
import { BLEScannerService } from '../services/bluetooth/ble-scanner.service';

@Injectable()
export class DeviceScannerEffects {
  constructor(private actions$: Actions, private bleScanner: BLEScannerService) { }


  @Effect()
  scanDevices$: Observable<Action> = this.actions$
    .ofType(devicesScannerActionInfo.ActionTypes.SCAN_DEVICES)
    .switchMap((action: devicesScannerActionInfo.ScanDevicesAction) => {
      return this.bleScanner.scanDevice()
        .map(bluetoothDevice => Device.fromBluetoothDevice(bluetoothDevice))
        .map(device => new devicesScannerActionInfo.DevicesScanCompleteAction(device))
        .catch(() => of(new devicesScannerActionInfo.DevicesScanCompleteAction(null)));
    });
}
