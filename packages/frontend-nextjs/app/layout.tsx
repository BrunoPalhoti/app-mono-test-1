"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { AuthProvider } from "./context/AuthContext";
import { SidebarUser } from "./components/SidebarUser/SidebarUser";
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
const { mode, setMode, sidebarOpen, setSidebarOpen, theme } = useAppTheme();
  return (
    <html lang="en">
      <body className={inter.className}>
          <AuthProvider>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <AppBar position="static" color="primary" elevation={1}
                sx={mode === 'dark' ? { backgroundColor: '#00D084' } : {}}>
              <CustomToolbar mode={mode} setMode={setMode} setSidebarOpen={setSidebarOpen} isHome={true} />
              </AppBar>
              <Drawer anchor="left" open={sidebarOpen} onClose={() => setSidebarOpen(false)}>
                <div style={{ width: 250, padding: 24, display: "flex", flexDirection: "column", alignItems: "center" }}>
              
                  <SidebarUser />
                </div>
              </Drawer>
              {children}
            </ThemeProvider>
          </AuthProvider>
      </body>
    </html>
  );
}
