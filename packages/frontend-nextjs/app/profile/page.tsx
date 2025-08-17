"use client";
import { Card, CardContent, Typography, Avatar, Box, Button } from '@mui/material';
import { useAuth } from '../context/AuthContext';

export default function Profile() {
  const { profile, logout } = useAuth();
 
  if (!profile) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <Typography variant="h6" color="error">Usuário não logado</Typography>
      </Box>
    );
  }

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
      <Card sx={{ minWidth: 350, maxWidth: 400, p: 3 }}>
        <CardContent>
          <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
            <Avatar src={profile.avatar || 'https://via.placeholder.com/150'} sx={{ width: 100, height: 100 }} />
            <Typography variant="h5" fontWeight={700}>{profile.name}</Typography>
            <Typography variant="body1" color="text.secondary">{profile.email}</Typography>
            <Typography variant="body2" color="primary" fontWeight={600}>
              Tipo: {profile.profileType}
            </Typography>
            <Button variant="outlined" color="error" sx={{ mt: 2 }} onClick={logout}>
              Sair
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}