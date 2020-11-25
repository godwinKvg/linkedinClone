import { PostService } from './../../services/post/post.service';
import { Component, Input, OnInit } from '@angular/core';
import { IPost } from '../../models/post.models';
import * as moment from 'moment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() post: IPost;
  @Input() isMore = true;
  data = false;
  date = Date.now();
  moment = moment;

  pushPage: any;
  constructor(
    private router: Router,
    private postService: PostService
  ) { }

  ngOnInit() {

    setTimeout(() => {
      this.data = true;
    }, 1000);
  }

  trimString(post: IPost, length: number) {
    return post.content.length > length ?
      post.content.substring(0, length) + '...' :
      post.content;
  }

  onLike(post) {
    this.isLiked(post.id) ? post.likes-- : post.likes++;
  }

  isLiked(id: string): boolean {
    // Faire une requête au serveur pour savoir si l'user a liker.
    let isLiked = false;

    isLiked = !isLiked;
    return isLiked;
  }

  onGoComments(postId: number) {
    this.router.navigate(['tabs/feed/comments/', postId]);
  }
}
