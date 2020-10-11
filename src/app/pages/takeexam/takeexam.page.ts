import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
@Component({
  selector: 'app-takeexam',
  templateUrl: './takeexam.page.html',
  styleUrls: ['./takeexam.page.scss'],
})
export class TakeexamPage implements OnInit {
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
  subjects = '';
  constructor(public angularfire: AngularFirestore) { }

  ngOnInit() {
    this.dateofexam = window.localStorage.getItem('date');
    this.classnumber = window.localStorage.getItem('classnumber');
    this.subject = window.localStorage.getItem('subject');
    console.log(this.dateofexam + this.classnumber + this.subject);
    // tslint:disable-next-line: max-line-length
    this.angularfire.collection(`Students/class/${this.classnumber}/${this.dateofexam}/exam/${this.subject}/Questions`).doc('1').get().subscribe(data => {
      console.log(data.data());
      this.mark = data.data().mark;
      this.answer = data.data().answer;
      this.option1  = data.data().option1;
      this.option2  = data.data().option2;
      this.option3  = data.data().option3;
      this.option4  = data.data().option4;
      this.question = data.data().question;
    });
  }

}
