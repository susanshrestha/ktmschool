import { Component, OnInit } from '@angular/core';
import { AngularFirestore} from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { AngularFireAuth} from 'angularfire2/auth';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
classnumber: any;
studentname: any;
rollno: any;
section: any;
username: any;
password: any;
  constructor(public afauth: AngularFireAuth, public angularfire: AngularFirestore, public router: Router) { }

  ngOnInit() {
  }
login() {
  this.angularfire.collection(`Students/class/${this.classnumber}/Students/${this.section}`).doc(`${this.rollno}`).get().subscribe(data => {
    if (this.username === data.data().studentuid && this.password === data.data().studentuid) {
      alert('login successful');
      window.localStorage.setItem('studentname', data.data().studentname);
      window.localStorage.setItem('classnumber', this.classnumber);
      window.localStorage.setItem('section', this.section);
      window.localStorage.setItem('rollno', this.rollno);
      window.location.href = '/afterlogin';
    } else {
      alert('Check your internet connection/Invalid Username or Password');
    }
  });
}
register() {
  this.angularfire.collection(`Students/class/${this.classnumber}/Students/${this.section}`).doc(`${this.rollno}`).set({
    classnumber: this.classnumber,
    studentname: this.studentname,
    rollno: this.rollno,
    section: this.section,
    password: this.rollno,
    studentuid: String('2020G' + this.rollno + this.section )
  }).then(() => {
    alert('Registered Successfully');
  });
}
}
