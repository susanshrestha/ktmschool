import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddobjectivequestionsPage } from './addobjectivequestions.page';

describe('AddobjectivequestionsPage', () => {
  let component: AddobjectivequestionsPage;
  let fixture: ComponentFixture<AddobjectivequestionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddobjectivequestionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddobjectivequestionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
