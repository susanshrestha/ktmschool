import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddtestPage } from './addtest.page';

describe('AddtestPage', () => {
  let component: AddtestPage;
  let fixture: ComponentFixture<AddtestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddtestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
