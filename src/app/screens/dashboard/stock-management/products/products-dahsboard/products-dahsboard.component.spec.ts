import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDahsboardComponent } from './products-dahsboard.component';

describe('ProductsDahsboardComponent', () => {
  let component: ProductsDahsboardComponent;
  let fixture: ComponentFixture<ProductsDahsboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsDahsboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsDahsboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
