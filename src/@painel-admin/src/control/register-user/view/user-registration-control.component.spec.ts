import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegistrationControlComponent } from './user-registration-control.component';

describe('UserRegistrationControlComponent', () => {
  let component: UserRegistrationControlComponent;
  let fixture: ComponentFixture<UserRegistrationControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserRegistrationControlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserRegistrationControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
