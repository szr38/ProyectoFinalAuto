import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TankOneComponent } from './tank-one.component';

describe('TankOneComponent', () => {
  let component: TankOneComponent;
  let fixture: ComponentFixture<TankOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TankOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TankOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
