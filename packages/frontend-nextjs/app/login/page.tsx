"use client";
import React from "react";
import { Grid, Paper, ThemeProvider } from "@mui/material";
import { useAppTheme } from "../api/hooks/useAppTheme";
import { useLoginForm } from "./hooks/useLoginForm";
import LoginIllustration from "./components/LoginIllustration";
import LoginForm from "./components/LoginForm";

import loginTheme from "./theme";

const LoginPage: React.FC = () => {

  const {
    emailInput,
    password,
    loading,
    error,
    email,
    handleEmailChange,
    handlePasswordChange,
    handleLogin,
  } = useLoginForm();

  return (
    <ThemeProvider theme={loginTheme}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{
          minHeight: "100vh",
          p: { xs: 1, md: 3 },
          background: "linear-gradient(135deg, #e0f7f3, #f5f7fa)",
        }}
      >
        <Grid item xs={12} md={8} lg={6}>
          <Paper
            elevation={8}
            sx={{
              borderRadius: 4,
              overflow: "hidden",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              backdropFilter: "blur(12px)",
              boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
              width: { xs: "100%", md: 600 },
              mx: "auto",
            }}
          >
            <LoginIllustration />
            <LoginForm
              emailInput={emailInput}
              password={password}
              loading={loading}
              error={error}
              email={email ?? ""}
              handleEmailChange={handleEmailChange}
              handlePasswordChange={handlePasswordChange}
              handleLogin={handleLogin}
            />
          </Paper>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default LoginPage;
