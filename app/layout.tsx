import type { Metadata } from 'next'
import { Outfit, Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'EDSS | Software, Networks & Smart Systems',
  description: 'EDSS is a leading technology company providing software development, network solutions, smart systems, and system integration services. Based in Cairo, Egypt.',
  keywords: ['software development', 'network solutions', 'smart systems', 'system integration', 'ERP', 'B2B platforms', 'Cairo', 'Egypt'],
  authors: [{ name: 'EDSS Group' }],
  openGraph: {
    title: 'EDSS | Software, Networks & Smart Systems',
    description: 'Leading technology company providing innovative solutions for businesses.',
    url: 'https://www.edss-group.com',
    siteName: 'EDSS Group',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} ${inter.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
