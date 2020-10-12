import { Injectable } from '@angular/core';
// Http imports
import { HttpClient, HttpHeaders } from '@angular/common/http';
// Observable
import { Observable } from 'rxjs'
// Models
import { Topic } from '../models/topic';
// Global 
import { global } from './global';


@Injectable({
  providedIn: 'root'
})
export class TopicService {
  public url: string;

  constructor(private _http: HttpClient) {
    this.url = global.url;
  }

  test() {
    return "Test TopicService";
  }

  addTopic(token, topic): Observable<any> {
    // Convert object to JSON
    let params = JSON.stringify(topic);
    // Set headers
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', token);
    // Ajax petition
    return this._http.post(this.url + 'topic', params, { headers });
  }
}
