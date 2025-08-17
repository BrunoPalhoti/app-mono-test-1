
import { useState } from 'react';

interface AuthResponse {
	token: string;
	profile: {
		id: number;
		email: string;
		name: string;
		profileType: string;
		avatar: string; 
	};
	message?: string;
}

export function useAuthenticate() {
	const [email, setEmail] = useState<string | null>(null);
	const [token, setToken] = useState<string | null>(null);
	const [profile, setProfile] = useState<AuthResponse['profile'] | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);

	const login: (emailInput: string, password: string) => Promise<{ success: boolean; token?: string; profile?: AuthResponse['profile'] } | null> = async (emailInput: string, password: string) => {
		setLoading(true);
		setError(null);
			try {
				const res = await fetch('http://localhost:3333/auth/login', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ email: emailInput, password }),
				});
				const data: AuthResponse = await res.json();
				if (!res.ok) throw new Error(data?.profile ? 'Erro desconhecido' : (data.message || 'Erro ao autenticar'));
				setEmail(data.profile.email);
				setToken(data.token);
				setProfile(data.profile);
				return { success: true, token: data.token, profile: data.profile };
			} catch (err: any) {
				setError(err.message);
				return { success: false };
			} finally {
				setLoading(false);
			}
		};

		return { email, token, profile, error, loading, login };
	}
