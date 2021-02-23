import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrangChildComponent } from './grang-child.component';

describe('GrangChildComponent', () => {
  let component: GrangChildComponent;
  let fixture: ComponentFixture<GrangChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrangChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrangChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
