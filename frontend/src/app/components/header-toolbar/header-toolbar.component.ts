import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.less']
})
export class HeaderToolbarComponent implements OnInit {

  @Input() title: Observable<String>;
  @Output() onMenuButtonClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
}
