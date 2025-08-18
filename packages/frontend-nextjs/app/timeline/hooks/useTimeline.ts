"use client";
import { useState, useEffect } from "react";
import { useGetPosts } from "../api/useGetPosts";
import { usePostPosts } from "../api/usePostPosts";
import { useAuth } from "../../context/AuthContext";
import { useLikePost } from "../api/useLikePost";

export function useTimeline() {
  const { posts: backendPosts } = useGetPosts();
  const [posts, setPosts] = useState<any[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { profile } = useAuth();
  const { postNew, loading } = usePostPosts();
  const { likePost, loading: likeLoading } = useLikePost();

  useEffect(() => {
    const sorted = [...backendPosts].sort((a, b) => {
      const dateA = new Date(a.date || a.createdAt || 0).getTime();
      const dateB = new Date(b.date || b.createdAt || 0).getTime();
      return dateB - dateA;
    });
    setPosts(sorted);
  }, [backendPosts]);

  const handlePost = async () => {
    if (!title.trim() || !content.trim() || !profile) return;

    const userId = profile.id;
    const avatar = profile.avatar || "";
    const user = profile.name || "Usuário";
    const result = await postNew({ title, content, userId });
    if (result) {
      const newPost = {
        ...result,
        title,
        avatar,
        user,
        date: new Date().toLocaleString(),
        likes: 0,
      };

      const updatedPosts = [newPost, ...posts].sort((a, b) => {
        const dateA = new Date(a.date || a.createdAt || 0).getTime();
        const dateB = new Date(b.date || b.createdAt || 0).getTime();
        return dateB - dateA;
      });
      setPosts(updatedPosts);
      setTitle("");
      setContent("");
    }
  };

  return {
    posts,
    setPosts,
    title,
    setTitle,
    content,
    setContent,
    handlePost,
    loading,
    likeLoading,
    likePost,
    profile,
  };
}
