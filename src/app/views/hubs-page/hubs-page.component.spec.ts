/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HubsPageComponent } from './hubs-page.component';

describe('HubsPageComponent', () => {
  let component: HubsPageComponent;
  let fixture: ComponentFixture<HubsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HubsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HubsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
