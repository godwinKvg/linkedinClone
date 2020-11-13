import { Post } from './../../models/post.models';
import { PostService } from './../../services/post/post.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import * as moment from 'moment';
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.page.html',
  styleUrls: ['./post-detail.page.scss'],
})
export class PostDetailPage implements OnInit {
  moment = moment;

  post$: Observable<any>;
  postId: number;
  post: Post;


  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit() {
    const postId = this.route.snapshot.paramMap.get('id');
    this.post = this.postService.getPostById(Number(postId));

  }

}
