import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
@Component({
  selector: 'app-afterlogin',
  templateUrl: './afterlogin.page.html',
  styleUrls: ['./afterlogin.page.scss'],
})
export class AfterloginPage implements OnInit {
  studentname: any;
  classnumber: any;
  subjects = [];
  select: any;
  date: any;
  constructor(public afstore: AngularFirestore) { }

  ngOnInit() {
   this.studentname = window.localStorage.getItem('studentname');
   this.classnumber = window.localStorage.getItem('classnumber');
  }
  async takeExam() {
  let day = String(new Date().getUTCDate());
  if ( day.length === 1) {
    day = String('0' + day);
  }
  this.date = String(new Date().getUTCFullYear() + '-' + Number(new Date().getMonth() + 1) + '-' + day);
  console.log(this.date);
  try {
    await this.afstore.collection(`Students/class/${this.classnumber}/${this.date}/exam`).ref.doc('Status').get().then(async data => {
      console.log(data.data().exam);
      if (data.data().exam === true) {
          alert('Be ready for exam');
          window.localStorage.setItem('date', this.date);
          await this.afstore.collection(`Students/class/${this.classnumber}/${this.date}/exam`).ref.doc('Status').get().then(data => {
            data.data().subjects.split(',').map(subject => {
              this.subjects.push(subject);
            });
          });
          document.getElementById('body1').style.display = 'none';
          document.getElementById('body2').style.display = 'flex';
          console.log(this.subjects);
        }
        else {
          alert('No Exam today');
        }
      });
  } catch (error) {
    alert('No exam error/Internet problem');
  }
}
async Continue() {
  let startdatehour = String(new Date().getHours());
  let startdateminute = String(new Date().getMinutes());
  let serverstarttimehrs;
  let serverendtimehrs;
  let serverstarttimemin;
  let serverendtimemin;
  const startsubject = this.select + 'start';
  const endsubject = this.select + 'end';
  await this.afstore.collection(`Students/class/${this.classnumber}/${this.date}/exam`).ref.doc('Status').get().then(data => {
    Object.keys(data.data()).forEach(key => {
      if (startsubject === key) {
        serverstarttimehrs = data.data()[key].split(':')[0];
        serverstarttimemin = data.data()[key].split(':')[1];
      }
      if (endsubject === key) {
        serverendtimehrs = data.data()[key].split(':')[0];
        serverendtimemin = data.data()[key].split(':')[1];
      }
    });
  });
  if (startdatehour >= serverstarttimehrs && startdatehour <= serverendtimehrs && startdateminute >= serverstarttimemin) {
    window.localStorage.setItem('subject', this.select);
    window.location.href = '/takeexam';
  } else {
    const timeremaining = Number(serverstarttimemin) - Number(startdateminute);
    alert(`School:- ${timeremaining} minutes remaining for exam`);
  }
}
}
