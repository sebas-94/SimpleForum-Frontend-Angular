import { Component, OnInit } from '@angular/core';
// Models
import { User } from 'src/app/models/user';
// Services
import { UserService } from '../../services/user.service';
// Global
import { global } from '../../services/global';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public page_title: string;
  public users: User[];
  public url: string;

  constructor(private _userService: UserService) {
    this.url = global.url;
    this.page_title = 'Usuarios';
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this._userService.getUsers().subscribe(
      response => {
        if (response.users) {
          this.users = response.users;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
