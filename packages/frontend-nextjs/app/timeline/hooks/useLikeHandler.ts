"use client";
import { Post } from "../types/Post";

export function useLikeHandler(setPosts: (v: Post[] | ((prev: Post[]) => Post[])) => void, likePost: (postId: number, userId: number) => Promise<any>, profile: any) {
  const handleLike = async (postId: number) => {
    if (!profile) return;
    const data = await likePost(postId, profile.id);
    if (data && typeof data.likes === "number") {
      setPosts((prev: Post[]) =>
        prev.map((p: Post) =>
          p.id === postId ? { ...p, likes: data.likes } : p
        )
      );
    }
  };
  return { handleLike };
}
