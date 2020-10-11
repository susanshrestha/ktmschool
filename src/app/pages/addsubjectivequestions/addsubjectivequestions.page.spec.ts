import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddsubjectivequestionsPage } from './addsubjectivequestions.page';

describe('AddsubjectivequestionsPage', () => {
  let component: AddsubjectivequestionsPage;
  let fixture: ComponentFixture<AddsubjectivequestionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsubjectivequestionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddsubjectivequestionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
