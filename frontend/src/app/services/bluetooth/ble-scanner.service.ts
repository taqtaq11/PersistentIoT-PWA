/// <reference types="@types/web-bluetooth" />

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {
  BluetoothCoreExtended
} from './ble-scanner.utils';

@Injectable()
export class BLEScannerService {

  private readonly allDevicesPrefix = [
    { name: '' },
    { namePrefix: '0' },
    { namePrefix: '1' },
    { namePrefix: '2' },
    { namePrefix: '3' },
    { namePrefix: '4' },
    { namePrefix: '5' },
    { namePrefix: '6' },
    { namePrefix: '7' },
    { namePrefix: '8' },
    { namePrefix: '9' },
    { namePrefix: 'a' },
    { namePrefix: 'b' },
    { namePrefix: 'c' },
    { namePrefix: 'd' },
    { namePrefix: 'e' },
    { namePrefix: 'f' },
    { namePrefix: 'g' },
    { namePrefix: 'h' },
    { namePrefix: 'i' },
    { namePrefix: 'j' },
    { namePrefix: 'k' },
    { namePrefix: 'l' },
    { namePrefix: 'm' },
    { namePrefix: 'n' },
    { namePrefix: 'o' },
    { namePrefix: 'p' },
    { namePrefix: 'q' },
    { namePrefix: 'r' },
    { namePrefix: 's' },
    { namePrefix: 't' },
    { namePrefix: 'u' },
    { namePrefix: 'v' },
    { namePrefix: 'w' },
    { namePrefix: 'x' },
    { namePrefix: 'y' },
    { namePrefix: 'z' },
    { namePrefix: 'A' },
    { namePrefix: 'B' },
    { namePrefix: 'C' },
    { namePrefix: 'D' },
    { namePrefix: 'E' },
    { namePrefix: 'F' },
    { namePrefix: 'G' },
    { namePrefix: 'H' },
    { namePrefix: 'I' },
    { namePrefix: 'J' },
    { namePrefix: 'K' },
    { namePrefix: 'L' },
    { namePrefix: 'M' },
    { namePrefix: 'N' },
    { namePrefix: 'O' },
    { namePrefix: 'P' },
    { namePrefix: 'Q' },
    { namePrefix: 'R' },
    { namePrefix: 'S' },
    { namePrefix: 'T' },
    { namePrefix: 'U' },
    { namePrefix: 'V' },
    { namePrefix: 'W' },
    { namePrefix: 'X' },
    { namePrefix: 'Y' },
    { namePrefix: 'Z' }
  ];

  private readonly optionalServices = ['battery_service'];

  device: any = null;

  constructor(public ble: BluetoothCoreExtended) {

  }

  scanDevice(): Observable<BluetoothDevice> {
    return this.ble.discover$({
      filters: this.allDevicesPrefix,
      optionalServices: [0x1800]
    })
    .map(service => {
      return service.device as BluetoothDevice;
    }) as any as Observable<BluetoothDevice>;
  }

  // .mergeMap((gatt: BluetoothRemoteGATTServer) => {
  //   console.log('getting server:' + gatt);
  //   return this.ble.getPrimaryService$(
  //     gatt, 0x1800
  //   );
  // })
  // .mergeMap((primaryService: BluetoothRemoteGATTService) => {
  //   console.log('getting service:' + primaryService);
  //   return this.ble.getCharacteristics$(primaryService);
  // })
  // .mergeMap((characteristic: BluetoothRemoteGATTCharacteristic[]) => {
  //   alert('getting characteristic:' + characteristic);
  //   return characteristic;
  // })
  // // .map((value: DataView) => value.getInt8(0))
  // .catch( (e) => {
  //   console.error('[BLE::Error] discover$: %o', e)
  //   return Observable.create(e);
  // })
  // .subscribe(
  //   function (x) {
  //       alert('Next: ' + x);
  //   },
  //   function (err) {
  //       alert('Error: ' + err);
  //   },
  //   function () {
  //       alert('Completed');
  // });

}
