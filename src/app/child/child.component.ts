import { Component, EventEmitter, ViewChild,ElementRef, Renderer2 } from '@angular/core';
import { GetApiService } from '../get-api.service';
import { response } from 'express';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})

export class ChildComponent {
  arr: any = [];
  resultArr: any = [];
  teamNum1: any;
  formdata: any = {
    date: '',
    combination: '',
  };
  formVal: any = {
    number: 0,
    team_1: '',
    team_2: '',
    team_3: '',
    team_4: '',
    team_5: '',
    team_6: '',
    date: '',
    c1: '',
    c2: '',
    c3: '',
    c4: '',
    c5: '',
    c6: '',
    c7: '',
    c8: '',
    c9: '',
    c10: '',
    c11: '',
    c12: '',
    c13: '',
    c14: '',
    c15: '',
  };
  @ViewChild('bodyBind', { static: true }) bodyBind!: ElementRef;

  constructor(private api: GetApiService, private renderer: Renderer2) {}
  deleteOutputSchedule(){
  this.api.deleteOutput().subscribe(response=>{
    console.log("Deleted");
  })
  }
  createOutputSchedule() {
    this.api.postOutput(this.formdata).subscribe((response) => {
      console.log('Output Schedule Created Successfully:', response);
    });
}
 

  onClick(
    n1: any,
    n2: any,
    n3: any,
    n4: any,
    n5: any,
    n6: any,
    inputDate: string,
    teamNum: any
  ) {
    if (this.bodyBind.nativeElement) {
      this.renderer
        .selectRootElement(this.bodyBind.nativeElement)
        .scrollIntoView({ behavior: 'smooth' });
    }
    this.arr = [n1, n2, n3, n4, n5, n6];
    let count = 0;
    const bodyBind = document.getElementById('body_bind');
    if (!bodyBind) {
      console.error("Element with ID 'body_bind' not found.");
      return;
    }
    if (teamNum > 15 || teamNum == 0) {
      bodyBind.innerHTML = 'Impossible';
    } 
    else{
      let currentDate = new Date(inputDate);
      this.formdata.date = currentDate;
      bodyBind.innerHTML += `<span style='color: blue; font-weight: bold;'>${currentDate}</span><br>`;
      let y = 0;
      for (let j = 0; j < this.arr.length; j++) {
        for (let k = j + 1; k < this.arr.length; k++) {
          count++;
          bodyBind.innerHTML += `${this.arr[j]} vs ${this.arr[k]}<br><br>`;
          var result = `${this.arr[j]} vs ${this.arr[k]}`;
          this.formdata.combination = result; 
          this.createOutputSchedule(); 
          this.resultArr.push(result);
          this.formVal['c' + (y + 1)] = this.resultArr[y];
          y++;

          if (count % teamNum == 0 && count != ((this.arr.length - 1) * (this.arr.length / 2))) {
            currentDate.setDate(currentDate.getDate() + 1);
            bodyBind.innerHTML += `<span style='color: blue; font-weight: bold;'>${currentDate}</span><br>`;
            this.formdata.date = currentDate;
          }
          
        }
      }
      bodyBind.innerHTML += '<br>';
    }
    console.log(this.resultArr);
  } 
 
  createSchedule() {
    this.api.postScheduler(this.formVal).subscribe((response) => {
      console.log('Data inserted successfully');
    });
  }
}
