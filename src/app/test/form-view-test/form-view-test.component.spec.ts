import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormViewTestComponent } from './form-view-test.component';

describe('FormViewTestComponent', () => {
  let component: FormViewTestComponent;
  let fixture: ComponentFixture<FormViewTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormViewTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormViewTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
