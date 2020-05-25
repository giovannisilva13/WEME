import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OngInfoPage } from './ong-info.page';

describe('OngInfoPage', () => {
  let component: OngInfoPage;
  let fixture: ComponentFixture<OngInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OngInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OngInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
