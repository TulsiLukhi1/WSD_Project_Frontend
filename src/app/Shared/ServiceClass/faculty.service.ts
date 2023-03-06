import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Faculty } from '../Model/faculty.model';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  constructor(private myhttp : HttpClient) {
    
  }
  facultyUrl : string ='https://localhost:7253/api/Faculties';
  listFaculties: Faculty[] = [];

  facultyData : Faculty = new Faculty();
  //to post data of faculty


  //to save data 

  saveFaculty(){
    return this.myhttp.post(this.facultyUrl,this.facultyData);
  }

  updateFaculty(){
    return this.myhttp.put(`${this.facultyUrl}/${this.facultyData.facultyID}`,this.facultyData)
  }

  getFaculty(): Observable<Faculty[]>
  {
    return this.myhttp.get<Faculty[]>(this.facultyUrl);
  }

  deleteFaculty(id : number){
    return this.myhttp.delete(`${this.facultyUrl}/${id}`);
  }
}
