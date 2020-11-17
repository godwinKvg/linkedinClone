export interface IPost {
    id?: number;
    authorProfileImg: string;
    authorName: string;
    authorDescription: string;
    time: number;
    content: string;
    contentImg: string;
    likes: number;
    comments: number;
    showMore?: boolean;
}

