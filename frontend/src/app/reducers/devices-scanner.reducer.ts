import {Device} from "../models/device";

export interface State {
  ids: string[];
  entities: { [id: string]: Device };
}

const initialState: State = {
  ids: [],
  entities: {},
}
