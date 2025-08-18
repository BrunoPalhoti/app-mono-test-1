import React from "react";
import { Toolbar, IconButton, Typography } from "@mui/material";
import { CustomToolbarProps } from "./type/CustomToolbarProps";

export function CustomToolbar({ isHome }: CustomToolbarProps) {

  return (
    <Toolbar>
      {isHome ? (
        <>
          <span style={{ flexGrow: 1 }} />
          <IconButton
            color="inherit"
            sx={{ color: "#FFFFFF" }}
            title="Ir para login"
            onClick={() => window.location.href = '/login'}
          >
            Entrar
          </IconButton>
        </>
      ) : (
        <>
          <span style={{ flexGrow: 1 }} />
          <IconButton
            color="inherit"
            sx={{ color: "#FFFFFF" }}
            title="Voltar para Home"
            onClick={() => window.location.href = '/'}
          >
            Home
          </IconButton>
        </>
      )}

    </Toolbar>
  );
}
