import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopGridProductComponent } from './shop-grid-product.component';

describe('ShopGridProductComponent', () => {
  let component: ShopGridProductComponent;
  let fixture: ComponentFixture<ShopGridProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopGridProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopGridProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
