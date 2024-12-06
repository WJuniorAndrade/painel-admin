import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserRegistrationControlContainer } from './user-registration-container';

describe('UserRegistrationControlContainer', () => {
  let component: UserRegistrationControlContainer;
  let fixture: ComponentFixture<UserRegistrationControlContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserRegistrationControlContainer]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserRegistrationControlContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
