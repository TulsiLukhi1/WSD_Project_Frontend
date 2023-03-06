import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Attendence } from '../Model/attendence.model';

@Injectable({
  providedIn: 'root'
})
export class AttendenceService {

  constructor(private myhttp : HttpClient) { }
  attendenceUrl : string ='https://localhost:7253/api/Attendences';
  listAttendece : Attendence[] = [];
  attendeceData : Attendence = new Attendence();


  saveAttendence(){
    return this.myhttp.post(this.attendenceUrl,this.attendeceData);
  }

  updateAttendence(){
    return this.myhttp.put(`${this.attendenceUrl}/${this.attendeceData.id}`,this.attendeceData)
  }

  getAttendences(): Observable<Attendence[]>
  {
    return this.myhttp.get<Attendence[]>(this.attendenceUrl);
  }

  deleteAttendence(id : number){
    return this.myhttp.delete(`${this.attendenceUrl}/${id}`);
  }
}


