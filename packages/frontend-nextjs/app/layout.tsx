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

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
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

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '16px' }}>
            <IconButton onClick={() => setMode(mode === 'light' ? 'dark' : 'light')} color="inherit">
              {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
