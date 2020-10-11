import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// PANEL MODULE
import {PanelModule} from './panel/components/panel.module';
// Routing
import { AppRoutingModule } from './app-routing.module';
// Forms
import { FormsModule } from '@angular/forms';
// Upload
import {AngularFileUploaderModule} from 'angular-file-uploader';
// Http
import {HttpClientModule} from '@angular/common/http';
// Componets
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    UserEditComponent,
  ],
  imports: [
    PanelModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFileUploaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
