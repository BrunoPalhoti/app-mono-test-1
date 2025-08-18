import { Post } from "./Post";

export interface TimelinePostsProps {
  posts: Post[];
  setPosts: (v: Post[] | ((prev: Post[]) => Post[])) => void;
  likePost: (postId: number, userId: number) => Promise<any>;
  likeLoading: boolean;
  profile: any;

}
