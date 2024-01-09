import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskServiceService } from '../service/task-service.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css'],
  providers:[DatePipe]
})
export class TaskDetailsComponent implements OnInit {
  taskId: any;
  selectedTask: any;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private service: TaskServiceService){

  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.taskId = params['taskId'];
    });
    this.getSelectedTaskId();
  }

  getSelectedTaskId() {
    
    this.service.getTaskById(this.taskId).subscribe(data => {
      this.selectedTask = data;
      console.log(this.selectedTask);
    },
      (error) => {
        alert('Internal Server Error')
      })
  }

  goBack(){
    this.router.navigate([''])
  }

}
