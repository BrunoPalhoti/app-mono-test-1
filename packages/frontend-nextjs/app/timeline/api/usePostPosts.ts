import { useAuth } from '@/app/context/AuthContext';
import { useState, useCallback } from 'react';

interface PostPayload {
  title: string;
  content: string;
  userId: number;
}

interface PostResponse {
  id: number;
  title: string;
  content: string;
  userId: number;
  [key: string]: any;
}

export function usePostPosts() {
  const { token } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

    const postNew = useCallback(async ({ title, content, userId }: PostPayload): Promise<PostResponse | null> => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3333'}/posts/createPost/${userId}`,
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, content }),
          }
        );
        if (!res.ok) throw new Error('Erro ao criar post');
        return await res.json();
      } catch (err: any) {
        setError(err.message || 'Erro desconhecido');
        return null;
      } finally {
        setLoading(false);
      }
    }, [token]);

  return { postNew, loading, error };
}