import { Component, OnInit } from '@angular/core';
import { AngularFirestore} from 'angularfire2/firestore';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editobjectiveindividual',
  templateUrl: './editobjectiveindividual.page.html',
  styleUrls: ['./editobjectiveindividual.page.scss'],
})
export class EditobjectiveindividualPage implements OnInit {
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
  questionno: any;
  A = false;
  B = false;
  C = false;
  D = false;
  constructor(public angularfire: AngularFirestore, public router: Router) { }

  ngOnInit() {
   this.classnumber = window.localStorage.getItem('classnumber');
   this.subject = window.localStorage.getItem('subject');
   this.dateofexam = window.localStorage.getItem('dateofexam');
   this.questionno = window.localStorage.getItem('questionno')
   this.angularfire.collection(`Students/class/${this.classnumber}/${this.dateofexam}/${this.subject}/exam/Questions`).
   doc(`${this.questionno}`).get().subscribe(data => {
     this.mark = data.data().mark;
     this.question = data.data().question;
     this.option1 = data.data().option1;
     this.option2 = data.data().option2;
     this.option3 = data.data().option3;
     this.option4 = data.data().option4;
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
    this.angularfire.collection(`Students/class/${this.classnumber}/${this.dateofexam}/${this.subject}/exam/Questions`).doc(`${this.questionno}`).update({
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
    window.localStorage.setItem('questionno', '');
    window.location.href = '/editobjectivequestions';
  }
}
