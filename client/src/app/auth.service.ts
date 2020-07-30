import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router} from '@angular/router';

export interface UserDetails {
  email: string,
  password:string
}
// interface TokenResponse {
//   token: string
// }
export interface TokenPayload {
  email: string,
  password: string 
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _registerUrl = "http://localhost:3000/register";
  private _loginUrl = "http://localhost:3000/login";
  private token: string;

  constructor(private http: HttpClient,private router: Router) { }
  registerUser(user){
    return this.http.post(this._registerUrl,user)
  }
  loginUser(user){
    return this.http.post(this._loginUrl,user);
  }

  // adding logout 
  public saveToken(token): void {
    localStorage.setItem('token', token);
    this.token = token;
  }

   public getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('token');
    }
    return this.token;
  }
    public getUserDetails(): UserDetails {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    console.log(user);
    if (user) {
      return !!localStorage.getItem('token')
    } else {
      return false;
    }
  }


  // public logout(): void {
  //   this.token = '';
  //   window.localStorage.removeItem('token');
  //   this.router.navigate(['']);
  //   // this.router.navigateByUrl('');
  // }
  // isloggedIn(){
  //   return !!localStorage.getItem('token');
  // }

  // xtra
logout(){
  this.token = null;
  localStorage.clear();
}

}
