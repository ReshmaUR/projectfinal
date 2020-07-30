import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http:HttpClient) { }
  // for getting joblist
  getJobs(){
    return this.http.get("http://localhost:3000/jobs");
  }
  // for insering a job
  newJob(item){
    return this.http.post("http://localhost:3000/insert",{"job":item})
    .subscribe(data=>{
      console.log(data)
    })
  }
  deletejob(_id){
      return this.http.post("http://localhost:3000/delete",{"id":_id})
  }
   //  for update
   updatejob(ID,updateItem){
    return this.http.post("http://localhost:3000/update",{"job":updateItem,"ID":ID})
    .subscribe(data=>{
      console.log(data)
    })
  }
  updated(ID){
    console.log(ID)
    return this.http.post("http://localhost:3000/updated",{"ID":ID})   
    
  }
}
