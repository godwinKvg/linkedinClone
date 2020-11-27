import { Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { PostService } from './../../services/post/post.service';
import { IPost } from './../../models/post.models';
import { Component, ViewChild } from '@angular/core';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  posts: IPost[];

  constructor(
    private router: Router,
    private postService: PostService,
  ) {
    this.posts = postService.posts;
  }



  loadData(event) {
    setTimeout(() => {
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.posts.length == 1000) {
        event.target.disabled = true;
      }

      this.posts = [...this.posts, ...this.posts]
    }, 500);
  }

  onGoPost() {
    this.router.navigate(['/tabs/post']);
  }

}
