import { Component, OnInit } from '@angular/core';
import { JobModel} from './job.model';
import { JobService} from '../job.service';
@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
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
