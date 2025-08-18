import React from "react";
import { Toolbar, IconButton, Typography } from "@mui/material";
import { CustomToolbarProps } from "./type/CustomToolbarProps";

export function CustomToolbar({ isHome }: CustomToolbarProps) {

  return (
    <Toolbar
      sx={{
        px: { xs: 1, sm: 2, md: 3 },
        minHeight: { xs: 56, sm: 64 },
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        background: "linear-gradient(135deg, #1e293b 0%, #00B877 100%)",
      }}
    >
      <span style={{ flexGrow: 1 }} />
      <IconButton
        color="inherit"
        sx={{
          color: "#FFFFFF",
          fontSize: { xs: 16, sm: 18 },
          p: { xs: 1.2, sm: 1.5 },
          borderRadius: 2,
        }}
        title={isHome ? "Ir para login" : "Voltar para Home"}
        onClick={() => window.location.href = isHome ? '/login' : '/'}
      >
        <Typography
          variant="button"
          sx={{
            fontSize: { xs: 14, sm: 16 },
            fontWeight: 600,
            letterSpacing: 1,
            textTransform: "uppercase",
          }}
        >
          {isHome ? "Entrar" : "Home"}
        </Typography>
      </IconButton>
    </Toolbar>
  );
}
