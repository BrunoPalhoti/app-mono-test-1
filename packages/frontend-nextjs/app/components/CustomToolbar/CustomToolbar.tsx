import React from "react";
import { Toolbar, IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MenuIcon from '@mui/icons-material/Menu';


interface CustomToolbarProps {
  mode: 'light' | 'dark';
  setMode: (mode: 'light' | 'dark') => void;
  setSidebarOpen?: (open: boolean) => void;
  isHome?: boolean;
  isLogin?: boolean;
}

export function CustomToolbar({ mode, setMode, setSidebarOpen, isHome, isLogin }: CustomToolbarProps) {
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
            {isLogin ? 'Home' : 'Entrar'}
          </IconButton>
        </>
      ) : isLogin ? (
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
      ) : (
        <>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={() => setSidebarOpen && setSidebarOpen(true)}>
            <MenuIcon />
          </IconButton>
          <span style={{ flexGrow: 1 }} />
        </>
      )}
      <IconButton onClick={() => setMode(mode === 'light' ? 'dark' : 'light')} color="inherit" title="Alternar tema">
        {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
      </IconButton>
    </Toolbar>
  );
}
