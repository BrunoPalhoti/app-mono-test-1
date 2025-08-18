"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { AuthProvider } from "./context/AuthContext";
import { CustomToolbar} from "./components/CustomToolbar/CustomToolbar";
import { useAppTheme } from "./api/hooks/useAppTheme";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AppBar, Drawer, Toolbar } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
const { sidebarOpen, setSidebarOpen, theme } = useAppTheme();
  return (
    <html lang="en">
      <body className={inter.className}>
          <AuthProvider>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <AppBar position="static" color="primary" elevation={1}>
                {typeof window !== 'undefined' && window.location.pathname === '/' ? (
                  <CustomToolbar setSidebarOpen={setSidebarOpen} isHome={true} isLogin={false} />
                ) : typeof window !== 'undefined' && window.location.pathname === '/login' ? (
                  <CustomToolbar setSidebarOpen={setSidebarOpen} isHome={false} isLogin={true} />
                ) : (
                  <CustomToolbar setSidebarOpen={setSidebarOpen} isHome={false} isLogin={false} />
                )}
              </AppBar>
              <Drawer anchor="left" open={sidebarOpen} onClose={() => setSidebarOpen(false)}>
              
              </Drawer>
              {children}
            </ThemeProvider>
          </AuthProvider>
      </body>
    </html>
  );
}
