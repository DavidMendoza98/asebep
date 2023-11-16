import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-myself',
  templateUrl: './myself.component.html',
  styleUrls: ['./myself.component.css']
})
export class MyselfComponent implements OnInit {

  constructor(private AuthService:AuthService,
              private Router:Router) { }

  public view:string = 'all';
  public error:boolean = false;
  public authForm = new FormGroup({
    oldpassword: new FormControl(''),
    newpassword: new FormControl(''),
    newpasswordagain: new FormControl(''),
  });

  ngOnInit() {
    this.user = this.AuthService.getUser();
  }
  change(){

    this.AuthService.change(<string>this.authForm.value.oldpassword,<string>this.authForm.value.newpassword,this.user.id).subscribe(
      {
        next:()=>{
          this.AuthService.logout();
        }, error:(error)=>{
          this.AuthService.logout();
        }
      }
    )
  }
  public user:any = {
      username:"nahum.bobadilla@unah.hn",
      password:"20192330052",
      email:"nahum.bobadilla@unah.hn",
      name:"NAHUM NEFTALY",
      lastname:"BOBADILLA DELGADO",
      permissions:["partner"],
      id:"95fd2ef3-2c17-4887-9378-40bc628ece00"
  }

  setChange(){
    this.view = 'change'
  }

  logout(){
    this.AuthService.logout();
  }

}
