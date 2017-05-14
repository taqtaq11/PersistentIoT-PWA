import {Hub, HubState} from "../models/hub";

import * as localHub from '../actions/local-hub.action';

export interface State {
  currentHubInfo: Hub;
}

const initialState: State = {
  currentHubInfo: {
    id: "",
    name: "",
    operatingSystem: "",
    state: HubState.ENABLED,
    connectedDevices: []
  }
};

export function reducer(state: State = initialState, action: localHub.Actions): State {
  switch (action.type) {
    case localHub.ActionTypes.ADD_CONNECTED_DEVICE:
      action.payload;

      return {
        currentHubInfo: {
          id: "",
          name: "",
          operatingSystem: "",
          state: HubState.ENABLED,
          connectedDevices: []
        }
      };

    default:
      return state;
  }
}

export const getCurrentHubInfo = (state: State) => state.currentHubInfo;
