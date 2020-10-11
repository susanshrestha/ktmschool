import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AfterloginPage } from './afterlogin.page';

describe('AfterloginPage', () => {
  let component: AfterloginPage;
  let fixture: ComponentFixture<AfterloginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterloginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AfterloginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
