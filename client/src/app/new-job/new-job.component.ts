import { Component, OnInit } from '@angular/core';
import { JobService} from '../job.service';
import { JobModel} from '../job-list/job.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-job',
  templateUrl: './new-job.component.html',
  styleUrls: ['./new-job.component.css']
})
export class NewJobComponent implements OnInit {

  constructor(private jobService : JobService, private router : Router) { }
  jobItem = new JobModel(null,null,null,null,null,null,null,null,null);
  ngOnInit(): void {
  }
  AddJob(){
      this.jobService.newJob(this.jobItem);
      console.log("called");
      alert("Success");
      this.router.navigate(['admin/ajobs']);
  }
}
