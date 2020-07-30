import { Component, OnInit } from '@angular/core';
import { JobService } from '../job.service';
import { JobModel} from '../job-list/job.model';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-job',
  templateUrl: './update-job.component.html',
  styleUrls: ['./update-job.component.css']
})
export class UpdateJobComponent implements OnInit {

  constructor(private jobService : JobService, private router : Router,private _route:ActivatedRoute) { }
  updateItem = new JobModel(null,null,null,null,null,null,null,null,null);
  ngOnInit(): void {
    let id=this._route.snapshot.paramMap.get("id")
    const ID={id:id};   //put _
    this.jobService.updated(ID)
    .subscribe((data)=>{this.updateItem=JSON.parse(JSON.stringify(data)); })
  }
  UpdateJob(){
    let id=this._route.snapshot.paramMap.get("id")
    const ID={id:id};
    this.jobService.updatejob(ID,this.updateItem)
    alert('Successfully updated');
    this.router.navigate(['admin/ajobs']);
  }
}
