import { Injectable } from '@angular/core';
import { HttpClient,HttpParams,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private HttpClient:HttpClient,
            private router:Router) { }
  private token:string = '';
  private user:any;
  private url:string = 'https://u2g7dmsqu2.execute-api.us-east-1.amazonaws.com/';

  setToken(token:string):void{
    this.token = token;
  }
  setUser(User:any):void{
    this.user = User;
  }
  getToken():string{
    return this.token;
  }
  getUser():any{
    return this.user;
  }
  public isAutenticate():boolean{
    return this.token !== '' && this.user
  }
  logout(){
    this.token = '';
    this.user = null
    this.router.navigate(['auth']);
  }

  login(username:string,password:string){

    const url = this.url + 'v1/auth/login';
 
    const params = new HttpParams({
     fromObject: {
       username: username,
       password: password,
     }
     });

    const httpOptions = {
       headers: new HttpHeaders({
         'Content-Type': 'application/json'
       })
     };
     return this.HttpClient.post(url,{username,password}, httpOptions);
  }

  change(oldpassword:string,newpassword:string, id:string){

    const url = this.url + 'v1/auth/change';
 
    const params = new HttpParams({
     fromObject: {
       _id:id,
       oldpassword: oldpassword,
       newpassword: newpassword,
     }
     });

    const httpOptions = {
       headers: new HttpHeaders({
         'Content-Type': 'application/json'
       })
     };
     return this.HttpClient.post(
      url,
      {
        _id:id,
        oldpassword: oldpassword,
        newpassword: newpassword
      }, 
      httpOptions
      );
  }
}