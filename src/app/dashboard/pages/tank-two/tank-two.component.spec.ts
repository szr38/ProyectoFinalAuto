import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TankTwoComponent } from './tank-two.component';

describe('TankTwoComponent', () => {
  let component: TankTwoComponent;
  let fixture: ComponentFixture<TankTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TankTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TankTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
