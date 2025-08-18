import React from "react";
import { Toolbar, IconButton, Typography } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { CustomToolbarProps } from "./type/CustomToolbarProps";

export function CustomToolbar({ mode, setMode, isHome, isLogin }: CustomToolbarProps) {

  return (
    <Toolbar>
      {isHome ? (
        <>
          <span style={{ flexGrow: 1 }} />
          <IconButton
            color="inherit"
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
            title="Voltar para Home"
            onClick={() => window.location.href = '/'}
          >
            Home
          </IconButton>
        </>
      )}
      <IconButton onClick={() => setMode(mode === 'light' ? 'dark' : 'light')} color="inherit" title="Alternar tema">
        {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
      </IconButton>
    </Toolbar>
  );
}
