"use client";

import {
  createContext,
  useContext,
  useCallback,
  useSyncExternalStore,
} from "react";

type User = { email: string };

type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
};

// Demo credentials — replace with a real API call in production
export const DEMO_EMAIL = "admin@eventpro.com";
export const DEMO_PASSWORD = "admin123";

const STORAGE_KEY = "user";
const CHANGE_EVENT = "auth:change";

function dispatchChange() {
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

function subscribe(callback: () => void): () => void {
  window.addEventListener("storage", callback);    // cross-tab changes
  window.addEventListener(CHANGE_EVENT, callback); // same-tab changes
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CHANGE_EVENT, callback);
  };
}

// Cached to satisfy useSyncExternalStore's stable-reference requirement
let cachedString: string | null = null;
let cachedSnapshot: User | null = null;

function getSnapshot(): User | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === cachedString) return cachedSnapshot;
    cachedString = stored;
    cachedSnapshot = stored ? (JSON.parse(stored) as User) : null;
    return cachedSnapshot;
  } catch {
    localStorage.removeItem(STORAGE_KEY);
    cachedString = null;
    cachedSnapshot = null;
    return null;
  }
}

// Server always starts with no user; client reads from localStorage
function getServerSnapshot(): User | null {
  return null;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const user = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const login = useCallback((email: string, password: string): boolean => {
    if (email !== DEMO_EMAIL || password !== DEMO_PASSWORD) return false;
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ email }));
    dispatchChange();
    return true;
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    dispatchChange();
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading: false, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
