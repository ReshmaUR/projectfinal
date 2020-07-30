import { Component, OnInit } from '@angular/core';
import { JobModel} from '../job-list/job.model';
import { JobService} from '../job.service';
@Component({
  selector: 'app-login-joblist',
  templateUrl: './login-joblist.component.html',
  styleUrls: ['./login-joblist.component.css']
})
export class LoginJoblistComponent implements OnInit {
  jobs: JobModel[];
  constructor(private jobService : JobService) { }
  jobItem = new JobModel(null,null,null,null,null,null,null,null,null);
  ngOnInit(): void {
    this.jobService.getJobs()
    .subscribe((data)=>{
      this.jobs = JSON.parse(JSON.stringify(data));
    })
  }

}
