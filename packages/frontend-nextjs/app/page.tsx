

"use client"
import { Card, CardContent, TextField, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuthenticate } from "./api/useAuthenticate";

export default function Login() {
  const router = useRouter();
  const { login, error, loading, email } = useAuthenticate();
  const [emailInput, setEmailInput] = useState("");
  const [password, setPassword] = useState("");

type LoginResult = { success: boolean } | null;

const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();
  const result: LoginResult = await login(emailInput, password);
  if (result !== null && result.success) {
    router.push("/timeline");
  }
};

  return (
    <Card sx={{ maxWidth: 400, margin: '40px auto', padding: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            label="E-mail"
            type="email"
            fullWidth
            margin="normal"
            required
            value={emailInput}
            onChange={e => setEmailInput(e.target.value)}
          />
          <TextField
            label="Senha"
            type="password"
            fullWidth
            margin="normal"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }} disabled={loading}>
            {loading ? "Entrando..." : "Entrar"}
          </Button>
        </form>
        {error && (
          <Typography color="error" sx={{ mt: 2 }}>
            {error}
          </Typography>
        )}
        {email && (
          <Typography color="success" sx={{ mt: 2 }}>
            Bem-vindo, {email}!
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}
