"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

export type AuthProfile = {
  id: number;
  email: string;
  name: string;
  profileType: string;
  avatar: string;
};

export type AuthContextType = {
  token: string | null;
  profile: AuthProfile | null;
  setAuth: (token: string, profile: AuthProfile) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const [profile, setProfile] = useState<AuthProfile | null>(null);
  const [loading, setLoading] = useState(true);


  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedToken = localStorage.getItem('token');
      const storedProfile = localStorage.getItem('profile');
      setToken(storedToken);
      setProfile(storedProfile ? JSON.parse(storedProfile) : null);
      setLoading(false);
    }
  }, []);

  const setAuth = (newToken: string, newProfile: AuthProfile) => {
    setToken(newToken);
    setProfile(newProfile);
    if (typeof window !== 'undefined') {
      localStorage.setItem('token', newToken);
      localStorage.setItem('profile', JSON.stringify(newProfile));
    }
  };

  const logout = () => {
    setToken(null);
    setProfile(null);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
      localStorage.removeItem('profile');
    }
  };

  if (loading) {
    return null;
  }

  return (
    <AuthContext.Provider value={{ token, profile, setAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
