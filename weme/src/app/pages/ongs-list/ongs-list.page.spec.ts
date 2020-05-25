import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OngsListPage } from './ongs-list.page';

describe('OngsListPage', () => {
  let component: OngsListPage;
  let fixture: ComponentFixture<OngsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OngsListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OngsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
