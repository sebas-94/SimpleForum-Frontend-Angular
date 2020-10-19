import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Guard
import { UserGuard } from './guard/user.guard';
import { NoidentityGuard } from './guard/noidentity.guard';
// Components
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { TopicsComponent } from './components/topics/topics.component';
import { TopicDetailComponent } from './components/topic-detail/topic-detail.component';
import { UsersComponent } from './components/users/users.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchComponent } from './components/search/search.component';


// Routes
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'inicio', component: HomeComponent },
  { path: 'login', canActivate: [NoidentityGuard], component: LoginComponent },
  { path: 'registro', canActivate: [NoidentityGuard], component: RegisterComponent },
  { path: 'ajustes', canActivate: [UserGuard], component: UserEditComponent },
  { path: 'temas', component: TopicsComponent },
  { path: 'temas/:page', component: TopicsComponent },
  { path: 'tema/:id', component: TopicDetailComponent },
  { path: 'usuarios', component: UsersComponent },
  { path: 'perfil/:id', component: ProfileComponent },
  { path: 'buscar/:search', component: SearchComponent },
  { path: '**', component: HomeComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
