import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  constructor(private AuthService:AuthService,
              private Router:Router) { }
  public isLogging: boolean = false;
  public error:boolean = false;
  public authForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  ngOnInit() {
    if(this.AuthService.getToken() !== ''){
      this.Router.navigate(['admin']);
    }
  }

  auth(){
    this.isLogging = true;
    this.error = false;
    this.AuthService.login(<string>this.authForm.value.username,<string>this.authForm.value.password).subscribe(
      {
        next:(response:any)=>{
          const {username,email,name,lastname,permissions,id,token} = response;
          this.AuthService.setToken(token);
          this.AuthService.setUser({
            username,
            email,
            name,
            lastname,
            permissions,
            id
          });
          if(this.AuthService.isAdmin()){
            this.Router.navigate(['menu']);
          } else {
            this.Router.navigate(['myself']);
          }
          
        },
        error:(error)=>{
          console.log(error);
          this.error = true;
          this.isLogging = false;
        }
      }
    )
  }

}
