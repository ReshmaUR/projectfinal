import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService} from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn:boolean= true;
  constructor(private _auth: AuthService,private router : Router) { }
  ngOnInit(): void {
    
  }
  logout(){
    // this.isLoggedIn = !this.isLoggedIn;
    this._auth.logout();
    this.router.navigate(['']);
    return false;
  }
  // loggedIn(){
  //   this.isLoggedIn = !this.isLoggedIn;
  // }
}
