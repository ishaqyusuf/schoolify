"use client";

import { Toaster } from "@repo/ui";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <Toaster />
      {children}
    </ThemeProvider>
  );
}
