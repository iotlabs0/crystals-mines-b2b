import { Inter, Playfair_Display } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import '@/styles/globals.css'

// Import fonts using Next.js font optimization
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

// Metadata for the page (SEO)
export const metadata = {
  title: 'Delhi VIP Numbers | Premium Mobile Numbers',
  description: 'Get exclusive VIP mobile numbers with premium services',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <div className="min-h-screen flex flex-col">
          {/* Header Section */}
          <Header />

          {/* Main Content Section */}
          <main className="flex-grow">
            {children}
          </main>

          {/* Footer Section */}
          <Footer />
        </div>
      </body>
    </html>
  )
}
