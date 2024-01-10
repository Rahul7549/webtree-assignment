import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './components/app-header/app-header.component';
// import { AppHeaderComponent } from './components/app-header';



@NgModule({
  declarations: [
    AppHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AppHeaderComponent
  ]
})
export class HeaderModule { }
