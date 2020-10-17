import { Component, OnInit } from '@angular/core';
// Router
import { Router, ActivatedRoute } from '@angular/router';
// Services
import { TopicService } from '../../services/topic.service';
import { UserService } from '../../services/user.service';
import { CommentService } from '../../services/comment.service';
// Models
import { Topic } from '../../models/topic';
import { Comment } from '../../models/comment'
// Global
import { global } from 'src/app/services/global';

@Component({
  selector: 'app-topic-detail',
  templateUrl: './topic-detail.component.html',
  styleUrls: ['./topic-detail.component.css']
})
export class TopicDetailComponent implements OnInit {
  public topic: Topic;
  public comment: Comment;
  public identity;
  public token;
  public status;
  public url;

  constructor(private _topicService: TopicService,
    private _userService: UserService,
    private _commentService: CommentService,
    private _router: Router,
    private _route: ActivatedRoute) {

    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.comment = new Comment('', '', '', this.identity._id);
    this.url = global.url;
  }

  ngOnInit(): void {
    this.getTopic();
  }

  getTopic() {
    this._route.params.subscribe(params => {
      let id = params['id'];

      this._topicService.getTopic(id).subscribe(
        response => {
          if (response.topic) {
            this.topic = response.topic;
          } else {
            this._router.navigate(['/inicio']);
          }
        },
        error => {
          console.log(error);
        }
      );

    })
  }

  deleteComment(commentId) {
    this._commentService.delete(this.token, this.topic._id, commentId).subscribe(
      response => {
        if (!response.topic) {
          this.status = 'delete_error';
        } else {
          this.status = 'delete_success';
          this.topic = response.topic;
        }
      },
      error => {
        this.status = 'delete_error';
        console.log(error);
      }
    );;
  }

  onSubmit(form) {
    this._commentService.add(this.token, this.comment, this.topic._id).subscribe(
      response => {
        if (!response.topic) {
          this.status = 'error';
        } else {
          this.status = 'success';
          this.topic = response.topic;
          form.reset();
        }
      },
      error => {
        this.status = 'error';
        console.log(error);
      }
    );;
  }

}
