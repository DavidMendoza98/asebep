import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';
import { ParnertsService } from 'src/app/services/parnerts.service';

import { Partners } from 'src/app/interfaces/partners';
import { Users } from 'src/app/interfaces/users';
import { Activities } from 'src/app/interfaces/activities';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {

  constructor(private AuthService:AuthService,
              private ParnertsService:ParnertsService,
              private Activatedroute:ActivatedRoute,
              private fb: FormBuilder) { }

  public user!:any;
  public search:string='';
  public parnertView:string='all';
  public userView:string='all';
  public action:string = this.Activatedroute.snapshot.queryParamMap.get('action') || '';
  public parnertsFromDb!:Array<Partners>;
  public usersFromDb!:Array<Users>;
  public activitiesFromDb!:Array<Activities>;

  private partnertsSubscriber!:Subscription;
  
  public parnertForm:FormGroup = this.fb.group({
    account: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    name: ['', Validators.required],
    lastname: ['', Validators.required],
    phonenumber: ['', Validators.required],
    birthdate: ['', Validators.required],
    sex: ['', Validators.required],
    career: this.fb.group({
      name: ['', Validators.required],
      entity: ['', Validators.required]
    })
  });

  public userForm:FormGroup = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      permissions: [["partner"]]
  });

  ngOnInit() {
    this.user = this.AuthService.getUser();
    if(this.action === 'partners'){
      this.partnertsSubscriber = this.ParnertsService.getParnertsFromDb().subscribe({
        next:(response:Array<Partners> | any)=>{
          this.parnertsFromDb = response;
          console.log(response);
        }, error:(error:any) =>{
          console.log(error);
        }
      })
    }
  }
  
  ngOnDestroy(){
    if (this.partnertsSubscriber) this.partnertsSubscriber.unsubscribe();
  }
  changeViewParnertToEdit(){
    this.parnertView = 'edit'
  }
  changeViewParnertToCreate(){
    this.parnertView = 'create'
  }
  changeViewParnertToAll(){
    this.parnertView = 'all'
  }
  changeViewUserToEdit(){
    this.userView = 'edit'
  }
  changeViewUserToCreate(){
    this.userView = 'create'
  }
  changeViewUserToAll(){
    this.userView = 'all'
  }

}
