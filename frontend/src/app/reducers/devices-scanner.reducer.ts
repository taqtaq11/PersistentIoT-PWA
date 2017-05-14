import {Device} from "../models/device";

import * as devicesScanner from '../actions/devices-scanner.action';

export interface State {
  directlyConnectedDevices: Device[];
}

const initialState: State = {
  directlyConnectedDevices: []
}

export function reducer(state: State = initialState, action: devicesScanner.Actions): State {
  switch (action.type) {
    case devicesScanner.ActionTypes.DEVICES_SCAN_COMPLETE: {
      let filteredConnectedDevices =
        state.directlyConnectedDevices.filter((device) => {
          return device.id !== action.payload.id;
        });

      if (filteredConnectedDevices.length > 0) {
        return state;
      }

      return {
        directlyConnectedDevices: state.directlyConnectedDevices.concat(action.payload)
      };
    }

    default:
      return state;
  }
}

export const getConnectedDevices = (state: State) => state.directlyConnectedDevices;
