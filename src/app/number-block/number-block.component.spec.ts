import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberBlockComponent } from './number-block.component';

describe('NumberBlockComponent', () => {
  let component: NumberBlockComponent;
  let fixture: ComponentFixture<NumberBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
