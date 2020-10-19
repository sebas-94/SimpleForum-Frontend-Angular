import { Component, OnInit } from '@angular/core';
// Router
import { Router, ActivatedRoute } from '@angular/router';
// Services
import { TopicService } from '../../services/topic.service';
// Models
import { Topic } from 'src/app/models/topic';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public page_title: string;
  public topics: Topic[];

  
  constructor(private _topicService: TopicService,
    private _router: Router,
    private _route: ActivatedRoute) {

    this.page_title = 'Búsqueda';
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let search = params['search'];
      this.page_title = this.page_title + ' ' + search;
      this.getTopics(search);
    });
  }


  getTopics(search, page=1) {
    this._topicService.search(search).subscribe(
      response => {
        if (response.topics) {
          this.topics = response.topics;
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
