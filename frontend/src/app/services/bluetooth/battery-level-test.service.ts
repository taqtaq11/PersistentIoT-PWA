import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {
  BluetoothCore,
  BrowserWebBluetooth,
  BluetoothRemoteGATTServer,
  BluetoothGATTService,
  BluetoothRemoteGATTCharacteristic,
  DataView
} from '@manekinekko/angular-web-bluetooth'

@Injectable()
export class BatteryLevelTestService {

  device: any = null;

  constructor(public ble: BluetoothCore) {

  }

  getBatteryLevel(): void {
    // let a: any = this.ble
    //   .discover$()
    //   .mergeMap((gatt: BluetoothRemoteGATTServer) => {
    //     alert('getting server');
    //     return this.ble.getPrimaryService$(
    //       gatt,
    //       'battery_service'
    //     );
    //   })
    //   .mergeMap((primaryService: BluetoothGATTService) => {
    //     return this.ble.getCharacteristic$(
    //       primaryService,
    //       'battery_level'
    //     );
    //   })
    //   .mergeMap((characteristic: BluetoothRemoteGATTCharacteristic) => {
    //     return this.ble.readValue$(characteristic);
    //   })
    //   .map((value: DataView) => value.getInt8(0));
    //
    // return a as Observable<number>;

    if (!this.device) {
      navigator.bluetooth.requestDevice({ filters: [{ services: ['battery_service'] }] })
        .then(device => {
          alert('connecting');
          return this.device = device.gatt.connect();
        })
        .then(server => {

          return server.getPrimaryService('battery_service');
        })
        .then(service => {
          return service.getCharacteristic('battery_level');
        })
        .then(characteristic => {
          return characteristic.readValue();
        })
        .then(value => {
          alert('Battery percentage is ' + value.getUint8(0));
        })
        .catch(error => { alert(error); });
    }
    else {
      this.device
        .then(server => {

          return server.getPrimaryService('battery_service');
        })
        .then(service => {
          return service.getCharacteristic('battery_level');
        })
        .then(characteristic => {
          return characteristic.readValue();
        })
        .then(value => {
          alert('Battery percentage is ' + value.getUint8(0));
        })
        .catch(error => { alert(error); });
    }
  }

  getDevice() {
    let a: any = this.ble
      .discover$({ filters: [{ services: ['battery_service'] }] })
      .mergeMap((gatt: BluetoothRemoteGATTServer) => {
        alert('getting server:' + gatt);
        return this.ble.getPrimaryService$(
          gatt,
          'battery_service'
        );
      })
      .mergeMap((primaryService: BluetoothGATTService) => {
        alert('getting service:' + primaryService);
        return this.ble.getCharacteristic$(
          primaryService,
          'battery_level'
        );
      })
      .mergeMap((characteristic: BluetoothRemoteGATTCharacteristic) => {
        alert('getting characteristic:' + characteristic);
        return this.ble.readValue$(characteristic);
      })
      .map((value: DataView) => value.getInt8(0))
      .catch( (e) => {
        console.error('[BLE::Error] discover$: %o', e)
        return Observable.create(e);
      })
      .subscribe(
        function (x) {
            alert('Next: ' + x);
        },
        function (err) {
            alert('Error: ' + err);
        },
        function () {
            alert('Completed');
      });
  }

  getDeviceM() {
    let c: BrowserWebBluetooth = new BrowserWebBluetooth();
    let b: BluetoothCore = new BluetoothCore(c);

    Observable.fromPromise(
      b.discover({ filters: [{ services: ['battery_service'] }] })
    )
    .subscribe(
      function (x) {
          alert('Next: ' + x);
      },
      function (err) {
          alert('Error: ' + err);
      },
      function () {
          alert('Completed');
    });
  }

}
