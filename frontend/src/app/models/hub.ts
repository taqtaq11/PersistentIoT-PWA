import {Device} from "./device";

export enum HubState {
  DISABLED = 0,
  ENABLED = 1
}

export class Hub {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly operatingSystem: string,
    public readonly state: HubState,
    public readonly isLocal: boolean,
    public readonly connectedDevices: Device[])
  {

  }

  addConnectedDevice(newDevice: Device): Hub {
    let filteredConnectedDevices =
      this.connectedDevices.filter((device) => {
        return device.id !== newDevice.id;
      });

    let newState = Object.assign({}, this);

    if (filteredConnectedDevices.length === 0) {
      newState.connectedDevices.push(newDevice);
    }

    return newState;
  }
}
