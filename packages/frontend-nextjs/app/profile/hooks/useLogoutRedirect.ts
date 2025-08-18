import { useCallback } from "react";

export function useLogoutRedirect(onLogout: () => void) {
  return useCallback(() => {
    onLogout();
    window.location.href = "/";
  }, [onLogout]);
}
