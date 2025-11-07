"use client";

import { ContentProvider } from "./(landing)/context/content-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ContentProvider>{children}</ContentProvider>;
}
