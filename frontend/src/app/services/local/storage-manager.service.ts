import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class StorageManager {
  constructor(protected ls: LocalStorageService) {
  }

  public set(key: string, value: any) {
    this.ls.set(key, value);
  }

  public get(key: string) {
    return this.ls.get(key);
  }
}
