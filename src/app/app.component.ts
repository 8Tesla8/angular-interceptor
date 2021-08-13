import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HeaderKey, HeaderValueKey } from './interceptors/header.interceptor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data$: Observable<any>;

  website= 'https://www.google.com';
  header= 'my-header';
  headerValue = 'my-value';

  constructor(private http: HttpClient) {
  }
  
  makeRequest():void{
    localStorage.setItem(HeaderKey, this.header);
    localStorage.setItem(HeaderValueKey, this.headerValue);

    this.data$ = this.http.get(this.website);
  }
}
