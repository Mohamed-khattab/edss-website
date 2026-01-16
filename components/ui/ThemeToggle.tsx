'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'
import { cn } from '@/lib/utils'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button
        className="relative w-14 h-8 rounded-full bg-muted p-1 transition-colors"
        aria-label="Toggle theme"
      >
        <span className="absolute left-1 top-1 w-6 h-6 rounded-full bg-card shadow-md" />
      </button>
    )
  }

  const isDark = theme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={cn(
        "relative w-14 h-8 rounded-full p-1 transition-all duration-300",
        isDark ? "bg-slate-700" : "bg-blue-100"
      )}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <span
        className={cn(
          "absolute top-1 w-6 h-6 rounded-full bg-white shadow-md transition-all duration-300 flex items-center justify-center",
          isDark ? "left-7" : "left-1"
        )}
      >
        {isDark ? (
          <Moon className="w-4 h-4 text-slate-700" />
        ) : (
          <Sun className="w-4 h-4 text-amber-500" />
        )}
      </span>
    </button>
  )
}
