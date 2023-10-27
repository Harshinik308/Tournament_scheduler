import { Component } from '@angular/core';
import { GetApiService } from './get-api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'scheduler';
  arr:any=[];
  Schedule:any=[];
  output:any=[];
  constructor(private api:GetApiService){
  }
  ViewSchedule(){
    this.api.getScheduler().subscribe((d:any)=>{
      if(Array.isArray(this.Schedule)){
        this.Schedule.push(...d);
      }
    })
  }
 getOutputSchedule(){
  this.api.getOutput().subscribe((d)=>{
    if(Array.isArray(d)){
      this.output.push(...d);
    }
  })
 }
  
}



