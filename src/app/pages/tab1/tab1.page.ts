import { PostService } from './../../services/post/post.service';
import { Post } from './../../models/post.models';
import { Component } from '@angular/core';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  posts: Post[];

  constructor(
    private postService: PostService,
  ) {
    this.posts = postService.posts;
  }

}
