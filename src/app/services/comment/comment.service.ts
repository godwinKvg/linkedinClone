import { IComment } from './../../models/comment.models';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CommentService {


  comments = [
    {
      id: 'Do deserunt',
      author_id: 'Aute quis a',
      post_id: 'Labore',
      author_name: 'Dolor mollit',
      author_description: 'Veniam Lorem eiusmod magna non qui adipisicing aute ipsum.',
      time: 'Laborum qui esse Lorem ex ex amet.',
    },
    {
      id: 'Do deserunt',
      author_id: 'Aute quis a',
      post_id: 'Labore',
      author_name: 'Dolor mollit',
      author_description: 'Veniam Lorem eiusmod magna non qui adipisicing aute ipsum.',
      time: 'Laborum qui esse Lorem ex ex amet.',
    },
    {
      id: 'Do deserunt',
      author_id: 'Aute quis a',
      post_id: 'Labore',
      author_name: 'Dolor mollit',
      author_description: 'Veniam Lorem eiusmod magna non qui adipisicing aute ipsum.',
      time: 'Laborum qui esse Lorem ex ex amet.',
    }
  ];

  constructor() { }

  getPostComment(id: number): IComment[]{
    return this.comments;
  }
}
