"use client"
import React from "react";
import Image from "next/image";
import { TextField, Button, Typography, Box, Grid, Link, Paper, Fade, ThemeProvider, createTheme } from "@mui/material";
import { useAppTheme } from "../api/hooks/useAppTheme";
import { useLoginForm } from "./hooks/useLoginForm";

const theme = createTheme({
  palette: {
    primary: { main: '#00D084', contrastText: '#fff' },
    secondary: { main: '#f50057' },
  },
});

const LoginPage: React.FC = () => {
  const { mode } = useAppTheme();
  const {
    emailInput,
    password,
    loading,
    error,
    email,
    handleEmailChange,
    handlePasswordChange,
    handleLogin,
  } = useLoginForm();

  return (
    <ThemeProvider theme={theme}>
      <Grid container justifyContent="center" alignItems="center" sx={{
        minHeight: 'calc(100vh - 64px)',
        p: 3,
        background: mode === 'dark'
          ? 'linear-gradient(135deg, #121212 0%, #1e1e1e 100%)'
          : 'linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)'
      }}>
        <Grid item xs={12} md={8} lg={6}>
          <Paper elevation={6} sx={{
            borderRadius: 4,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            boxShadow: mode === 'dark'
              ? '0 8px 32px rgba(0,0,0,0.3)'
              : '0 8px 32px rgba(0,0,0,0.1)',
            border: mode === 'dark' ? 'none' : '1px solid rgba(0, 208, 132, 0.1)'
          }}>
            <Box sx={{
              width: { xs: '100%', md: '50%' },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              p: 4,
              background: mode === 'dark'
                ? 'linear-gradient(135deg, #003D2B 0%, #005A40 50%, #00D084 100%)'
                : 'linear-gradient(135deg, #00D084 0%, #00B877 50%, #009966 100%)',
              position: 'relative',
              minHeight: 300
            }}>
              <Fade in timeout={1000}>
                <Box sx={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  animation: 'float 3s ease-in-out infinite',
                }}>
                  <Image
                    src="/time 1.png"
                    alt="Time 1 interagindo na timeline"
                    fill
                    style={{
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.15))',
                    }}
                    priority
                  />
                </Box>
              </Fade>
            </Box>
            <Box sx={{
              width: { xs: '100%', md: '50%' },
              p: 4,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              backgroundColor: mode === 'dark' ? 'background.paper' : '#fff'
            }}>
              <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700, color: 'primary.main', mb: 2 }}>
                Bem-vindo de volta!
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                Faça login para acessar sua conta
              </Typography>
              <Box component="form" onSubmit={handleLogin} sx={{ mt: 1 }}>
                <TextField
                  label="E-mail"
                  type="email"
                  fullWidth
                  margin="normal"
                  required
                  value={emailInput}
                  onChange={handleEmailChange}
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
                <TextField
                  label="Senha"
                  type="password"
                  fullWidth
                  margin="normal"
                  required
                  value={password}
                  onChange={handlePasswordChange}
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    mt: 3,
                    mb: 2,
                    py: 1.5,
                    borderRadius: 2,
                    fontSize: '1rem',
                    fontWeight: 600,
                    textTransform: 'none',
                    boxShadow: 'none',
                    '&:hover': {
                      boxShadow: '0 4px 12px rgba(0, 208, 132, 0.3)',
                      backgroundColor: '#00B877'
                    }
                  }}
                  disabled={loading}
                >
                  {loading ? "Entrando..." : "Entrar"}
                </Button>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                  <Link href="#" variant="body2" underline="hover" sx={{ color: 'text.secondary' }}>
                    Esqueceu a senha?
                  </Link>
                  <Link href="#" variant="body2" underline="hover" sx={{ color: 'primary.main', fontWeight: 500 }}>
                    Criar conta
                  </Link>
                </Box>
                {error && (
                  <Typography color="error" sx={{
                    mt: 3,
                    p: 1.5,
                    backgroundColor: mode === 'dark' ? 'error.dark' : 'error.light',
                    borderRadius: 1,
                    textAlign: 'center'
                  }}>
                    {error}
                  </Typography>
                )}
                {email && (
                  <Typography color="success.main" sx={{
                    mt: 3,
                    p: 1.5,
                    backgroundColor: mode === 'dark' ? 'success.dark' : 'success.light',
                    borderRadius: 1,
                    textAlign: 'center'
                  }}>
                    Bem-vindo, {email}!
                  </Typography>
                )}
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </ThemeProvider>
  );
};

export default LoginPage;