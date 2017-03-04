import { Observable } from 'rxjs';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../reducers/app.reducer';
import * as layout from '../../actions/layout.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  showSidenav$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
    var a = store.select((state) => state.layout);
    a.subscribe(function(){});
    this.showSidenav$ = this.store.select(fromRoot.getShowSidenav);
  }

  open() {
    this.store.dispatch(new layout.OpenSidenavAction());
  }
}
