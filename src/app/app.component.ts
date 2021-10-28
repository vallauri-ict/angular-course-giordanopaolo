import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, ElementRef, ViewChild } from '@angular/core';
import * as internal from 'stream';
import { StudentComponent } from './student/student.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Course Giordano Paolo,';

  constructor(){
  }
  studentRepository = [
    { name: "Jolyne Kujo", hobby: "Wire", gender: "F", isPro: false },
    { name: "Jotaro Kujo", hobby: "Poker", gender: "M", isPro: true },
    { name: "Joseph Joestar", hobby: "Football", gender: "M", isPro: false },
    { name: "Foo Fighter", hobby: "Volley", gender: "F", isPro: false },
    { name: "Bruno Bucciarati", hobby: "Basket", gender: "M", isPro: false },
    { name: "Giorno Giovanna", hobby: "Volley", gender: "M", isPro: false },
    { name: "Higashikata Josuke", hobby: "Football", gender: "M", isPro: false },
    { name: "Jhonatan Joestar", hobby: "Basket", gender: "M", isPro: false }
  ]
  @ViewChild("txtName") txtName !: ElementRef;
  studentList: any=[];
  studentGender: string="F";
  studentName: string = "";
  studentHobbys:string="";

  hobbies =["Poker", "volley", "dormire", "basket"]
  onCreateStudent() {
    let newStudent : any = { name: this.studentName, hobby: this.studentHobbys, gender: this.studentGender, isPro: false }
    this.studentList.push(newStudent);
    this.studentName = "";
    newStudent.index = this.studentList.length;
    this.txtName.nativeElement.focus();
  }
  onDeleteStudent(index : any){
    this.studentList.splice(index, 1)
  }
  studentDeleteEvent(student:any){
    this.studentList.splice(this.studentList.indexOf(student), 1)
    alert("Da cancellare:" + student.name)
  }
}
