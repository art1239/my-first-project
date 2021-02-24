import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServercComponent } from './serverc.component';

describe('ServercComponent', () => {
  let component: ServercComponent;
  let fixture: ComponentFixture<ServercComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServercComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServercComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
