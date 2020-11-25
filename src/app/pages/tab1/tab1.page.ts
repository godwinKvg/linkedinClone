import { Router } from '@angular/router';
import { PostService } from './../../services/post/post.service';
import { IPost } from './../../models/post.models';
import { Component } from '@angular/core';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  posts: IPost[];

  constructor(
    private router: Router,
    private postService: PostService,
  ) {
    this.posts = postService.posts;
  }

  onGoPost() {
    this.router.navigate(['/tabs/post']);
  }

}
