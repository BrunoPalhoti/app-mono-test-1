import React from "react";
import { createTheme } from "@mui/material/styles";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export function useAppTheme() {

  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const theme = React.useMemo(() => createTheme({
    palette: {

      primary: { main: '#00D084' },
  background: { default: '#fff' },
    },
    typography: { fontFamily: inter.style.fontFamily },
  }), []);

  React.useEffect(() => {
    document.body.style.background = theme.palette.background.default;
  }, [theme.palette.background.default]);

  return { sidebarOpen, setSidebarOpen, theme };
}