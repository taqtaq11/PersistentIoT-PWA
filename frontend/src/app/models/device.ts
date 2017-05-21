import {DeviceController} from "./deviceController";

export class Device {
  id: string;
  name: string;
  deviceTypeId: string;
  controller: DeviceController;

  private originalBluetoothDevice: BluetoothDevice;

  constructor(id: string, name: string, originalBluetoothDevice: BluetoothDevice) {
    this.id = id;
    this.name = name;
    this.originalBluetoothDevice = originalBluetoothDevice;
  }

  static fromBluetoothDevice(bluetoothDevice: BluetoothDevice) {
    return new Device(bluetoothDevice.id, bluetoothDevice.name, bluetoothDevice);
  }
}
