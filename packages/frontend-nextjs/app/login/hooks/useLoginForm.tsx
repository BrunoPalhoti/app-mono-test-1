import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthenticate } from "../../api/useAuthenticate";
import { useAuth } from "../../context/AuthContext";

export function useLoginForm() {
  const router = useRouter();
  const { login, error, loading, email } = useAuthenticate();
  const { setAuth } = useAuth();
  const [emailInput, setEmailInput] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmailInput(e.target.value);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await login(emailInput, password);
    if (result && result.success && result.token && result.profile) {
      setAuth(result.token, { ...result.profile, avatar: result.profile.avatar ?? "" });
      router.push("/timeline");
    }
  };

  return {
    emailInput,
    password,
    loading,
    error,
    email,
    handleEmailChange,
    handlePasswordChange,
    handleLogin,
  };
}