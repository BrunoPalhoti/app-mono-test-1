import { Typography, Button, Box } from '@mui/material';
import { useLogoutRedirect } from '../hooks/useLogoutRedirect';

interface ProfileInfoProps {
  name: string;
  email: string;
  profileType: string;
  onLogout: () => void;
}

export default function ProfileInfo({ name, email, profileType, onLogout }: ProfileInfoProps) {
  const handleLogout = useLogoutRedirect(onLogout);
  return (
    <>
      <Typography variant="h3" fontWeight={800} sx={{ color: "#00B877", mb: 1, textAlign: "center", letterSpacing: 1 }}>{name}</Typography>
      <Typography variant="body1" sx={{ color: "#334155", mb: 1.5, textAlign: "center", fontSize: 18 }}>{email}</Typography>
      <Typography variant="subtitle1" sx={{ color: "#009966", fontWeight: 700, mb: 3, textAlign: "center", fontSize: 17 }}>
        {profileType}
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
        onClick={handleLogout}
      >
        Sair
      </Button>
    </>
  );
}
