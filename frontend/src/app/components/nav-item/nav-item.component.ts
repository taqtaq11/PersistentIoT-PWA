import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.less']
})
export class NavItemComponent implements OnInit {

  @Input() link: string;
  @Input() icon: string;
  @Input() name: string;
  @Output() onItemClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
