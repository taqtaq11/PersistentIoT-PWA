import { Action } from '@ngrx/store';
import { type } from '../util';
import {Device} from "../models/device";

export const ActionTypes = {
  SCAN_DEVICES: type('[DevicesScanner] Scan Devices'),
  DEVICES_SCAN_COMPLETE: type('[DevicesScanner] Devices Scan Complete')
};

export class ScanDevicesAction implements Action {
  type = ActionTypes.SCAN_DEVICES;
}

export class DevicesScanCompleteAction implements Action {
  type = ActionTypes.DEVICES_SCAN_COMPLETE;

  constructor(public payload: Device) { }
}

export type Actions
  = ScanDevicesAction
  | DevicesScanCompleteAction;
