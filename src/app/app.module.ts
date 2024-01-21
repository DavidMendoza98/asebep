import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { CommonModule } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import es from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { provideNzI18n, es_ES } from 'ng-zorro-antd/i18n';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WelcomeComponent } from './pages/welcome/welcome.component';
import { LoginComponent } from './pages/login/login.component';
import { SpinComponent } from './standalone/spin/spin.component';
import { AdminComponent } from './pages/admin/admin.component';
import { MyselfComponent } from './pages/myself/myself.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ParnertsComponent } from './pages/parnerts/parnerts.component';

import { FilterPipe } from './pipes/filter.pipe';

import { HeaderComponent } from './standalone/header/header.component';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';

registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    SpinComponent,
    AdminComponent,
    MyselfComponent,
    MenuComponent,
    FilterPipe,
    ParnertsComponent,
  ],
  imports: [

  CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderComponent,
    NzTableModule,
    NzDatePickerModule,
    NzMessageModule,
    NzPopconfirmModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-ES' },provideNzI18n(es_ES)],
  bootstrap: [AppComponent]
})
export class AppModule { }
