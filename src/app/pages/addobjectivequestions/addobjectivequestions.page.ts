import { Component, OnInit } from '@angular/core';
import { AngularFirestore} from 'angularfire2/firestore';
import { AlertController} from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addobjectivequestions',
  templateUrl: './addobjectivequestions.page.html',
  styleUrls: ['./addobjectivequestions.page.scss'],
})
export class AddobjectivequestionsPage implements OnInit {
classnumber: any;
dateofexam: any;
subject: any;
mark: any;
question: any;
answer: any;
option1: any;
option2: any;
option3: any;
option4: any;
questionno = 1;
A = false;
B = false;
C = false;
D = false;
  constructor(public angularfire: AngularFirestore, public alertCtrl: AlertController, public router: Router) { }

  ngOnInit() {
    this.dateofexam = window.localStorage.getItem('dateofexam')
    this.classnumber = window.localStorage.getItem('classnumber');
    this.subject = window.localStorage.getItem('subject');
    // tslint:disable-next-line: max-line-length
    this.angularfire.collection(`Students/class/${this.classnumber}/${this.dateofexam}/exam/${this.subject}/Questions`).get().subscribe(data => {
      console.log(data.size);
      this.questionno = data.size + 1;
    });
  }
Submit() {
  if (this.A === true && this.B === false && this.C === false && this.D === false) {
     this.answer = 'option1';
  }
  if (this.A === false && this.B === true && this.C === false && this.D === false) {
    this.answer = 'option2';
 }
  if (this.A === false && this.B === false && this.C === true && this.D === false) {
  this.answer = 'option3';
 }
  if (this.A === false && this.B === false && this.C === false && this.D === true) {
  this.answer = 'option4';
}
  this.angularfire.collection(`Students/class/${this.classnumber}/${this.dateofexam}/exam/${this.subject}/Questions`).doc(`${this.questionno}`).set({
    mark: this.mark,
    question: this.question,
    answer: this.answer,
    option1: this.option1,
    option2: this.option2,
    option3: this.option3,
    option4: this.option4,
    subject: this.subject,
    questionno: this.questionno,
  }).then(() => {
    alert(`Question no.${this.questionno} saved`);
    this.mark = '';
    this.question = '';
    this.answer = '';
    this.option1 = '';
    this.option2 = '';
    this.option3 = '';
    this.option4 = '';
    this.questionno = this.questionno + 1;
  });
}
change1(e) {
  this.A = e.target.checked;
}
change2(e) {
  this.B = e.target.checked;
}
change3(e) {
  this.C = e.target.checked;
}
change4(e) {
  this.D = e.target.checked;
}
finish() {
  window.localStorage.setItem('classnumber', '');
  window.localStorage.setItem('subject', '');
  window.location.href = '/addtest';
}
}
