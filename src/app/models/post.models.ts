export interface IPost {
    id?: number;
    author_profile: string;
    author_name: string;
    author_description: string;
    time: number;
    content?: string;
    content_image?: string;
    likes?: number;
    comments?: number;
    showMore?: boolean;
    isLiked?: boolean;
}

