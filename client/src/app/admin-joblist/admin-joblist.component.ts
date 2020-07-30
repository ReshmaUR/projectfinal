import { Component, OnInit } from '@angular/core';
import { JobModel} from '../job-list/job.model';
import { JobService} from '../job.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-joblist',
  templateUrl: './admin-joblist.component.html',
  styleUrls: ['./admin-joblist.component.css']
})
export class AdminJoblistComponent implements OnInit {
  jobs: JobModel[];
  constructor(private jobService : JobService,private router : Router) { }
  jobItem = new JobModel(null,null,null,null,null,null,null,null,null);
  ngOnInit(): void {
    this.jobService.getJobs()
    .subscribe((data)=>{
      this.jobs = JSON.parse(JSON.stringify(data));
    })
  }
  deleteJob(_id){
    if(confirm("Are you really want to delete this product?") ==true){
      console.log("done");
      console.log(_id);
      this.jobService.deletejob(_id)
      .subscribe(); 
      this.jobService.getJobs()
      .subscribe((data)=>{
        this.jobs = JSON.parse(JSON.stringify(data));
        this.router.navigate(['admin/ajobs']);
      })
    }
  }
}
