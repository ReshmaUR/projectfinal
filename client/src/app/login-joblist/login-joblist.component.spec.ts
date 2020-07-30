import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginJoblistComponent } from './login-joblist.component';

describe('LoginJoblistComponent', () => {
  let component: LoginJoblistComponent;
  let fixture: ComponentFixture<LoginJoblistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginJoblistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginJoblistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
