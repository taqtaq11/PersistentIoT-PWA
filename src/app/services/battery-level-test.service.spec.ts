/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BatteryLevelTestService } from './battery-level-test.service';

describe('BatteryLevelTestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BatteryLevelTestService]
    });
  });

  it('should ...', inject([BatteryLevelTestService], (service: BatteryLevelTestService) => {
    expect(service).toBeTruthy();
  }));
});
