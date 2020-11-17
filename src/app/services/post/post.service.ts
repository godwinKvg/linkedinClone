import { Injectable } from '@angular/core';
import { IPost } from '../../models/post.models';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: IPost[] = [
    {
      authorName: 'Postman',
      authorProfileImg: 'https://media-exp1.licdn.com/dms/image/C4E22AQFkEJp7eZXqYg/feedshare-shrink_800-alternative/0?e=1607558400&v=beta&t=Hbxlu43YJmRfXxRyLSi_K7tj2TB8DMLCQZ5VQLucUVo',
      authorDescription: 'REST API Documentation',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, nisi, modi, architecto consectetur aliquid tempora earum aperiam officiis totam sunt tenetur! Incidunt unde dignissimos vero reiciendis consequuntur ipsa eius iste vitae. Voluptates corporis eum voluptatem aspernatur saepe magni, assumenda praesentium ex nesciunt. Distinctio, similique voluptatum.',
      time: Date.now() + 6000,
      contentImg: 'https://media-exp1.licdn.com/dms/image/C5622AQEUT-_6ePU8sQ/feedshare-shrink_800-alternative/0?e=1607558400&v=beta&t=ibu9fJBE2NazenbZDTV-dw9KyAcziT_TbVwSsOb4VmI',
      likes: 0,
      comments: 1
    },
    {
      authorName: 'Amnon',
      authorProfileImg: 'https://media-exp1.licdn.com/dms/image/C4E22AQFkEJp7eZXqYg/feedshare-shrink_800-alternative/0?e=1607558400&v=beta&t=Hbxlu43YJmRfXxRyLSi_K7tj2TB8DMLCQZ5VQLucUVo',
      authorDescription: 'Disciple de Christ',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, nisi, modi, architecto consectetur aliquid tempora earum aperiam officiis totam sunt tenetur! Incidunt unde dignissimos vero reiciendis consequuntur ipsa eius iste vitae. Voluptates corporis eum voluptatem aspernatur saepe magni, assumenda praesentium ex nesciunt. Distinctio, similique voluptatum.',
      time: Date.now() + 360000,
      contentImg: 'https://media-exp1.licdn.com/dms/image/C4D22AQFodrYY0ENRhg/feedshare-shrink_1280-alternative/0?e=1607558400&v=beta&t=bbXX-0VneCzYRUn5eiT6gJF8tr5mJUrlGtBt-DqLCPs',
      likes: 203,
      comments: 30700000000
    },
    {
      authorName: 'Amanda Malela',
      authorProfileImg: 'https://media-exp1.licdn.com/dms/image/C4D22AQESOyvzzobsUA/feedshare-shrink_800-alternative/0?e=1607558400&v=beta&t=skfWOBxqVALXqSfuAGDgMfMOQFMOLOot2lQNVK5_C7Y',
      authorDescription: 'Voyageur | Yoga | Experimentateur',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, nisi, modi, architecto consectetur aliquid tempora earum aperiam officiis totam sunt tenetur! Incidunt unde dignissimos vero reiciendis consequuntur ipsa eius iste vitae. Voluptates corporis eum voluptatem aspernatur saepe magni, assumenda praesentium ex nesciunt. Distinctio, similique voluptatum.',
      time: Date.now() - 70002000,
      contentImg: 'https://media-exp1.licdn.com/dms/image/C4D22AQESOyvzzobsUA/feedshare-shrink_800-alternative/0?e=1607558400&v=beta&t=skfWOBxqVALXqSfuAGDgMfMOQFMOLOot2lQNVK5_C7Y',
      likes: 236789,
      comments: 300000
    },
    {
      authorName: 'Amanda Malela',
      authorProfileImg: 'https://media-exp1.licdn.com/dms/image/C4D22AQESOyvzzobsUA/feedshare-shrink_800-alternative/0?e=1607558400&v=beta&t=skfWOBxqVALXqSfuAGDgMfMOQFMOLOot2lQNVK5_C7Y',
      authorDescription: 'Voyageur | Yoga | Experimentateur',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, nisi, modi, architecto consectetur aliquid tempora earum aperiam officiis totam sunt tenetur! Incidunt unde dignissimos vero reiciendis consequuntur ipsa eius iste vitae. Voluptates corporis eum voluptatem aspernatur saepe magni, assumenda praesentium ex nesciunt. Distinctio, similique voluptatum.',
      time: Date.now() - 70002000,
      contentImg: 'https://media-exp1.licdn.com/dms/image/C5622AQGF5WRYFVWlqQ/feedshare-shrink_800-alternative/0?e=1607558400&v=beta&t=Idah9IY0c3Cdnl1aM5ZTRBgLxgVTJiUvECw9THXdlK4',
      likes: 23007,
      comments: 30
    },
    {
      authorName: 'Rachid Mayouna',
      authorProfileImg: 'https://media-exp1.licdn.com/dms/image/C4D22AQHC1o89uE2Cqg/feedshare-shrink_800-alternative/0?e=1607558400&v=beta&t=9BneD-B0pP7ztEuf_7tVTaNBoZqi_lSziouJuTCFehQ',
      authorDescription: 'Entrepreneur ',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, nisi, modi, architecto consectetur aliquid tempora earum aperiam officiis totam sunt tenetur! Incidunt unde dignissimos vero reiciendis consequuntur ipsa eius iste vitae. Voluptates corporis eum voluptatem aspernatur saepe magni, assumenda praesentium ex nesciunt. Distinctio, similique voluptatum.',
      time: Date.now() - 70002000,
      contentImg: 'https://media-exp1.licdn.com/dms/image/C4D22AQHC1o89uE2Cqg/feedshare-shrink_800-alternative/0?e=1607558400&v=beta&t=9BneD-B0pP7ztEuf_7tVTaNBoZqi_lSziouJuTCFehQ',
      likes: 23007,
      comments: 30
    },
  ];

  constructor() {
    this.posts = this.posts.map(post => ({
      ...post,
      showMore: false,
    }));

    this.posts.forEach((post, index) => {
      post.id = index++;
      post.showMore = false;
    });

  }

  getPostById(id: number): IPost{
    let selectedPost: IPost;
    this.posts.forEach(post => {
      if (post.id === id){
        selectedPost = post;
        return;
      }
    });
    return selectedPost;
  }

  like(id: number, isLiked: boolean){
    this.posts.forEach(post => {
      if (post.id === id) {
        isLiked ? post.likes-- : post.likes++;
        return;
      }
    });
  }

  getPosts(){
    return this.posts;
  }
}
