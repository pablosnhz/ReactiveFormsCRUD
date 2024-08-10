import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridUseComponent } from './ag-grid-use.component';

describe('AgGridUseComponent', () => {
  let component: AgGridUseComponent;
  let fixture: ComponentFixture<AgGridUseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgGridUseComponent]
    });
    fixture = TestBed.createComponent(AgGridUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
