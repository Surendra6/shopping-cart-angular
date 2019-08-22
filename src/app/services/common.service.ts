import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  getRepoIssues() {
    // const requestUrl = `${href}?q=repo:angular/components&sort=${sort}&order=${order}&page=${page + 1}`;
    return this.http.get(environment.endpoint.host + environment.endpoint.search);
  }

  getEmojis() {
    return this.http.get(environment.endpoint.host + environment.endpoint.emojis);
  }
}
