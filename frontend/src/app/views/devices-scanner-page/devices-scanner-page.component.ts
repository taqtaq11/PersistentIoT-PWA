import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import {Observable} from "rxjs";

import {Device} from "../../models/device";
import {Hub} from "../../models/hub";

import { DevicesScannerService } from '../../services/devices-scanner.service';

@Component({
  selector: 'app-devices-scanner-page',
  templateUrl: './devices-scanner-page.component.html',
  styleUrls: ['./devices-scanner-page.component.less']
})
export class DevicesScannerPageComponent implements OnInit {
  private devicesScannerService: DevicesScannerService;

  managingHubs$: Observable<Hub[]>;

  constructor(devicesScannerService: DevicesScannerService) {
    this.devicesScannerService = devicesScannerService;
    this.devicesScannerService.selectLocalHub();
    this.managingHubs$ = this.devicesScannerService.getManagingHubs();
  }

  ngOnInit() {
  }

  scanDevicesClickHandler($event) {
    this.devicesScannerService.scanDevice();
  }

  deviceControlClickHandler($event) {
    console.log('control clicked');
  }

  deviceOptionsClickHandler($event) {
    console.log('options clicked');
  }

  disconnectDeviceClickHandler($event) {
    console.log('disconnect clicked');
  }

}
