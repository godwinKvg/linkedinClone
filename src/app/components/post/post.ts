export interface Post {
    id?: number;
    authorProfile: string;
    authorName: string;
    authorDescription: string;
    time: number;
    content: string;
    contentImg: string;
    likes: number;
    comments: number;
    showMore?: boolean;
}

