import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditobjectivequestionsPage } from './editobjectivequestions.page';

describe('EditobjectivequestionsPage', () => {
  let component: EditobjectivequestionsPage;
  let fixture: ComponentFixture<EditobjectivequestionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditobjectivequestionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditobjectivequestionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
