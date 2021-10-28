import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @Input()student:any;

  constructor() {
    //this.student = this.studentList[this.randomNumber(this.studentList.length)];
  }

  @Output() studentDeleteEvent = new EventEmitter<any>()
  private randomNumber(max: number){
    return Math.floor(Math.random() * max);
  }

  ngOnInit(): void {
  }

  onDeleteStudentClick(){
    this.studentDeleteEvent.emit(this.student);
  }

  onStudentClick(){
    //this.student = this.studentList[this.randomNumber(this.studentList.length)];
    this.student.isPro=!this.student.isPro;
  }
}
