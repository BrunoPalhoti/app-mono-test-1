"use client"
import { Box, Typography, Button, useTheme } from '@mui/material';

export default function Home() {

  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: isDark ? '#000' : theme.palette.background.default,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        pt: 6,
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: 700,
          mb: 2,
          color: isDark ? '#fff' : theme.palette.primary.main,
          textShadow: isDark ? '0 2px 8px rgba(0,0,0,0.12)' : 'none',
        }}
      >
        Bem-vindo à Timeline!
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: '1.2rem',
          color: isDark ? '#00D084' : theme.palette.text.secondary,
          mb: 4,
          textAlign: 'center',
          maxWidth: 480,
          fontWeight: 600,
        }}
      >
        Aqui você acompanha os posts mais recentes, interage com outros usuários e compartilha novidades.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ mb: 5, fontWeight: 600, fontSize: '1.1rem', borderRadius: 2, px: 3, py: 1 }}
        onClick={() => window.location.href = '/timeline'}
      >
        Ir para Timeline
      </Button>
    </Box>
  );
}