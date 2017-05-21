import * as layout from '../actions/layout.action';


export interface State {
  showSidenav: boolean;
}

const initialState: State = {
  showSidenav: false,
};

export function reducer(state: State = initialState, action: layout.Actions): State {
  switch (action.type) {
    case layout.ActionTypes.CLOSE_SIDENAV:
      return {
        showSidenav: false
      };

    case layout.ActionTypes.OPEN_SIDENAV:
      return {
        showSidenav: true
      };

    case layout.ActionTypes.TOGGLE_SIDENAV:
      return {
        showSidenav: !state.showSidenav
      };

    default:
      return state;
  }
}

export const getShowSidenav = (state: State) => state.showSidenav;
