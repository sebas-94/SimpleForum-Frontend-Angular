import { Component, OnInit } from '@angular/core';
// Models
import { User } from 'src/app/models/user';
import { Topic } from 'src/app/models/topic';
// Services
import { UserService } from '../../services/user.service';
import { TopicService } from 'src/app/services/topic.service';
// Global
import { global } from '../../services/global';
// Router
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public page_title: String;
  public user: User;
  public topics: Topic;
  public url: string;

  constructor(private _userService: UserService,
    private _topicService: TopicService,
    private _router: Router,
    private _route: ActivatedRoute) {

    this.page_title = "Perfil";
    this.url = global.url;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let userId = params['id'];

      this.getUser(userId);
      this.getTopics(userId);
    });
  }


  getUser(userId) {
    this._userService.getUser(userId).subscribe(
      response => {
        if (response.user) {
          this.user = response.user;
          console.log(this.user);
        } else {
          console.log('redirección');
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  getTopics(userId) {
    this._topicService.getTopicsByUser(userId).subscribe(
      response => {
        if (response.topics) {
          this.topics = response.topics;
          console.log(this.topics);
        }
      },
      error => {
        console.log(error);
      }
    );
  }


}
