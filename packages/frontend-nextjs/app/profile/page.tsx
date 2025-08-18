"use client";
import { Box, Typography } from '@mui/material';
import { useProfilePage } from './hooks/useProfilePage';
import ProfileAvatar from './components/ProfileAvatar';
import ProfileInfo from './components/ProfileInfo';

export default function Profile() {
  const { profile, logout, notLoggedComponent } = useProfilePage();

  if (notLoggedComponent) return notLoggedComponent;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #1e293b 0%, #00B877 100%)",
        position: "relative",
        overflow: "hidden",
        p: { xs: 1, md: 3 },
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: 600 },
          maxWidth: "100%",
          px: { xs: 2, sm: 4 },
          py: { xs: 2, sm: 4 },
          borderRadius: 6,
          boxShadow: "0 12px 40px rgba(0,0,0,0.22)",
          background: "rgba(255,255,255,0.98)",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ProfileAvatar name={profile.name} avatar={profile.avatar} />
        <ProfileInfo
          name={profile.name}
          email={profile.email}
          profileType={profile.profileType}
          onLogout={logout}
        />
      </Box>
    </Box>
  );
}