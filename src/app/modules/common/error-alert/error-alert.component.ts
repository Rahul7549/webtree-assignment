import { Component, Input, SimpleChange } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-alert',
  templateUrl: './error-alert.component.html',
  styleUrls: ['./error-alert.component.css']
})
export class ErrorAlertComponent {

  @Input() showErrorAlertFlag:boolean=false;
  @Input() AlertMessage:string='';

  constructor(private router:Router){}
  ngOnInit(): void {
  }
 
  ngOnChanges(changes:SimpleChange){
    
  }

  closeAlertMessage(){
    this.showErrorAlertFlag=false;
  }

 

}
