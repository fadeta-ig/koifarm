"use client";

// Note: Authentication is handled server-side via /api/admin/auth route
// This ensures credentials are never exposed to the client

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
