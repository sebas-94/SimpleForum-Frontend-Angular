import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// PANEL MODULE
import { PanelModule } from './panel/components/panel.module';
// Routing
import { AppRoutingModule } from './app-routing.module';
// Forms
import { FormsModule } from '@angular/forms';
// Upload
import { AngularFileUploaderModule } from 'angular-file-uploader';
// Http
import { HttpClientModule } from '@angular/common/http';
// AngularMoment
import { MomentModule } from 'ngx-moment';
// NgxHighlight
import { HighlightJsModule } from 'ngx-highlight-js';
// Componets
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { TopicsComponent } from './components/topics/topics.component';
import { TopicDetailComponent } from './components/topic-detail/topic-detail.component';
import { UsersComponent } from './components/users/users.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    UserEditComponent,
    TopicsComponent,
    TopicDetailComponent,
    UsersComponent
  ],
  imports: [
    PanelModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFileUploaderModule,
    MomentModule,
    HighlightJsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
