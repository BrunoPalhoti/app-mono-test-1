import React from "react";
import { Avatar, Typography, IconButton } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { useAuth } from "../../context/AuthContext";

export function SidebarUser() {
  const { profile, token } = useAuth();

  if (!profile) return null;

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Avatar src={"https://via.placeholder.com/150"} alt={profile.name} sx={{ width: 80, height: 80, mb: 2 }} />
      <Typography variant="h6">{profile.name}</Typography>
      <Typography variant="body2" color="text.secondary">{profile.profileType}</Typography>

      <IconButton
        onClick={() => { window.location.href = "/profile"; }}
        color="inherit"
        title="Ir para perfil"
        sx={{ mt: 2 }}
      >
        <SettingsIcon />
      </IconButton>
    </div>
  );
}
