import {Device} from "../models/device";
import {Hub} from "../models/hub";

import * as devicesScanner from '../actions/devices-scanner.action';

export interface State {
  managingHubs: Hub[]
}

const initialState: State = {
  managingHubs: []
}

export function reducer(state: State = initialState, action: devicesScanner.Actions): State {
  switch (action.type) {
    case devicesScanner.ActionTypes.LOCAL_HUB_SELECTED: {
      return {
        managingHubs: [(action as devicesScanner.LocalHubSelectedAction).payload]
                      .concat(state.managingHubs)
      };
    }

    case devicesScanner.ActionTypes.DEVICES_SCAN_COMPLETE: {
      let newState = Object.assign({}, state);
      newState.managingHubs[0] =
        newState.managingHubs[0]
        .addConnectedDevice((action as devicesScanner.DevicesScanCompleteAction).payload);
      return newState;
    }

    default:
      return state;
  }
}

export const getManagingHubs = (state: State) => state.managingHubs;
