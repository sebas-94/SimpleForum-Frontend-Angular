import { Component, OnInit } from '@angular/core';
// Models
import { User } from 'src/app/models/user';
// Services
import { UserService } from '../../services/user.service';
// Router
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public page_title: string;
  public user: User;
  public status: string;
  public identity: User;
  public token: string;

  constructor(private _userService: UserService,
    private _router: Router,
    private _route: ActivatedRoute) {

    this.page_title = 'Login';
    this.user = new User('', '', '', '', '', '', 'ROLE_USER');
  }

  ngOnInit(): void {
  }

  onSubmit(form) {
    this._userService.login(this.user).subscribe(
      response => {
        if (response.user && response.user._id) {
          this.status = 'success';
          // Save user
          this.identity = response.user;
          // Save in localStorage
          localStorage.setItem('identity', JSON.stringify(this.identity));
          // Get Token
          this.getToken(form);
        } else {
          this.status = 'error';
        }
      }, error => {
        this.status = 'error';
        console.log(error);
      }
    );
  }

  getToken(form) {
    this._userService.login(this.user, true).subscribe(
      response => {
        if (response.token) {
          this.token = response.token;
          // Save in localStorage
          localStorage.setItem('token', this.token);
          // Reset form
          form.reset();
          //this.status = 'success';
          // Redirect
          this._router.navigate(['/inicio']);
        } else {
          this.status = 'error';
        }
      }, error => {
        this.status = 'error';
        console.log(error);
      }
    );
  }

  persistUser() {
   
  }

}
