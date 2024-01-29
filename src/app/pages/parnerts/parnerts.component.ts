import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Partners } from 'src/app/interfaces/partners';

import { AuthService } from 'src/app/services/auth.service';
import { ParnertsService } from 'src/app/services/parnerts.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-parnerts',
  templateUrl: './parnerts.component.html',
  styleUrls: ['./parnerts.component.css']
})
export class ParnertsComponent implements OnInit, OnDestroy {
    constructor(private AuthService:AuthService,
      private ParnertsService:ParnertsService,
      private Activatedroute:ActivatedRoute,
      private fb: FormBuilder,
      private messageService:NzMessageService){
      
    };
    public user!:any;
    public search:string='';
    public view:string='list';
    private partnertsSubscriber!:Subscription;
    public parnertsFromDb!:Array<Partners>;
    public parnertForm:FormGroup = this.fb.group({
      id:[''],
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

    ngOnInit(){
      this.getDataFromDb();
    };

    ngOnDestroy(): void {
      if (this.partnertsSubscriber) this.partnertsSubscriber.unsubscribe();
    };

    getDataFromDb(){
      this.partnertsSubscriber = this.ParnertsService.getParnertsFromDb().subscribe({
        next:(response:Array<Partners> | any)=>{
          this.parnertsFromDb = response;
        }, error:(error:any) =>{
          console.log(error);
        }
      })
    };
    saveDataToDb(){
      this.ParnertsService.saveParnertInDb(this.parnertForm.value).subscribe({
        next:(response:any)=>{
          this.getDataFromDb();
          this.resetForm();
          this.setViewList();
          this.messageService.create('success','Guardado correctamente');
        },
        error:(error:any)=>{
          this.messageService.error('Opps, ha ocurrido un error:',error)
        }
      })
    }
    updateDataToDB(){
      this.ParnertsService.updateParnertInDb(this.parnertForm.value).subscribe({
        next:(response:any)=>{
          this.getDataFromDb();
          this.resetForm();
          this.setViewList();
          this.messageService.create('success','Actualizado correctamente');
        },
        error:(error:any)=>{
          this.messageService.error('Opps, ha ocurrido un error:',error)
        }
      })
    }
    deleteDataInDB(){
      console.log(this.parnertForm.value.id);

      this.ParnertsService.removeParnertFromDb(this.parnertForm.value.id).subscribe({
        next:(response:any)=>{
          console.log(response);
          this.getDataFromDb();
          this.resetForm();
          this.setViewList();
          this.messageService.create('success','Eliminado correctamente');
        },
        error:(error:any)=>{
          console.log(error);
          this.messageService.error('Opps, ha ocurrido un error:',error.error)
        }
      })
    }

    setPartnertToUpdate(partner:Partners){
      this.parnertForm.patchValue(partner);
      this.setViewDetail();
    }

    resetForm(){
      this.parnertForm.reset();
    }

    setViewCreate(){
      this.resetForm();
      this.view = 'create';
    }
    setViewUpdate(){
      this.view = 'update';
    }
    setViewDetail(){
      this.view = 'detail';
    }
    setViewList(){
      this.resetForm();
      this.view = 'list';
    }
    
}
