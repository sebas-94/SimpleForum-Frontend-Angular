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
    return this._http.post(this.url + 'topic/', params, { headers });
  }

  getTopicsByUser(userId): Observable<any> {
    // Set headers
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    // Ajax petition
    return this._http.get(this.url + 'user-topics/' + userId, { headers });
  }

  getTopic(id): Observable<any> {
    // Ajax petition
    return this._http.get(this.url + 'topic/' + id);
  }

  update(token, id, topic): Observable<any> {
    // Convert object to JSON
    let params = JSON.stringify(topic);
    // Set headers
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', token);
    // Ajax petition
    return this._http.put(this.url + 'topic/' + id, params, { headers });
  }

  delete(token, id): Observable<any> {
    // Set headers
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', token);
    // Ajax petition
    return this._http.delete(this.url + 'topic/' + id, { headers });
  }

  getTopics(page = 1): Observable<any> {
    // Ajax petition
    return this._http.get(this.url + 'topics/' + page);
  }

  search(searchString):Observable<any>{
    // Ajax petition
    return this._http.get(this.url + 'search/' + searchString);
  }

}
