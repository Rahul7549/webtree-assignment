import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { FormsModule } from '@angular/forms';
import { CommonCustomModule } from '../common/common.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { DatePipe } from '@angular/common';
@NgModule({
  declarations: [
    EditTaskComponent,
    TaskListComponent,
    CreateTaskComponent,
    TaskDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatDatepickerModule,
    CommonCustomModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers:[DatePipe]
})
export class TaskModule { }
