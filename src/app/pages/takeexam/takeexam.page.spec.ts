import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TakeexamPage } from './takeexam.page';

describe('TakeexamPage', () => {
  let component: TakeexamPage;
  let fixture: ComponentFixture<TakeexamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeexamPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TakeexamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
