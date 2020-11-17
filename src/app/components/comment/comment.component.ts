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

  constructor() { }

  ngOnInit() {}

}
