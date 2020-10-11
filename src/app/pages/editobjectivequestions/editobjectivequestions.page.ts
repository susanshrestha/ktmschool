import { Component, OnInit } from '@angular/core';
import { AngularFirestore} from 'angularfire2/firestore';
import { AlertController} from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editobjectivequestions',
  templateUrl: './editobjectivequestions.page.html',
  styleUrls: ['./editobjectivequestions.page.scss'],
})
export class EditobjectivequestionsPage implements OnInit {
  classnumber: any;
  dateofexam: any;
  subject: any;
  questions = [];
  answers = [];
  As = [];
  Bs = [];
  Cs = [];
  Ds = [];
  constructor(public angularfire: AngularFirestore, public alertCtrl: AlertController, public router: Router) { }

  ngOnInit() {
    this.dateofexam = window.localStorage.getItem('dateofexam')
    this.classnumber = window.localStorage.getItem('classnumber');
    this.subject = window.localStorage.getItem('subject');
    // tslint:disable-next-line: max-line-length
    this.angularfire.collection(`Students/class/${this.classnumber}/${this.dateofexam}/${this.subject}/exam/Questions`).ref.orderBy('subject', 'asc').onSnapshot(snapshot => {
      snapshot.docs.map(doc => {
        console.log(doc.data());
        this.questions.push(doc.data().question);
        this.answers.push(doc.data().answer);
        this.As.push(doc.data().option1);
        this.Bs.push(doc.data().option2);
        this.Cs.push(doc.data().option3);
        this.Ds.push(doc.data().option4);
        this.answers.push(doc.data().answer);
      });
    });
  }
Edit(i) {
  window.localStorage.setItem('questionno', i);
  window.location.href = '/editobjectiveindividual';
}
}
