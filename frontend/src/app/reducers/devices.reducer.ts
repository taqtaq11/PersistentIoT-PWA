import {Device} from "../models/device";

export interface State {
  ids: string[];
  entities: { [id: string]: Device };
  selectedBookId: string | null;
}

const initialState: State = {
  ids: [],
  entities: {},
  selectedBookId: null,
}

export function reducer(state = initialState, action: any): State {
  return initialState;
}
