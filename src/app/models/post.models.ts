export interface IPost {
    id?: number;
    authorProfileImage: string;
    authorName: string;
    authorDescription: string;
    time: number;
    content: string;
    contentImage: string;
    likes: number;
    comments: number;
    showMore?: boolean;
}

