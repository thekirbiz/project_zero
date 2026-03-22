"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "@/components/theme-provider"
import { useMobileView } from "@/hooks/use-mobile-view"
import { ImageIcon, Smartphone, Moon, Sun, User } from "lucide-react"

export function Navigation() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const { isMobileView, toggleMobileView } = useMobileView()

  const navItems = [
    { href: "/", label: "Галерея", icon: ImageIcon },
    { href: "/about", label: "О проекте", icon: User },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-center px-4">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-medium transition-all hover:bg-primary hover:text-primary-foreground sm:px-4 ${
                  isActive
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-foreground"
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{item.label}</span>
              </Link>
            )
          })}

          <button
            onClick={toggleMobileView}
            className={`flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-medium transition-all hover:bg-primary hover:text-primary-foreground sm:px-4 ${
              isMobileView
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border text-foreground"
            }`}
          >
            <Smartphone className="h-4 w-4" />
            <span className="hidden sm:inline">Мобильная версия</span>
          </button>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center gap-2 rounded-full border border-border px-3 py-2 text-sm font-medium text-foreground transition-all hover:bg-primary hover:text-primary-foreground sm:px-4"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
            <span className="hidden sm:inline">
              {theme === "dark" ? "Светлая тема" : "Тёмная тема"}
            </span>
          </button>
        </div>
      </div>
    </nav>
  )
}
