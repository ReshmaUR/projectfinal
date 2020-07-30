import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminJoblistComponent } from './admin-joblist.component';

describe('AdminJoblistComponent', () => {
  let component: AdminJoblistComponent;
  let fixture: ComponentFixture<AdminJoblistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminJoblistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminJoblistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
