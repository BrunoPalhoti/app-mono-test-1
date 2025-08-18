import React from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Link,
  CircularProgress,
  Alert,
} from "@mui/material";

interface LoginFormProps {
  emailInput: string;
  password: string;
  loading: boolean;
  error: string | null;
  email: string;
  handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleLogin: (e: React.FormEvent<HTMLFormElement>) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  emailInput,
  password,
  loading,
  error,
  email,
  handleEmailChange,
  handlePasswordChange,
  handleLogin,
}) => (
  <Box sx={{ p: { xs: 3, md: 5 }, display: "flex", flexDirection: "column", justifyContent: "center", backgroundColor: "background.paper" }}>
    <Typography
      variant="h4"
      component="h1"
      gutterBottom
      sx={{ fontWeight: 700, color: "primary.main", mb: 1 }}
    >
      Bem-vindo de volta!
    </Typography>
    <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
      Faça login para acessar sua conta
    </Typography>
    <Box component="form" onSubmit={handleLogin}>
      <TextField
        label="E-mail"
        type="email"
        fullWidth
        required
        margin="normal"
        value={emailInput}
        onChange={handleEmailChange}
        variant="outlined"
      />
      <TextField
        label="Senha"
        type="password"
        fullWidth
        required
        margin="normal"
        value={password}
        onChange={handlePasswordChange}
        variant="outlined"
      />
      <Button
        type="submit"
        variant="contained"
        fullWidth
        disabled={loading}
        sx={{
          mt: 3,
          mb: 2,
          py: 1.5,
          borderRadius: 3,
          fontSize: "1rem",
          fontWeight: 600,
          textTransform: "none",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 6px 18px rgba(0, 208, 132, 0.3)",
            backgroundColor: "#00B877",
          },
        }}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : "Entrar"}
      </Button>
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
        <Link href="#" variant="body2" underline="hover" sx={{ color: "text.secondary" }}>
          Esqueceu a senha?
        </Link>
        <Link href="#" variant="body2" underline="hover" sx={{ color: "primary.main", fontWeight: 500 }}>
          Criar conta
        </Link>
      </Box>
      {error && (
        <Alert severity="error" sx={{ mt: 3, borderRadius: 2 }}>
          {error}
        </Alert>
      )}
      {email && (
        <Alert severity="success" sx={{ mt: 3, borderRadius: 2 }}>
          Bem-vindo, {email}!
        </Alert>
      )}
    </Box>
  </Box>
);

export default LoginForm;
