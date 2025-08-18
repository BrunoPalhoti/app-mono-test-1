"use client"
import React from "react";
import { Card, CardContent, TextField, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuthenticate } from "../api/useAuthenticate";
import { useAuth } from "../context/AuthContext";
import { CustomToolbar } from "../components/CustomToolbar/CustomToolbar";
import { useAppTheme } from "../api/hooks/useAppTheme";

const LoginPage: React.FC = () => {
  const router = useRouter();
  const { login, error, loading, email } = useAuthenticate();
  const { setAuth } = useAuth();
  const [emailInput, setEmailInput] = useState("");
  const [password, setPassword] = useState("");
  const { mode, setMode } = useAppTheme();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await login(emailInput, password);
    if (result !== null && result.success && result.token && result.profile) {
      setAuth(result.token, { ...result.profile, avatar: result.profile.avatar ?? "" });
      router.push("/timeline");
    }
  };

  return (
    <>
      <CustomToolbar mode={mode} setMode={setMode} isLogin={true} />
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
    </>
  );
};

export default LoginPage;

