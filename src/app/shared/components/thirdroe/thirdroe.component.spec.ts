import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdroeComponent } from './thirdroe.component';

describe('ThirdroeComponent', () => {
  let component: ThirdroeComponent;
  let fixture: ComponentFixture<ThirdroeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdroeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
