import { IComment } from './../../models/comment.models';
import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  @Input() comment: IComment;
  moment = moment;
  showCommentInput = false;
  now = Date.now();

  isResponded = true;

  data = false;


  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.data = true;
    }, 2000);
  }

  hideOrShowCommentInput() {
    this.showCommentInput = !this.showCommentInput;
  }

  likeOrUnlike() {
    this.isLiked() ? this.comment.likes-- : this.comment.likes++;
  }

  isLiked(): boolean {
    /* Faire une requête au serveur pour savoir si l'user a liker.
      Ici sera la requête
    */
    let isLiked = false;
    isLiked = !isLiked;
    return isLiked;
  }

}
