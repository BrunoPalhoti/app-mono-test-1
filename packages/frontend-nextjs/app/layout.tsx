"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import SettingsIcon from "@mui/icons-material/Settings";
import { AppBar, Avatar, Drawer, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const theme = React.useMemo(() => createTheme({
    palette: {
      mode,
      primary: {
        main: 'rgb(0, 128, 0)',
      },
    },
    typography: {
      fontFamily: inter.style.fontFamily,
    },
  }), [mode]);

    const user = {
    name: "John Doe",
    occupation: "Software Engineer",
    avatar: "https://via.placeholder.com/150"
  };

  React.useEffect(() => {
    document.body.style.background = theme.palette.background.default;
  }, [theme.palette.background.default]);

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppBar position="static" color="primary" elevation={1}>
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={() => setSidebarOpen(true)}>
                <MenuIcon />
              </IconButton>
              <span style={{ flexGrow: 1 }} />
            
              <IconButton onClick={() => setMode(mode === 'light' ? 'dark' : 'light')} color="inherit" title="Alternar tema">
                {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer anchor="left" open={sidebarOpen} onClose={() => setSidebarOpen(false)}>
            <div style={{ width: 250, padding: 24, display: "flex", flexDirection: "column", alignItems: "center" }}>
             
              <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Avatar src={user.avatar} alt={user.name} sx={{ width: 80, height: 80, mb: 2 }} />
                <Typography variant="h6">{user.name}</Typography>
                <Typography variant="body2" color="text.secondary">{user.occupation}</Typography>
              
                <IconButton
                  onClick={() => { window.location.href = "/profile"; setSidebarOpen(false); }}
                  color="inherit"
                  title="Ir para perfil"
                  sx={{ mt: 2 }}
                >
                  <SettingsIcon />
                </IconButton>
              </div>
            </div>
          </Drawer>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
