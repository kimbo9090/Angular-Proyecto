import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddViajeComponent } from './add-viaje.component';

describe('AddViajeComponent', () => {
  let component: AddViajeComponent;
  let fixture: ComponentFixture<AddViajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddViajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddViajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
