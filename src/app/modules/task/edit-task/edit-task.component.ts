import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskServiceService } from '../service/task-service.service';
import * as moment from 'moment'
import { DatePipe } from '@angular/common';
import { titleValidator,descriptionValidator,
  dateNotBeforeTodayValidator } from '../../common/validator/validator';


@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css'],
  providers:[DatePipe]
})
export class EditTaskComponent {

  editTaskForm!: FormGroup;
  taskToBeUpdated: any
  taskId: any;
  @ViewChild('successModal') successModal!: ElementRef;
  successFlag: boolean=true;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private datePipe: DatePipe,
    private service: TaskServiceService) {

    this.editTaskForm = this.fb.group({
      title: ['', [Validators.required,titleValidator()]],
      description: ['', [Validators.required,descriptionValidator(5,200)]],
      selectedDate: ['', [Validators.required,dateNotBeforeTodayValidator()]]
    });

  }


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.taskId = params['taskId'];
    });
    this.getSelectedTaskId();
  }

  getSelectedTaskId() {
    
    this.service.getTaskById(this.taskId).subscribe(data => {
      this.taskToBeUpdated = data;
      console.log(this.taskToBeUpdated);
      if (this.taskToBeUpdated.title) {
        this.editTaskForm.get('title')?.setValue(this.taskToBeUpdated.title);
      }
      if (this.taskToBeUpdated.description) {
        this.editTaskForm.get('description')?.setValue(this.taskToBeUpdated.description);
      }
      if (this.taskToBeUpdated.duesDate) {
        const specificDate = new Date(this.taskToBeUpdated.duesDate);
        this.editTaskForm.get('selectedDate')?.setValue(specificDate);
      }

      console.log(this.editTaskForm.get('title')?.value);
      

    },
      (error) => {
        alert('Internal Server Error')
      })
  }

  submitEditTaskForm() {
    if (!this.editTaskForm.invalid) {
      let updatedTask={
        id:this.taskToBeUpdated.id,
        status:this.taskToBeUpdated.status,
        title:this.editTaskForm.get('title')?.value,
        description:this.editTaskForm.get('description')?.value,
        duesDate:this.editTaskForm.get('selectedDate')?.value
      }
      this.taskToBeUpdated=updatedTask;
      this.service.updateTask(updatedTask).subscribe(data=>{
        console.log(data);
        this.successFlag=false;
        const modalElement = this.successModal.nativeElement as HTMLElement;
        modalElement.classList.add('show'); 

        setTimeout(()=>{
          modalElement.classList.remove('show')
        },3000)
        
      },
      (error)=>{
        alert('Internal server error')
      })
    }
    else {
      this.markFormGroupTouched(this.editTaskForm);
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

  cancelEdit() {
    this.router.navigate([''])
  }

  hideSuccessModal() {
    const modalElement = this.successModal.nativeElement as HTMLElement;
    modalElement.classList.remove('show'); // Hide the modal by removing 'show' class
  }

  editAgain(){
    this.successFlag=true;
    this.getSelectedTaskId();
  }

}
