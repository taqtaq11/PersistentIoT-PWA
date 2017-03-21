import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.less']
})
export class SidenavComponent implements OnInit {

  @Input() opened: boolean;
  @Output() onClosedInternally = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClosed() {
    if (this.opened) {
      this.onClosedInternally.emit();
    }
  }
}
