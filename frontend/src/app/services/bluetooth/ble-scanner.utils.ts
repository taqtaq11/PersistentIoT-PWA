/// <reference types="@types/web-bluetooth" />

import {Injectable} from "@angular/core";

import {Observable} from "rxjs";
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/observable/throw';
import {BluetoothCore} from "@manekinekko/angular-web-bluetooth";

@Injectable()
export class BluetoothCoreExtended extends BluetoothCore {
  getCharacteristics$(primaryService: BluetoothRemoteGATTService): Observable<BluetoothRemoteGATTCharacteristic[]> {

    let characteristicsPromise = primaryService.getCharacteristics()
      .then(chars => {
          for (var i = 0; i < chars.length; i++) {
            var char = chars[i];

            if (char.properties.notify) {

              char.startNotifications().then( _ =>  {
                return char.addEventListener('characteristicvaluechanged', this.onCharacteristicChanged.bind(this));
              }, (error: DOMException) => {
                Promise.reject(`${error.message}`);
              });

            }
            else {
              char.addEventListener('characteristicvaluechanged', this.onCharacteristicChanged.bind(this));
            }
          }

          return chars;
        },
        (error: DOMException) => {
          Promise.reject(`${error.message}`);
        }
      );

    return Observable.fromPromise(characteristicsPromise);
  }

  getUTF8String = function(dataView, offset, length) {
      var utf16 = new ArrayBuffer(length * 2);
      var utf16View = new Uint16Array(utf16);
      for (var i = 0; i < length; ++i) {
          utf16View[i] = dataView.getUint8(offset + i);
      }
      return String.fromCharCode.apply(null, utf16View);
  };
}
