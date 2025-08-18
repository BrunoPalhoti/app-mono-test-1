import React from "react";
import { createTheme } from "@mui/material/styles";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export function useAppTheme() {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const theme = React.useMemo(() => createTheme({
    palette: {
      mode,
      primary: { main: '#00D084' },
      background: { default: mode === 'light' ? '#fff' : '#000' },
    },
    typography: { fontFamily: inter.style.fontFamily },
  }), [mode]);

  React.useEffect(() => {
    document.body.style.background = theme.palette.background.default;
  }, [theme.palette.background.default]);

  return { mode, setMode, sidebarOpen, setSidebarOpen, theme };
}