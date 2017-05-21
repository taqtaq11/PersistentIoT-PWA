import { Action } from '@ngrx/store';
import { type } from '../util';
import {Hub} from "../models/hub";
import {Device} from "../models/device";

export const ActionTypes = {
  SELECT_LOCAL_HUB: type('[DevicesScanner] Select Local Hub'),
  LOCAL_HUB_SELECTED: type('[DevicesScanner] Local Hub Selected'),
  SCAN_DEVICES: type('[DevicesScanner] Scan Devices'),
  DEVICES_SCAN_COMPLETE: type('[DevicesScanner] Devices Scan Complete')
};

export class SelectLocalHubAction implements Action {
  type = ActionTypes.SELECT_LOCAL_HUB;

  constructor() { }
}

export class LocalHubSelectedAction implements Action {
  type = ActionTypes.LOCAL_HUB_SELECTED;

  constructor(public payload: Hub) { }
}

export class ScanDevicesAction implements Action {
  type = ActionTypes.SCAN_DEVICES;

  constructor() { }
}

export class DevicesScanCompleteAction implements Action {
  type = ActionTypes.DEVICES_SCAN_COMPLETE;

  constructor(public payload: Device) { }
}

export type Actions
  = ScanDevicesAction
  | DevicesScanCompleteAction
  | SelectLocalHubAction
  | LocalHubSelectedAction;
