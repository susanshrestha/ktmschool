import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AngularFirestore} from 'angularfire2/firestore';
@Component({
  selector: 'app-addtest',
  templateUrl: './addtest.page.html',
  styleUrls: ['./addtest.page.scss'],
})
export class AddtestPage implements OnInit {
classnumber: any;
subject: any;
objective = false;
subjective = false;
dateofexam: any;
subjects = '';
checker = false;
starttime: any;
endtime: any;
  constructor(public router: Router, public angularfire: AngularFirestore) { }

  ngOnInit() {
    this.classnumber = '';
    this.subject = '';
    this.objective = false;
    this.subjective = false;
    this.dateofexam = '';
  }
async Start() {
  if (this.classnumber === '' || this.subject === '' || this.dateofexam === '' || this.starttime === '' || this.endtime === '') {
    alert('Fields cannot be empty');
  } else {
    if (this.objective === true && this.subjective === false) {
      window.localStorage.setItem('classnumber', this.classnumber);
      window.localStorage.setItem('subject', String(this.subject).toLocaleLowerCase());
      window.localStorage.setItem('dateofexam', this.dateofexam);
      // tslint:disable-next-line: max-line-length
      try {
      await this.angularfire.collection(`Students/class/${this.classnumber}/${this.dateofexam}/exam`).doc('Status').ref.get().then(data => {
          this.subjects = data.data().subjects;
         });
      } catch (error) {
      this.subjects = '';
      }
      this.subjects.split(',').map(subject => {
        if (String(this.subject).toLocaleLowerCase() === String(subject).toLocaleLowerCase()) {
           this.checker = true;
        }
      });
      if (this.checker === false) {
        this.subjects = String(this.subjects + ',' + this.subject);
        console.log(this.subjects);
      }
      this.angularfire.collection(`Students/class/${this.classnumber}/${this.dateofexam}/exam`).doc(`Status`).get().subscribe(data => {
        if (data.exists === true) {
            this.angularfire.collection(`Students/class/${this.classnumber}/${this.dateofexam}/exam`).doc(`Status`).update({
            exam: true,
            subjects: this.subjects,
            [this.subject + 'start']: this.starttime,
            [this.subject + 'end']: this.endtime,
          });
        }
        else {
            this.angularfire.collection(`Students/class/${this.classnumber}/${this.dateofexam}/exam`).doc(`Status`).set({
            exam: true,
            subjects: this.subjects,
            [this.subject + 'start']: this.starttime,
            [this.subject + 'end']: this.endtime,
          });
        }
      });
      this.router.navigate(['addobjectivequestions']);
    }
    if (this.objective === false && this.subjective === true) {
      this.router.navigate(['addobjectivequestions']);
    }
    if (this.objective === true && this.subjective === true) {
      alert('select any 1 checkbox');
    }
  }
}
Edit() {
  if (this.classnumber === '' || this.subject === '' || this.dateofexam === '') {
    alert('Fields cannot be empty');
  } else {
    if (this.objective === true && this.subjective === false) {
      window.localStorage.setItem('classnumber', this.classnumber);
      window.localStorage.setItem('subject', String(this.subject).toLocaleLowerCase());
      window.localStorage.setItem('dateofexam', this.dateofexam);
      this.router.navigate(['editobjectivequestions']);
    }
    if (this.objective === false && this.subjective === true) {
      this.router.navigate(['editobjectivequestions']);
    }
    if ((this.objective === true && this.subjective === true) || (this.objective === false && this.subjective === false) ) {
      alert('select any 1 checkbox');
    }
  }
}
change(e) {
 this.objective = e.target.checked;
}
change1(e) {
  this.subjective = e.target.checked;
}
}
