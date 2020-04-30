import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductpgComponent } from './productpg.component';

describe('ProductpgComponent', () => {
  let component: ProductpgComponent;
  let fixture: ComponentFixture<ProductpgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductpgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
