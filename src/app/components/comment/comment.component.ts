import { IComment } from './../../models/comment.models';
import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  @Input() comments: IComment[];
  moment = moment;
  isResponded = true;
  showCommentInput = false;
  now = Date.now();
  data = false;


  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.data = true;
    }, 1000);
  }

  hideOrShowInput() {
    this.showCommentInput = !this.showCommentInput;
  }

  likeOrUnlike(comment) {
    this.isLiked(comment.id) ? comment.likes-- : comment.likes++;
  }

  isLiked(id: string): boolean {
    // Faire une requête au serveur pour savoir si l'user a liker.
    let isLiked = false;
    isLiked = !isLiked;
    return isLiked;
  }

}
