import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NsInputComponent } from './ns-input.component';

describe('NsInputComponent', () => {
  let component: NsInputComponent;
  let fixture: ComponentFixture<NsInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NsInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
