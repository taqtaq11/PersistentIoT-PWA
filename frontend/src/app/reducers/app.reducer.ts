import { createSelector } from 'reselect';
import { environment } from '../../environments/environment';
import { combineReducers } from '@ngrx/store';

import * as fromRouter from '@ngrx/router-store';
import * as fromLayout from './layout.reducer';
import * as fromDevicesScanner from './devices-scanner.reducer';

export interface State {
  router: fromRouter.RouterState;
  layout: fromLayout.State;
  devicesScanner: fromDevicesScanner.State;
}

const reducers = {
  router: fromRouter.routerReducer,
  layout: fromLayout.reducer,
  devicesScanner: fromDevicesScanner.reducer
};

const mainReducer = combineReducers(reducers);

export function reducer(state: any, action: any) {
    return mainReducer(state, action);
}

export const getLayoutState = (state: State) => state.layout;
export const getDevicesScannerState = (state: State) => state.devicesScanner;

export const getShowSidenav = createSelector(getLayoutState, fromLayout.getShowSidenav);
export const getManagingHubs = createSelector(getDevicesScannerState, fromDevicesScanner.getManagingHubs);
