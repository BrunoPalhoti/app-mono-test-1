
import { Card, CardContent, TextField, Button, Typography } from "@mui/material";

export default function Login() {
  return (
    <Card sx={{ maxWidth: 400, margin: '40px auto', padding: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Login
        </Typography>
        <form>
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
          <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Entrar
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
