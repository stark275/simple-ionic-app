import { Component, OnInit } from '@angular/core';
import { StudentMumbereService } from '../student-mumbere.service';
import { Student } from './student.model';

@Component({
  selector: 'app-student-mumbere',
  templateUrl: './student-mumbere.page.html',
  styleUrls: ['./student-mumbere.page.scss'],
})
export class StudentMumberePage implements OnInit {

  students: Student[];
  constructor(private studentService: StudentMumbereService ) { }

  ngOnInit() {
    this.students = this.studentService.getStudents();
  }

}
