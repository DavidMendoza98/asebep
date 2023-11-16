import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private AuthService:AuthService) { }

  ngOnInit() {
    this.user = this.AuthService.getUser();
  }
  public user:any;


}
