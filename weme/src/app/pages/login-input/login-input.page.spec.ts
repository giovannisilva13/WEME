import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginInputPage } from './login-input.page';

describe('LoginInputPage', () => {
  let component: LoginInputPage;
  let fixture: ComponentFixture<LoginInputPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginInputPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginInputPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
