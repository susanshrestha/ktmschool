import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditobjectiveindividualPage } from './editobjectiveindividual.page';

describe('EditobjectiveindividualPage', () => {
  let component: EditobjectiveindividualPage;
  let fixture: ComponentFixture<EditobjectiveindividualPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditobjectiveindividualPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditobjectiveindividualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
