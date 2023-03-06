import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../Model/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private myhttp : HttpClient) { }
  StudentUrl : string ='https://localhost:7253/api/Students';
  listStudents : Student[] = [];

  studentData : Student = new Student();


  saveStudent(){
    return this.myhttp.post(this.StudentUrl,this.studentData);
  }

  updateStudent(){
    return this.myhttp.put(`${this.StudentUrl}/${this.studentData.studentID}`,this.studentData)
  }

  getStudents(): Observable<Student[]>
  {
    return this.myhttp.get<Student[]>(this.StudentUrl);
  }

  deleteStudent(id : number){
    return this.myhttp.delete(`${this.StudentUrl}/${id}`);
  }
}


