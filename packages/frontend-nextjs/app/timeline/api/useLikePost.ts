import { useAuth } from '@/app/context/AuthContext';
import { useState } from 'react';

export function useLikePost() {
    const { token } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const likePost = async (postId: number | string, userId: number | string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`http://localhost:3333/posts/${postId}/like`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ userId }),
      });
      const data = await response.json();
      setLoading(false);
      return data;
    } catch (err: any) {
      setError(err?.message || 'Erro ao dar like');
      setLoading(false);
      return null;
    }
  };

  return { likePost, loading, error };
}
