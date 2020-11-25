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
  isLiked = false;
  isResponded = true;
  showCommentInput = false;
  likes = 0;

  data = false;
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.data = true;
    }, 1000);
  }

  hideOrShowInput(){
    this.showCommentInput= !this.showCommentInput;
  }

  likeOrUnlike(){
    this.isLiked = !this.isLiked;
    this.likes = this.likes == 0?1:0;
  }

}
