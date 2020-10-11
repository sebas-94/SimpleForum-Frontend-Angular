import { Component, OnInit, DoCheck } from '@angular/core';
// Models
import { User } from './models/user';
// Services
import { UserService } from './services/user.service';
// Router
import { Router } from '@angular/router';
// Global
import {global} from './services/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  public title: string;
  public identity: User;
  public token: string;
  public url: string;

  constructor(private _userService: UserService,
    private _router: Router) {

    this.title = 'forum-angular';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = global.url;
  }

  ngOnInit() {
    //console.log(this.identity);
    //console.log(this.token);
  }

  ngDoCheck() {
    this.identity = this._userService.getIdentity();
  }

  logout() {
    this._userService.logout();
    this._router.navigate(['/inicio']);
  }

}


