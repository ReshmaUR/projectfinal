import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { AuthGuard} from './auth.guard';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthService} from './auth.service';
import { JobService} from './job.service';
import { JobListComponent } from './job-list/job-list.component';
import { NewJobComponent } from './new-job/new-job.component';
import { AdminComponent } from './admin/admin.component';
import { AdminJoblistComponent } from './admin-joblist/admin-joblist.component';
import { LoginJoblistComponent } from './login-joblist/login-joblist.component';
import { UpdateJobComponent } from './update-job/update-job.component';
import { FooterComponent } from './footer/footer.component';
import { SelectComponent } from './select/select.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    JobListComponent,
    NewJobComponent,
    AdminComponent,
    AdminJoblistComponent,
    LoginJoblistComponent,
    UpdateJobComponent,
    FooterComponent,
    SelectComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService,AuthGuard,JobService],
  bootstrap: [AppComponent]
})
export class AppModule { }
