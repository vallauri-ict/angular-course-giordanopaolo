import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Course Giordano Paolo,';

  studentList = [
    { name: "Jolyne Kujo", hobby: "Volley", gender: "F", isPro:false },
    { name: "Jotaro Kujo", hobby: "Poker", gender: "M", isPro:false },
    { name: "Joseph Joestar", hobby: "Football", gender: "M", isPro:false },
    { name: "Foo Fighter", hobby: "Volley", gender: "F", isPro:false },
    { name: "Bruno Bucciarati", hobby: "Basket", gender: "M", isPro:false },
    { name: "Giorno Giovanna", hobby: "Volley", gender: "M", isPro:false },
    { name: "Higashikata Josuke", hobby: "Football", gender: "M", isPro:false },
    { name: "Jhonatan Joestar", hobby: "Basket", gender: "M", isPro:false }
  ]
}
