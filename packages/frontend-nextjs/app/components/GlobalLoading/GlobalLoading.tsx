import { Box, CircularProgress, Typography } from "@mui/material";

export default function GlobalLoading() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        bgcolor: "rgba(255,255,255,0.85)",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress color="primary" size={64} />
      <Typography sx={{ mt: 3, fontWeight: 600, color: "primary.main" }}>
        Carregando...
      </Typography>
    </Box>
  );
}
