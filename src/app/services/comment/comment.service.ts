import { IComment } from './../../models/comment.models';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CommentService {


  comments = [
    {
      id: 'Do',
      author_id: 'Aute quis a',
      post_id: 'Labore',
      author_name: 'Doh Junior',
      author_description: 'Veniam Lorem eiusmod ',
      content: 'magna non qui adipisicing aute ipsum.Veniam Lorem eiusmod magna non qui adipisicing aute ipsum.Veniam Lorem eiusmod magna non qui adipisicing aute ipsum.Veniam Lorem eiusmod magna non qui adipisicing aute ipsum.Veniam Lorem eiusmod magna non qui adipisicing aute ipsum.Veniam Lorem eiusmod magna non qui adipisicing aute ipsum.Veniam Lorem eiusmod magna non qui adipisicing aute ipsum.Veniam Lorem eiusmod magna non qui adipisicing aute ipsum.Veniam Lorem eiusmod magna non qui adipisicing aute ipsum.Veniam Lorem eiusmod magna non qui adipisicing aute ipsum.Veniam Lorem eiusmod magna non qui adipisicing aute ipsum.Veniam Lorem eiusmod magna non qui adipisicing aute ipsum.',
      time: Date.now(),
    },
    {
      id: 'Do d',
      author_id: 'Aute quis a',
      post_id: 'Labore',
      author_name: 'DeRTYUIserunt',
      author_description: 'Veniam Lorem eiusmod ',
      content: 'magna non qui adipisicing aute ipsum.Veniam Lorem eiusmod magna non qui adipisicing aute ipsum.Veniam Lorem eiusmod magna non qui adipisicing aute ipsum.Veniam Lorem eiusmod magna non qui adipisicing aute ipsum.Veniam Lorem eiusmod magna non qui adipisicing aute ipsum.Veniam Lorem eiusmod magna non qui adipisicing aute ipsum.Veniam Lorem eiusmod magna non qui adipisicing aute ipsum.Veniam Lorem eiusmod magna non qui adipisicing aute ipsum.Veniam Lorem eiusmod magna non qui adipisicing aute ipsum.Veniam Lorem eiusmod magna non qui adipisicing aute ipsum.Veniam Lorem eiusmod magna non qui adipisicing aute ipsum.Veniam Lorem eiusmod magna non qui adipisicing aute ipsum.',
      time: Date.now(),
    },
    {
      id: 'Do deserunt',
      author_id: 'Aute quis a',
      post_id: 'Labore',
      author_name: 'DGrante',
      author_description: 'non qui adipisicing', 
      content: 'aute ipsum.Veniam Lorem eiusmod magna non qui adipisicing aute ipsum.Veniam Lorem eiusmod magna non qui adipisicing aute ipsum.Veniam Lorem eiusmod magna non qui adipisicing aute ipsum.Veniam Lorem eiusmod magna non qui adipisicing aute ipsum.Veniam Lorem eiusmod magna non qui adipisicing aute ipsum.Veniam Lorem eiusmod magna non qui adipisicing aute ipsum.Veniam Lorem eiusmod magna non qui adipisicing aute ipsum.Veniam Lorem eiusmod magna non qui adipisicing aute ipsum.Veniam Lorem eiusmod magna non qui adipisicing aute ipsum.Veniam Lorem eiusmod magna non qui adipisicing aute ipsum.Veniam Lorem eiusmod magna non qui adipisicing aute ipsum.Veniam Lorem eiusmod magna non qui adipisicing aute ipsum.',
      time: Date.now(),
    }
  ];

  constructor() { }

  getPostComment(id: number): IComment[]{
    return this.comments;
  }
}
