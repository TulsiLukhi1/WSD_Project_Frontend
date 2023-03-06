import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Student } from 'src/app/Shared/Model/student.model';
import { StudentService } from 'src/app/Shared/ServiceClass/student.service';

@Component({
  selector: 'app-student-from',
  templateUrl: './student-from.component.html',
  styleUrls: ['./student-from.component.css']
})
export class StudentFromComponent {
  constructor(public studService : StudentService, public toast:ToastrService){

  }

  ngOnInit(){
    
  }

  studentFormSubmit(form : NgForm){
    if(this.studService.studentData.studentID == 0){
      this.insertStudent(form);
      console.log("insert student in submit")
    }
    else{
      this.updateStudent(form);
      console.log("update student in submit")
    }
  }

  insertStudent(myForm : NgForm){
    this.studService.saveStudent().subscribe(d=>{
      this.resetForm(myForm);
      this.refreshData();
      this.toast.success('Success','Record Saved')
      
    });
  }


  refreshData(){
    this.studService.getStudents().subscribe(res=>{
      this.studService.listStudents=res;
      console.log("inside refresh")
    });
  }

  updateStudent(myForm : NgForm){
    this.studService.updateStudent().subscribe(d=>{
      this.resetForm(myForm);
      this.refreshData();
      this.toast.success("Success","Record Updated")
    });
  }

  resetForm(myForm : NgForm){
    myForm.form.reset();
    this.studService.studentData = new Student();
    console.log("inside reset form method")
  }
}
