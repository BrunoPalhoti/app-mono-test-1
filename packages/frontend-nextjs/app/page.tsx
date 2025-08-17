

"use client"
import { Card, CardContent, TextField, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/timeline");
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
          />
          <TextField
            label="Senha"
            type="password"
            fullWidth
            margin="normal"
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Entrar
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
