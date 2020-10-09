import { Component, OnInit } from '@angular/core';
// Models
import {User} from './models/user';
// Services
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public title: string;
  public identity: User;
  public token: string;

  constructor(private _userService: UserService) {
    this.title = 'forum-angular';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  ngOnInit(){
    console.log(this.identity);
    console.log(this.token);
  }

}


