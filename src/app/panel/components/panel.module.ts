import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// Routing Panel
import { AppRoutingModule } from './panel-routing.module';
// Forms
import { FormsModule } from '@angular/forms';
// Http
import { HttpClientModule } from '@angular/common/http';
// AngularMoment
import {MomentModule} from 'ngx-moment';
// Panel components
import { MainComponent } from './main/main.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    MainComponent,
    AddComponent,
    EditComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MomentModule
  ],
  providers: []
})

export class PanelModule { }
