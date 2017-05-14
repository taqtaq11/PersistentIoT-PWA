import { Device } from "../models/device";

import { Action } from '@ngrx/store';
import { type } from '../util';

export const ActionTypes = {
  ADD_CONNECTED_DEVICE:   type('[LocalHub] Add Connected Devices')
};


export class AddConnectedDeviceAction implements Action {
  type = ActionTypes.ADD_CONNECTED_DEVICE;
  payload: Device;

  constructor(addedDevice: Device) {
    this.payload = addedDevice;
  };
}

export type Actions
  = AddConnectedDeviceAction;
