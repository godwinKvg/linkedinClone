import { PostService } from './../../services/post/post.service';
import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../models/post.models';
import * as moment from 'moment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  @Input() isMore = true;


  moment = moment;
  isLiked: boolean;

  pushPage: any;
  constructor(
    private router: Router,
    private postService: PostService
  ) {}

  ngOnInit() {
  }

  trimString(post: Post, length: number) {
      return post.content.length > length ?
             post.content.substring(0, length) + '...' :
             post.content;
  }

  onLike(id: number){
    this.postService.like(id, this.isLiked);
    this.isLiked = !this.isLiked;
  }

  onGoComments(postId: number){
    this.router.navigate(['tabs/feed/comments/', postId]);
  }
}
