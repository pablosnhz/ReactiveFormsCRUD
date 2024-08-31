import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsUsersTailwindComponent } from './forms-users-tailwind.component';

describe('FormsUsersTailwindComponent', () => {
  let component: FormsUsersTailwindComponent;
  let fixture: ComponentFixture<FormsUsersTailwindComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsUsersTailwindComponent]
    });
    fixture = TestBed.createComponent(FormsUsersTailwindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
