import { Injectable } from '@angular/core';
// Http imports
import { HttpClient, HttpHeaders } from '@angular/common/http';
// Observable
import { Observable } from 'rxjs'
// Models
import { User } from '../models/user';
// Global 
import { global } from './global';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  public url: string;
  public identity: User;
  public token: string;

  constructor(private _http: HttpClient) {
    this.url = global.url;
  }

  test() {
    return "Test user service";
  }

  register(user): Observable<any> {
    // Convert object to JSON
    let params = JSON.stringify(user);
    // Set headers
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    // Ajax petition
    return this._http.post(this.url + 'register', params, { headers });
  }

  login(user, gettoken = null): Observable<any> {
    // Check gettoken
    if (gettoken != null) {
      user.gettoken = gettoken;
    }
    // Convert object to JSON
    let params = JSON.stringify(user);
    // Set headers
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    // Ajax petition
    return this._http.post(this.url + 'login', params, { headers });
  }

  getIdentity() {
    let identity = JSON.parse(localStorage.getItem('identity'));

    if (identity != null) {
      this.identity = identity;
    } else {
      this.identity = null;
    }

    return this.identity;
  }

  getToken() {
    let token = localStorage.getItem('token');

    if (token != null) {
      this.token = token;
    } else {
      this.token = null;
    }

    return this.token;
  }

  update(user): Observable<any> {
    // Convert object to JSON
    let params = JSON.stringify(user);
    // Set headers
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', this.getToken());
    // Ajax petition
    return this._http.put(this.url + 'update', params, { headers });
  }

  getUser(userId): Observable<any> {
    // Ajax petition
    return this._http.get(this.url + 'user/' + userId);
  }

  getUsers(): Observable<any> {
    // Ajax petition
    return this._http.get(this.url + 'users');
  }

  logout() {
    localStorage.clear();
    this.identity = null;
    this.token = null;
  }


}
