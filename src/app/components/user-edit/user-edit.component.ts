import { Component, OnInit } from '@angular/core';
// Models
import { User } from 'src/app/models/user';
// Services
import { UserService } from '../../services/user.service';
// Router
//import { Router, ActivatedRoute } from '@angular/router';
// Global
import { global } from '../../services/global';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  public page_title: string;
  public status: string;
  public user: User;
  public token: string;
  public url: string;
  public afuConfig;


  constructor(private _userService: UserService,
    /*private _router: Router,
    private _route: ActivatedRoute*/) {

    this.page_title = 'Ajustes de usuario';

    this.user = this._userService.getIdentity();
    this.token = this._userService.getToken();

    this.url = global.url;

    this.afuConfig = {
      multiple: false,
      formatsAllowed: ".jpg, jpeg, .png, .gif",
      maxSixe: "50",
      uploadAPI: {
        url: this.url + "upload-avatar",
        headers: {
          "Authorization": this.token
        }
      },
      theme: "attachPin",
      hideProgressBar: false,
      hideResetBtn: true,
      attachPinText: 'Upload Avatar'
    };
  }

  ngOnInit(): void {
  }

  avatarUpload(data){
    let data_obj = JSON.parse(data.response);
    this.user.image = data_obj.user.image;
    console.log(this.user);
  }

  onSubmit(form) {
  }

}
