"use client"

import { ThemeProvider } from "@/components/theme-provider"
import { MobileViewProvider } from "@/hooks/use-mobile-view"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      <MobileViewProvider>{children}</MobileViewProvider>
    </ThemeProvider>
  )
}
