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
      content: 'magna non qui adipisicing aute ipsum.Veniam Lorem eiusmod magna non qui adipisicing aute ipsum.Veniam Lorem eiusmod magna non qui adipisicing aute ipsum.Veniam Lorem eiusmod magna non qui adipisicing aute ipsum.Veniam Lorem eiusmod magna non qui adipisicing aute ipsum.Veniam Lorem eiusmod magna non qui adipisicing ',
      author_profile: '/assets/profile.png',
      time: Date.now(),
      likes: 2
    },
    {
      id: 'Do d',
      author_id: 'Aute quis a',
      post_id: 'Labore',
      author_name: 'DeRTYUIserunt',
      author_description: 'Veniam Lorem eiusmod ',
      content: 'magna non qui adipisicing aute ipsum.',
      author_profile: '/assets/profile.png',
      time: Date.now(),
      likes: 2
    },
    {
      id: 'Do deserunt',
      author_id: 'Aute quis a',
      post_id: 'Labore',
      author_name: 'DGrante',
      author_description: 'non qui adipisicing',
      content: 'Veniam Lorem eiusmod magna non qui adipisicing aute ipsum.Veniam Lorem eiusmod magna non qui adipisicing aute ipsum.',
      author_profile: '/assets/profile.png',
      time: Date.now(),
      likes: 2
    }
  ];

  constructor() { }

  getPostComment(id: number): IComment[] {
    return this.comments;
  }
}
