import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCategorieComponent } from './dashboard-categorie.component';

describe('DashboardCategorieComponent', () => {
  let component: DashboardCategorieComponent;
  let fixture: ComponentFixture<DashboardCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardCategorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
