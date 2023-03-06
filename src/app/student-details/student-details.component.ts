import { Component } from '@angular/core';
import { Toast, ToastrService } from 'ngx-toastr';
import { Student } from '../Shared/Model/student.model';
import { StudentService } from '../Shared/ServiceClass/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
  constructor(public studService:StudentService,public toast:ToastrService){}
  ngOnInit(){
      this.studService.getStudents().subscribe(data=>{
        this.studService.listStudents=data;
      });
  }

  populateStudent(selectedStud : Student){
    console.log(selectedStud);
    this.studService.studentData=selectedStud;
  }

  deleteStud(id:number){
    if(confirm('Are you sure you want to delete this record?')){
      this.studService.deleteStudent(id).subscribe(data=>{
        this.toast.success("Success","Record Deleted");
        console.log("Successfully deleted");
        this.studService.getStudents().subscribe(data=>{
          this.studService.listStudents=data;
        });
      },
      err=>{
        this.toast.error("Error","Record not deleted!")
        
      });
    }
  }

}
