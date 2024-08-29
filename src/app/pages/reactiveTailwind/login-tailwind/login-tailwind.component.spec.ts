import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTailwindComponent } from './login-tailwind.component';

describe('LoginTailwindComponent', () => {
  let component: LoginTailwindComponent;
  let fixture: ComponentFixture<LoginTailwindComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginTailwindComponent]
    });
    fixture = TestBed.createComponent(LoginTailwindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
