import {Device} from "./device";

export enum HubState {
  DISABLED = 0,
  ENABLED = 1
}

export interface Hub {
  id: string;
  name: string;
  operatingSystem: string;
  state: HubState;
  connectedDevices: Device[];
}
