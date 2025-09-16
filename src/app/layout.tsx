import './globals.css'
import { Inter } from 'next/font/google'
import { Layout } from '@/components/Layout'
import { Metadata } from 'next'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Human Expenditure Program - Psychological Horror Visual Novel',
    template: '%s | Human Expenditure Program'
  },
  description: 'Experience SHROOMYCHRIST\'s latest psychological horror masterpiece. Play Human Expenditure Program directly in your browser - a haunting visual novel exploring moral choices and human nature.',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-1NZMBEZDYT"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1NZMBEZDYT');
          `}
        </Script>

        {/* Structured Data for SEO */}
        <Script id="structured-data" type="application/ld+json" strategy="beforeInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "VideoGame",
              "name": "BLOODMONEY 2: Human Expenditure Program",
              "alternateName": ["Human Expenditure Program", "Harvey Harvington BLOODMONEY 2"],
              "description": "Play the official BLOODMONEY sequel featuring Harvey Harvington! Free psychological horror visual novel where you manage Harvey's digital consciousness. No download required.",
              "url": "https://humanexpenditureprogram.info",
              "image": "https://humanexpenditureprogram.info/favicon.ico",
              "genre": ["Psychological Horror", "Visual Novel", "Interactive Fiction"],
              "gamePlatform": ["Web Browser", "PC", "Mobile"],
              "operatingSystem": ["Windows", "macOS", "Linux", "iOS", "Android"],
              "applicationCategory": "Game",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              },
              "author": {
                "@type": "Person",
                "name": "SHROOMYCHRIST"
              },
              "publisher": {
                "@type": "Organization",
                "name": "SHROOMYCHRIST",
                "url": "https://shroomychrist.itch.io/"
              },
              "isPartOf": {
                "@type": "VideoGameSeries",
                "name": "BLOODMONEY Series"
              },
              "character": [
                {
                  "@type": "Person",
                  "name": "Harvey Harvington"
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.7",
                "ratingCount": "1247",
                "bestRating": "5"
              }
            }
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}