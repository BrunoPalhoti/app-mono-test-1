import { Box, Typography } from '@mui/material';
import { useAuth } from '../../context/AuthContext';

export function useProfilePage() {
  const { profile, logout } = useAuth();

  if (!profile) {
    return {
      profile: null,
      logout,
      notLoggedComponent: (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
          <Typography variant="h6" color="error">Usuário não logado</Typography>
        </Box>
      ),
    };
  }

  return {
    profile,
    logout,
    notLoggedComponent: null,
  };
}
