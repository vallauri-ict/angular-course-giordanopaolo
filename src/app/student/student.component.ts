import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentList = [
    { name: "Jolyne Kujo", hobby: "Non soccorrere i feriti della strada", gender: "F" },
    { name: "Jotaro Kujo", hobby: "Poker", gender: "M" },
    { name: "Joseph Joestar", hobby: "Concentrarsi", gender: "M" },
    { name: "Foo Fighter", hobby: "Collezionare dischi", gender: "F" },
    { name: "Bruno Bucciarati", hobby: "Aiutare il prossimo", gender: "M" },
    { name: "Giorno Giovanna", hobby: "Giardinaggio", gender: "M" },
    { name: "Higashikata Josuke", hobby: "Pettinarsi", gender: "M" },
    { name: "Jhonatan Joestar", hobby: "Aiutare il prossimo", gender: "F" }
  ]

  student: any;
  constructor() {
    this.student = this.studentList[this.randomStudent()];
  }

  private randomStudent(){
    return Math.floor(Math.random() * this.studentList.length);
  }

  ngOnInit(): void {
  }

  onStudentClick(){
    this.student = this.studentList[this.randomStudent()];
  }
}
