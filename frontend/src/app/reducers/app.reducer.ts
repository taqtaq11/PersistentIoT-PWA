import { createSelector } from 'reselect';
import { environment } from '../../environments/environment';
import { combineReducers } from '@ngrx/store';

import * as fromRouter from '@ngrx/router-store';
import * as fromLayout from './layout.reducer';

export interface State {
  router: fromRouter.RouterState;
  layout: fromLayout.State;
}

const reducers = {
  router: fromRouter.routerReducer,
  layout: fromLayout.reducer
};

export const reducer = combineReducers(reducers);

export const getLayoutState = (state: State) => state.layout;
export const getShowSidenav = createSelector(getLayoutState, fromLayout.getShowSidenav);
