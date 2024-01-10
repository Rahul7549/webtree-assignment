import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './modules/task/components/task-list/task-list.component';
import { TaskDetailsComponent } from './modules/task/components/task-details/task-details.component';
import { CreateTaskComponent } from './modules/task/components/create-task/create-task.component';
import { EditTaskComponent } from './modules/task/components/edit-task/edit-task.component';

const routes: Routes = [
  {path:'',component:TaskListComponent},
  {path:'explore-task',component:TaskDetailsComponent},
  {path:'edit-task',component:EditTaskComponent},
  {path:'create-new-task',component:CreateTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
