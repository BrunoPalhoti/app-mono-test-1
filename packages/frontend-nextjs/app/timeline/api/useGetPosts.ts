import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";

export function useGetPosts() {
	const { token } = useAuth();
	const [posts, setPosts] = useState<any[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

			useEffect(() => {
				if (!token) return;
				setLoading(true);
				fetch("http://localhost:3333/posts/", {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})
					.then(async (res) => {
						if (!res.ok) throw new Error("Erro ao buscar posts");
						const data = await res.json();
						setPosts(Array.isArray(data) ? data : data ? [data] : []);
					})
					.catch((err) => setError(err.message))
					.finally(() => setLoading(false));
			}, [token]);

	return { posts, loading, error };
}
