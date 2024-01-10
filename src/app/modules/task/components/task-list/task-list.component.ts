import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TaskServiceService} from '../../service/task-service.service'
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  providers: [DatePipe]
})
export class TaskListComponent implements OnInit {
taskList:any=[]
selectedStatus:string='';
openChangeStatusFlag: boolean=false;
isDeleteModalOpen: boolean = false;
openMaskFlag:boolean=false;
  taskToBeDelete: any;
  taskToChangeStatus: any;

constructor(private router:Router,
  private service:TaskServiceService){}

  ngOnInit(): void {
    this.getTasks();
  }



closeSidePoup(){
  this.openChangeStatusFlag=false;
  this.openMaskFlag=false;
}

openDeleteConfirmation(service:any) {
  this.taskToBeDelete=service
    this.isDeleteModalOpen = true;
    this.openMaskFlag=true
    console.log('isDeleteModalOpen ',this.isDeleteModalOpen);
    
  }

  closeDeleteConfirmation() {
    this.isDeleteModalOpen = false;
    this.openMaskFlag=false;
    console.log('isDeleteModalOpen ',this.isDeleteModalOpen);

  }

  deleteItem() {
    this.service.deleteTask(this.taskToBeDelete.id).subscribe(data=>{
      this.getTasks();
    },
    (error)=>{
      alert('Internal Server error')
    }
    )
    this.isDeleteModalOpen = false;
    this.openMaskFlag=false;
  }

  exploreTaskDetails(service:any){
    this.router.navigate(['explore-task'],{queryParams:{'taskId':service.id}})
  }

  createNewTask(){
    this.router.navigate(['create-new-task'])
  }

  editTaskDetails(service:any){
    this.router.navigate(['edit-task'],{queryParams:{'taskId':service.id}})
  }

  getTasks(){
    this.service.getTasks().subscribe(data=>{
      this.taskList=data;
    },
    (error)=>{
      alert('Internal server error')
    }
    )
  }

  changeStatus(task:any){
    this.taskToChangeStatus=task;
    this.selectedStatus=task.status;
    this.openChangeStatusFlag=true;
    this.openMaskFlag=true;
  }

  updateStatus(){
    this.taskToChangeStatus.status=this.selectedStatus;
    this.service.updateTask(this.taskToChangeStatus).subscribe(data=>{
      // this.taskList=data;
      this.getTasks();
      console.log(this.taskList);
      
    },
    (error)=>{
      alert('Internal server Error')
    })
    this.openChangeStatusFlag=false;
    this.openMaskFlag=false;
  }

}
