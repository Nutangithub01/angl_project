import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Post } from '../post.model';
import { Subscription, of, from } from 'rxjs';
import { map, filter} from 'rxjs/operators';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnDestroy {
  postArray: Post[] = [];

  subscription1: Subscription;
  subscription2: Subscription;
  subscription3: Subscription;
  //dependency injection
  constructor(private apiService: ApiService) {
    this.subscription1 = this.apiService.fetchAllPosts().subscribe(data => {
      this.postArray = data as Post[];
     })

     this.subscription2 = this.apiService.createPost().subscribe(data => {
      console.log(data);
     })

     this.subscription3 = this.apiService.createObservables().subscribe(data => {
      console.log(data);
     }, error => {
      console.log(error);
     }, () => {
      console.log("completed");
     })

     of(10, 20, 30).pipe(map(x => x*2)).subscribe(x => {
      // console.log(x);
     })

     of(10, 20, 30).pipe(filter(x => x > 15)).subscribe(x => {
      // console.log(x);
     })

     of(10, 20, 30).pipe(map(x => x * 2), filter(x => x > 15)).subscribe(x => {
      // console.log(x);
     })

     of(10, 20, 30).pipe(filter(x => x > 15), map(x => x * 2)).subscribe(x => {
      // console.log(x);
     })
    }


   
  
  ngOnInit(): void {
   
  }

  ngOnDestroy(): void {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
    this.subscription3.unsubscribe();
  }
}