import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


// injectable decorator
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  x = 0;
  constructor(private http: HttpClient) { 
    console.log("service called");
  }

  fetchAllPosts() {
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }

  createPost() {
    let obj = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    }

    return this.http.post("https://jsonplaceholder.typicode.com/posts", obj);
  }

  createObservables() {
    return new Observable(subscribe => {
      if(this.x == 0) {
        subscribe.next(this.x);
      } else {
        subscribe.error("No data found");
      }
      subscribe.complete();
    })
  }
}
