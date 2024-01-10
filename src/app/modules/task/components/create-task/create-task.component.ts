import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {TaskServiceService} from '../../service/task-service.service'
import { titleValidator,descriptionValidator,
  dateNotBeforeTodayValidator } from '../../../common/validator/validator';



@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {

  newTaskForm!: FormGroup;
  successFlag: boolean=true;
  @ViewChild('successModal') successModal!: ElementRef;
  createdTask:any
  constructor(private router :Router,
    private route: ActivatedRoute,
    private service:TaskServiceService,
    private fb: FormBuilder,){

    this.newTaskForm = this.fb.group({
      title:['',[Validators.required,titleValidator()]],
      description:['',[Validators.required,descriptionValidator(5,200)]],
      selectedDate: ['',[Validators.required,dateNotBeforeTodayValidator()]]
    });
  
  }


  ngOnInit(): void {
  }
  
 

  submitNewTaskForm(){
    if(!this.newTaskForm.invalid){ 
      let newTask={
        title:this.newTaskForm.get('title')?.value,
        duesDate:this.newTaskForm.get('selectedDate')?.value,
        description:this.newTaskForm.get('description')?.value,
        status:'Dues'
      }

      this.service.addTask(newTask).subscribe(data=>{
        console.log(data);
        this.createdTask=data;
        this.successFlag=false; 
        const modalElement = this.successModal.nativeElement as HTMLElement;
        modalElement.classList.add('show'); 
        setTimeout(()=>{
          modalElement.classList.remove('show')
        },3000)

      })

    }
    else{
      this.markFormGroupTouched(this.newTaskForm);
    }
  }


  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  cancelEdit(){
    this.router.navigate([''])
  }

  createNewtask(){
    this.successFlag=true; 
    this.newTaskForm.reset();
  }

  hideSuccessModal() {
    const modalElement = this.successModal.nativeElement as HTMLElement;
    modalElement.classList.remove('show'); // Hide the modal by removing 'show' class
  }

}
