import {Observable} from "rxjs";
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';

import {Hub, HubState} from "../../models/hub";
import { StorageManager } from './storage-manager.service';

import * as Util from "../../util";

@Injectable()
export class HubStorageManager extends StorageManager {
  private readonly localHubIdPropertyKey = "local_hub_id";
  private readonly localHubNamePropertyKey = "local_hub_name";

  constructor(ls: LocalStorageService) {
    super(ls);
  }

  public getLocalHub() {
    let localHubId = this.ls.get(this.localHubIdPropertyKey) as string;
    let localHub: Hub;

    if (localHubId) {
      let localHubName = this.ls.get(this.localHubNamePropertyKey) as string;

      localHub = new Hub(localHubId, localHubName,
        window.navigator.platform, HubState.ENABLED, true, []);
    }
    else {
      localHub = new Hub(this.generateHubId(), "Current Hub",
        window.navigator.platform, HubState.ENABLED, true, []);

      this.setLocalHub(localHub);
    }

    return Observable.of(localHub);
  }

  public setLocalHub(hub: Hub) {
    this.ls.set(this.localHubIdPropertyKey, hub.id);
    this.ls.set(this.localHubNamePropertyKey, hub.name);
  }

  private generateHubId() {
    return Util.generateId();
  }
}
