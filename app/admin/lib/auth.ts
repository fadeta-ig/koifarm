"use client";

export function checkAuth(username: string, password: string): boolean {
  // In production, this should check against a secure backend
  return (
    username === process.env.NEXT_PUBLIC_ADMIN_USERNAME &&
    password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD
  );
}

export function setAuthToken(token: string) {
  if (typeof window !== "undefined") {
    localStorage.setItem("admin_token", token);
  }
}

export function getAuthToken(): string | null {
  if (typeof window !== "undefined") {
    return localStorage.getItem("admin_token");
  }
  return null;
}

export function clearAuthToken() {
  if (typeof window !== "undefined") {
    localStorage.removeItem("admin_token");
  }
}

export function isAuthenticated(): boolean {
  return getAuthToken() !== null;
}
