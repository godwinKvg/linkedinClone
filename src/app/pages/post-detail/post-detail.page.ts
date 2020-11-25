import { IComment } from './../../models/comment.models';
import { CommentService } from './../../services/comment/comment.service';
import { IPost } from './../../models/post.models';
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
  post: IPost;
  comments: IComment[];

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private commentService: CommentService
  ) { }

  ngOnInit() {
    const postId = this.route.snapshot.paramMap.get('id');
    this.post = this.postService.getPostById(Number(postId));
    this.comments = this.commentService.getPostComment(Number(postId));
  }

  onMoreOptions(){
    
  }
}
