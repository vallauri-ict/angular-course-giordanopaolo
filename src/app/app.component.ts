import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Course Giordano Paolo,';

  studentList = [
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
  
  studentGender: string="F";
  studentName: string = "";
  studentHobbys:string="";

  hobbies =["Poker", "volley", "dormire", "basket"]
  onCreateStudent() {
    let newStudent = { name: this.studentName, hobby: this.studentHobbys, gender: this.studentGender, isPro: false }
    this.studentList.push(newStudent);
    this.studentName = "";
    this.txtName.nativeElement.focus();
  }
}
