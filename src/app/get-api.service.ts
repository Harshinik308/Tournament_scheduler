import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(private http:HttpClient) { }
  private api='http://localhost:8080/scheduler';
  private OutputApi='http://localhost:8090/scheduler_output';
  getScheduler(){
    return (this.http.get(this.api));
   }
   postScheduler(formVal:any){
    return this.http.post(this.api,formVal)
   }
   getOutput(){
    return this.http.get(this.OutputApi);
   }
   postOutput(data:any){
    return this.http.post(this.OutputApi,data);
   }
   deleteOutput(){
    return this.http.delete(this.OutputApi);
   }
  
}


