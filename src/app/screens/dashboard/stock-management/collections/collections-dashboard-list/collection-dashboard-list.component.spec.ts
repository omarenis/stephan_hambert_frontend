import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionDashboardList } from './collection-dashboard-list.component';

describe('CollectrionsDashboardListComponent', () => {
  let component: CollectionDashboardList;
  let fixture: ComponentFixture<CollectionDashboardList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionDashboardList ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectionDashboardList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
