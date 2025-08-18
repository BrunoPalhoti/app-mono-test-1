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
    <Box sx={{
      minHeight: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #1e293b 0%, #00B877 100%)",
      position: "relative",
      overflow: "hidden",
    }}>
      <Box sx={{
        width: "100%",
        maxWidth: 600,
        px: { xs: 2, sm: 4 },
        py: { xs: 2, sm: 4 },
        borderRadius: 6,
        boxShadow: "0 12px 40px rgba(0,0,0,0.22)",
        background: "rgba(255,255,255,0.98)",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
       
        <Box sx={{ position: "relative", mb: 3 }}>
          <Avatar src={profile.avatar || 'https://via.placeholder.com/150'} alt={profile.name} sx={{ width: 130, height: 130, border: "5px solid #fff", zIndex: 1, boxShadow: "0 6px 24px rgba(0,0,0,0.18)" }} />
          <Box sx={{
            position: "absolute",
            top: -8,
            left: -8,
            width: "146px",
            height: "146px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #00D084, #00B877, #009966, #1e293b)",
            animation: "spin 7s linear infinite",
            zIndex: 0,
            opacity: 0.7,
          }} />
        </Box>
       
        <Typography variant="h3" fontWeight={800} sx={{ color: "#00B877", mb: 1, textAlign: "center", letterSpacing: 1 }}>{profile.name}</Typography>
      
        <Typography variant="body1" sx={{ color: "#334155", mb: 1.5, textAlign: "center", fontSize: 18 }}>{profile.email}</Typography>
     
        <Typography variant="subtitle1" sx={{ color: "#009966", fontWeight: 700, mb: 3, textAlign: "center", fontSize: 17 }}>
          {profile.profileType}
        </Typography>
       
        <Button
          variant="contained"
          color="error"
          sx={{
            mt: 2,
            fontWeight: 700,
            borderRadius: 4,
            px: 5,
            py: 1.5,
            fontSize: 18,
            boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
            transition: "all 0.3s ease",
            bgcolor: "#ffebee",
            color: "#d32f2f",
            '&:hover': {
              bgcolor: "#ffcdd2",
              transform: "translateY(-2px)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
            },
          }}
          onClick={logout}
        >
          Sair
        </Button>
        {/* animação de borda */}
        <style jsx global>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </Box>
    </Box>
  );
}