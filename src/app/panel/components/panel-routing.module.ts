import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Guard
import { UserGuard } from '../../guard/user.guard'
// Panel components
import { MainComponent } from './main/main.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
;

// Routes
const routes: Routes = [
  {
    path: 'panel', component: MainComponent,
    canActivate: [UserGuard],

    children: [
      { path: '', component: ListComponent },
      { path: 'listado', component: ListComponent },
      { path: 'crear', component: AddComponent },
      { path: 'editar/:id', component: EditComponent },
    ]

  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
