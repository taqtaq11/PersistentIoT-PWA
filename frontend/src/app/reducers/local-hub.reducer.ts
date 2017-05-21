import {Hub, HubState} from "../models/hub";

import * as localHub from '../actions/local-hub.action';

export interface State {
  currentHubInfo: Hub;
}

const initialState: State = null;

export function reducer(state: State = initialState, action: localHub.Actions): State {
  switch (action.type) {
    case localHub.ActionTypes.ADD_CONNECTED_DEVICE:
      action.payload;

      return state;

    default:
      return state;
  }
}

export const getCurrentHubInfo = (state: State) => state.currentHubInfo;
