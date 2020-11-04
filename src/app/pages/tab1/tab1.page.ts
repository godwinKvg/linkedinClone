import { Post } from './../../components/post/post';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  posts: Post[] = [
    {
      authorName: 'Postman',
      authorProfile: 'https://media-exp1.licdn.com/dms/image/C4E22AQFkEJp7eZXqYg/feedshare-shrink_800-alternative/0?e=1607558400&v=beta&t=Hbxlu43YJmRfXxRyLSi_K7tj2TB8DMLCQZ5VQLucUVo',
      authorDescription: 'REST API Documentation',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, nisi, modi, architecto consectetur aliquid tempora earum aperiam officiis totam sunt tenetur! Incidunt unde dignissimos vero reiciendis consequuntur ipsa eius iste vitae. Voluptates corporis eum voluptatem aspernatur saepe magni, assumenda praesentium ex nesciunt. Distinctio, similique voluptatum.',
      time: Date.now() + 60000000,
      contentImg: 'https://media-exp1.licdn.com/dms/image/C5622AQEUT-_6ePU8sQ/feedshare-shrink_800-alternative/0?e=1607558400&v=beta&t=ibu9fJBE2NazenbZDTV-dw9KyAcziT_TbVwSsOb4VmI',
      likes: 10,
      comments: 35
    },
    {
      authorName: 'Amnon',
      authorProfile: 'https://media-exp1.licdn.com/dms/image/C4E22AQFkEJp7eZXqYg/feedshare-shrink_800-alternative/0?e=1607558400&v=beta&t=Hbxlu43YJmRfXxRyLSi_K7tj2TB8DMLCQZ5VQLucUVo',
      authorDescription: 'Disciple de Christ',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, nisi, modi, architecto consectetur aliquid tempora earum aperiam officiis totam sunt tenetur! Incidunt unde dignissimos vero reiciendis consequuntur ipsa eius iste vitae. Voluptates corporis eum voluptatem aspernatur saepe magni, assumenda praesentium ex nesciunt. Distinctio, similique voluptatum.',
      time: Date.now() + 360000,
      contentImg: 'https://media-exp1.licdn.com/dms/image/C4D22AQFodrYY0ENRhg/feedshare-shrink_1280-alternative/0?e=1607558400&v=beta&t=bbXX-0VneCzYRUn5eiT6gJF8tr5mJUrlGtBt-DqLCPs',
      likes: 203,
      comments: 307
    },
    {
      authorName: 'Amanda Malela',
      authorProfile: 'https://media-exp1.licdn.com/dms/image/C4D22AQESOyvzzobsUA/feedshare-shrink_800-alternative/0?e=1607558400&v=beta&t=skfWOBxqVALXqSfuAGDgMfMOQFMOLOot2lQNVK5_C7Y',
      authorDescription: 'Voyageur | Yoga | Experimentateur',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, nisi, modi, architecto consectetur aliquid tempora earum aperiam officiis totam sunt tenetur! Incidunt unde dignissimos vero reiciendis consequuntur ipsa eius iste vitae. Voluptates corporis eum voluptatem aspernatur saepe magni, assumenda praesentium ex nesciunt. Distinctio, similique voluptatum.',
      time: Date.now() - 70002000,
      contentImg: 'https://media-exp1.licdn.com/dms/image/C4D22AQESOyvzzobsUA/feedshare-shrink_800-alternative/0?e=1607558400&v=beta&t=skfWOBxqVALXqSfuAGDgMfMOQFMOLOot2lQNVK5_C7Y',
      likes: 23007,
      comments: 30
    },
    {
      authorName: 'Amanda Malela',
      authorProfile: 'https://media-exp1.licdn.com/dms/image/C4D22AQESOyvzzobsUA/feedshare-shrink_800-alternative/0?e=1607558400&v=beta&t=skfWOBxqVALXqSfuAGDgMfMOQFMOLOot2lQNVK5_C7Y',
      authorDescription: 'Voyageur | Yoga | Experimentateur',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, nisi, modi, architecto consectetur aliquid tempora earum aperiam officiis totam sunt tenetur! Incidunt unde dignissimos vero reiciendis consequuntur ipsa eius iste vitae. Voluptates corporis eum voluptatem aspernatur saepe magni, assumenda praesentium ex nesciunt. Distinctio, similique voluptatum.',
      time: Date.now() - 70002000,
      contentImg: 'https://media-exp1.licdn.com/dms/image/C5622AQGF5WRYFVWlqQ/feedshare-shrink_800-alternative/0?e=1607558400&v=beta&t=Idah9IY0c3Cdnl1aM5ZTRBgLxgVTJiUvECw9THXdlK4',
      likes: 23007,
      comments: 30
    },
    {
      authorName: 'Rachid Mayouna',
      authorProfile: 'https://media-exp1.licdn.com/dms/image/C4D22AQHC1o89uE2Cqg/feedshare-shrink_800-alternative/0?e=1607558400&v=beta&t=9BneD-B0pP7ztEuf_7tVTaNBoZqi_lSziouJuTCFehQ',
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
  }

}
