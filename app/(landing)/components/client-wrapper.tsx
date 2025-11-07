"use client";

import { ReactNode } from "react";
import { ContentProvider } from "../context/content-context";

export function ClientWrapper({ children }: { children: ReactNode }) {
  return <ContentProvider>{children}</ContentProvider>;
}
