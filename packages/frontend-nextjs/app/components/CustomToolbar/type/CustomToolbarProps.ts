export interface CustomToolbarProps {
  mode: 'light' | 'dark';
  setMode: (mode: 'light' | 'dark') => void;
  setSidebarOpen?: (open: boolean) => void;
  isHome?: boolean;
  isLogin?: boolean;
}