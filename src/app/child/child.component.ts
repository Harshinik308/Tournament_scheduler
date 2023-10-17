import { Component, EventEmitter, ViewChild,ElementRef, Renderer2 } from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})

 export class ChildComponent {
    arr:any=[];
    teamNum1:any;
    @ViewChild('bodyBind', { static: true }) bodyBind!: ElementRef;
    constructor(private renderer: Renderer2) {}
    onClick(n1:any, n2:any, n3:any, n4:any, n5:any, n6:any, inputDate:string, teamNum:any) {
      if (this.bodyBind.nativeElement) {
        this.renderer.selectRootElement(this.bodyBind.nativeElement).scrollIntoView({ behavior: 'smooth' });
      }
      this.arr= [n1, n2, n3, n4, n5, n6];
      let count = 0;
      const bodyBind = document.getElementById('body_bind');
      if (!bodyBind) {
        console.error("Element with ID 'body_bind' not found.");
        return;
      }
      if (teamNum > 15|| teamNum==0) {
        bodyBind.innerHTML = "Impossible";
      } 
      else {
        let currentDate = new Date(inputDate);
        bodyBind.innerHTML += `<span style='color:blue;font-weight:bold;'">${currentDate}</span><br>`;
        for (let j = 0; j < this.arr.length; j++) {
          for (let k = j + 1; k < this.arr.length; k++) {
            count++;
            bodyBind.innerHTML +=this.arr[j]+" " + "vs" +" "+ this.arr[k] + "<br><br>";
            if (count % teamNum == 0 && count != ((this.arr.length - 1) * (this.arr.length / 2))) {
              currentDate.setDate(currentDate.getDate() + 1);
              bodyBind.innerHTML += `<span style='color:blue;font-weight:bold;'">${currentDate}</span><br>`;
            }
          }
        }
        bodyBind.innerHTML += "<br>";
      }
    }
  }


