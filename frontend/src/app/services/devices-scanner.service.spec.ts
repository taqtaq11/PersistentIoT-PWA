/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DevicesScannerService } from './devices-scanner.service';

describe('DevicesScannerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DevicesScannerService]
    });
  });

  it('should ...', inject([DevicesScannerService], (service: DevicesScannerService) => {
    expect(service).toBeTruthy();
  }));
});
