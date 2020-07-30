import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard} from './auth.guard';
import { HomeComponent} from './home/home.component';
import { SelectComponent} from './select/select.component';
import { LoginComponent} from './login/login.component';
import { RegisterComponent} from './register/register.component';
import { JobListComponent} from './job-list/job-list.component';
import { NewJobComponent} from './new-job/new-job.component';
import { AdminComponent} from './admin/admin.component';
import { AdminLoginComponent} from './admin-login/admin-login.component';
import { AdminJoblistComponent} from './admin-joblist/admin-joblist.component';
import { LoginJoblistComponent} from './login-joblist/login-joblist.component';
import { UpdateJobComponent} from './update-job/update-job.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'select',component:SelectComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'jobs',component:JobListComponent},
  {path:'alogin',component:AdminLoginComponent},
  {path:'admin',component:AdminComponent,children: [
    {path:'add',component:NewJobComponent},
    {path:'ajobs',component:AdminJoblistComponent}
  ]},
  {path:'ljobs',component:LoginJoblistComponent,canActivate:[AuthGuard]},
  {path:'update/:id',component:UpdateJobComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
