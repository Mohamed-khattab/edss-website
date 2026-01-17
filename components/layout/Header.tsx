'use client'

import { useRef, useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { cn } from '@/lib/utils'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isArabic = pathname.startsWith('/ar')
  const navRef = useRef<HTMLElement>(null)
  const navigation = useMemo(
    () =>
      isArabic
        ? [
            { name: 'الرئيسية', href: '/ar' },
            { name: 'عن الشركة', href: '/ar/about' },
            { name: 'الخدمات', href: '/ar/services' },
            { name: 'دراسات الحالة', href: '/ar/case-studies' },
            { name: 'تواصل معنا', href: '/ar/contact' },
          ]
        : [
            { name: 'Home', href: '/' },
            { name: 'About', href: '/about' },
            { name: 'Services', href: '/services' },
            { name: 'Case Studies', href: '/case-studies' },
            { name: 'Contact', href: '/contact' },
          ],
    [isArabic]
  )
  const languageHref = isArabic
    ? pathname.replace(/^\/ar(\/|$)/, '/')
    : `/ar${pathname === '/' ? '' : pathname}`

  useGSAP(
    () => {
      if (!navRef.current) return
      gsap.from(navRef.current, { y: -16, opacity: 0, duration: 0.6, ease: 'power3.out' })
    },
    { scope: navRef }
  )

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <header
      ref={navRef}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="container-wide">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="text-white font-heading font-bold text-lg">E</span>
            </div>
            <span className="font-heading font-bold text-xl text-foreground">
              EDSS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "relative font-medium text-sm transition-colors hover:text-primary",
                  pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
                {pathname === item.href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Right side: Theme toggle + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link href={languageHref} className="px-3 py-1.5 rounded-full border border-border text-sm text-muted-foreground hover:text-primary hover:border-primary transition-colors">
              {isArabic ? 'EN' : 'AR'}
            </Link>
            <Link href={isArabic ? '/ar/contact' : '/contact'} className="btn-primary text-sm">
              {isArabic ? 'ابدأ مشروعك' : 'Get in Touch'}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <Link href={languageHref} className="px-3 py-1.5 rounded-full border border-border text-xs text-muted-foreground hover:text-primary hover:border-primary transition-colors">
              {isArabic ? 'EN' : 'AR'}
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            isMobileMenuOpen ? "max-h-96 pb-6" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-2 pt-4 border-t border-border">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-4 py-3 rounded-lg font-medium transition-colors",
                  pathname === item.href || pathname === item.href.replace('/ar', '')
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href={isArabic ? '/ar/contact' : '/contact'}
              className="btn-primary text-center mt-4"
            >
              {isArabic ? 'ابدأ مشروعك' : 'Get in Touch'}
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
