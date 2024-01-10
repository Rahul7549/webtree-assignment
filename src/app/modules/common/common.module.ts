import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorAlertComponent } from './components/error-alert/error-alert.component';
import { SuccessAlertComponent } from './components/success-alert/success-alert.component';



@NgModule({
  declarations: [
    ErrorAlertComponent,
    SuccessAlertComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SuccessAlertComponent,
    ErrorAlertComponent
  ]
})
export class CommonCustomModule { }
