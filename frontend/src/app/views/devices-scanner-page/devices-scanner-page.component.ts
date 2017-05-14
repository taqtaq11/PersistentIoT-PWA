import { Component, OnInit } from '@angular/core';

import {Observable} from "rxjs";
import {Store} from "@ngrx/store";

import {Device} from "../../models/device";

import { DevicesScannerService } from '../../services/devices-scanner.service';
import * as fromRoot from '../../reducers/app.reducer';

@Component({
  selector: 'app-devices-scanner-page',
  templateUrl: './devices-scanner-page.component.html',
  styleUrls: ['./devices-scanner-page.component.less']
})
export class DevicesScannerPageComponent implements OnInit {

  private devicesScannerService: DevicesScannerService;

  devices$: Observable<Device[]>;

  constructor(store: Store<fromRoot.State>,
              devicesScannerService: DevicesScannerService) {

    this.devicesScannerService = devicesScannerService;

    this.devices$ = store.select(fromRoot.getConnectedDevices);
  }

  ngOnInit() {
    // this.installWorker();
  }

  clickHandler($event) {
    this.devicesScannerService.scanDevice();
  }

  // installWorker(): void {
  //       navigator['serviceWorker'].register('/service-worker.js')
  //           .then(reg => {
  //               alert(reg);
  //           })
  //           .catch(err => {
  //               alert(err);
  //           });
  //   }

}
