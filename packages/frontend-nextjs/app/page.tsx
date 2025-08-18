"use client"
import { Box, Typography, Button, useTheme } from '@mui/material';
import Image from 'next/image';

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
      <Box
        sx={{
          width: '100%',
          maxWidth: 480,
          mb: 4,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          src="/time 1.png"
          alt="Time 1 interagindo na timeline"
          width={480}
          height={320}
          style={{
            width: '100%',
            borderRadius: 24,
            boxShadow: isDark ? '0 4px 24px rgba(0,0,0,0.25)' : '0 4px 24px rgba(0,0,0,0.10)',
            objectFit: 'cover',
          }}
        />
      </Box>
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