"use client"

import { createContext, useContext, useState, ReactNode } from "react"

type MobileViewContextType = {
  isMobileView: boolean
  toggleMobileView: () => void
}

const MobileViewContext = createContext<MobileViewContextType | undefined>(undefined)

export function MobileViewProvider({ children }: { children: ReactNode }) {
  const [isMobileView, setIsMobileView] = useState(false)

  const toggleMobileView = () => {
    setIsMobileView((prev) => !prev)
  }

  return (
    <MobileViewContext.Provider value={{ isMobileView, toggleMobileView }}>
      {children}
    </MobileViewContext.Provider>
  )
}

export function useMobileView() {
  const context = useContext(MobileViewContext)
  if (context === undefined) {
    throw new Error("useMobileView must be used within a MobileViewProvider")
  }
  return context
}
