import { Component, OnInit } from '@angular/core';
import { BatteryLevelTestService } from '../../services/battery-level-test.service';

@Component({
  selector: 'app-devices-scanner-page',
  templateUrl: './devices-scanner-page.component.html',
  styleUrls: ['./devices-scanner-page.component.less']
})
export class DevicesScannerPageComponent implements OnInit {

  private batteryLevelTestService: BatteryLevelTestService;

  constructor(batteryLevelTestService: BatteryLevelTestService) {
    this.batteryLevelTestService = batteryLevelTestService;
  }

  ngOnInit() {

  }

  clickHandler($event) {
    this.batteryLevelTestService
      .getDevice();
  }

}
