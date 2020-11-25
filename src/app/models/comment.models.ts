export interface IComment {
    id?: string;
    author_id: string;
    post_id: string;
    author_name: string;
    author_description: string;
    content: string;
    time: number;
    author_profile?: string;
    likes: number;
    isLiked?: boolean;
}
