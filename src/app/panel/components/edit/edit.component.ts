import { Component, OnInit } from '@angular/core';
// Router
import { Router, ActivatedRoute } from '@angular/router';
// Models
import { Topic } from '../../../models/topic';
// Services
import { UserService } from '../../../services/user.service';
import { TopicService } from '../../../services/topic.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public page_title: string;
  public topic: Topic;
  public identity;
  public token;
  public status;

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _topicService: TopicService) {

    this.page_title = 'Editar tema';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.topic = new Topic('', '', '', '', '', '', this.identity, null);
  }

  ngOnInit(): void {
    this.getTopic();
  }

  getTopic() {
    this._route.params.subscribe(params => {
      let id = params['id'];

      this._topicService.getTopic(id).subscribe(
        response => {
          if (!response.topic) {
            this._router.navigate(['/panel']);
          } else {
            this.topic = response.topic;
          }
        },
        error => {
          console.log(error);
        }
      );
    });
  }

  onSubmit(form) {
    let id = this.topic._id;

    this._topicService.update(this.token, id, this.topic).subscribe(
      response => {
        if (response.TopicUpdate) {
          this.status = "success";
          this.topic = response.TopicUpdate;
        } else {
          this.status = 'error';
        }
        console.log(response);
        console.log(this.status);
      },
      error => {
        this.status = 'error';
        console.log(error);
      }
    );
  }
}


