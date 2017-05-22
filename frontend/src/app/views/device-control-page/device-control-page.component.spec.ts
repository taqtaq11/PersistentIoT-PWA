import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceControlPageComponent } from './device-control-page.component';

describe('DeviceControlPageComponent', () => {
  let component: DeviceControlPageComponent;
  let fixture: ComponentFixture<DeviceControlPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceControlPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceControlPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
