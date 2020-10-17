import { Component, OnInit } from '@angular/core';
// Router
import { Router, ActivatedRoute } from '@angular/router';
// Services
import { TopicService } from '../../services/topic.service';
// Models
import { Topic } from 'src/app/models/topic';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {
  public page_title: string;
  public topics: Topic[];
  public totalPages;
  public page;
  public number_pages;
  public next_page;
  public prev_page;

  constructor(private _topicService: TopicService,
    private _router: Router,
    private _route: ActivatedRoute) {

    this.page_title = 'Temas';
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let page = +params['page'];
      this.getTopics(page);
    })

  }

  getTopics(page = 1) {
    this._topicService.getTopics(page).subscribe(
      response => {
        if (response.topics) {
          this.topics = response.topics;

          // Pagination
          this.totalPages = response.totalPages;
          let number_pages = [];

          for (let i = 1; i <= this.totalPages; i++) {
            number_pages.push(i);
          }

          this.number_pages = number_pages;
          // Mín
          if (page >= 2) {
            this.prev_page = page - 1;
          } else {
            this.prev_page = 1;
          }
          // Máx
          if (page < this.totalPages) {
            this.next_page = page + 1;
          } else {
            this.next_page = this.totalPages;
          }

        } else {
          this._router.navigate(['/inicio']);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
