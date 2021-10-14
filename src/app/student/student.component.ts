import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentList = [
    { name: "Jolyne Kujo", hobby: "Non soccorrere i feriti della strada", gender: "F", isPro:true },
    { name: "Jotaro Kujo", hobby: "Poker", gender: "M", isPro:true },
    { name: "Joseph Joestar", hobby: "Concentrarsi", gender: "M", isPro:true },
    { name: "Foo Fighter", hobby: "Collezionare dischi", gender: "F", isPro:false },
    { name: "Bruno Bucciarati", hobby: "Aiutare il prossimo", gender: "M", isPro:false },
    { name: "Giorno Giovanna", hobby: "Giardinaggio", gender: "M", isPro:true },
    { name: "Higashikata Josuke", hobby: "Pettinarsi", gender: "M", isPro:true },
    { name: "Jhonatan Joestar", hobby: "Aiutare il prossimo", gender: "M", isPro:true }
  ]

student: any;
  constructor() {
    this.student = this.studentList[this.randomNumber(this.studentList.length)];
  }

  private randomNumber(max: number){
    return Math.floor(Math.random() * max);
  }

  ngOnInit(): void {
  }

  onStudentClick(){
    this.student = this.studentList[this.randomNumber(this.studentList.length)];
  }
}
