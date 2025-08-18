import React from "react";
import { Box, Fade } from "@mui/material";
import Image from "next/image";

const LoginIllustration: React.FC = () => (
  <Box
    sx={{
      width: { xs: "100%", md: "50%" },
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      p: 4,
      background: "linear-gradient(135deg, #00D084, #00B877, #009966)",
      minHeight: 280,
    }}
  >
    <Fade in timeout={1000}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          animation: "float 3s ease-in-out infinite",
        }}
      >
        <Image
          src="/time 1.png"
          alt="Ilustração de login"
          fill
          style={{
            objectFit: "contain",
            filter: "drop-shadow(0 6px 20px rgba(0,0,0,0.25))",
          }}
          priority
        />
      </Box>
    </Fade>
  </Box>
);

export default LoginIllustration;
