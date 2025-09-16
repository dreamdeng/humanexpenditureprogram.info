import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { siteData, engagementData, gameData } from '@/data/siteData'
import GamePreview from '@/components/GamePreview'

export const metadata: Metadata = {
  title: 'BLOODMONEY 2: Harvey Harvington Online Game',
  description: 'Play BLOODMONEY 2 sequel featuring Harvey Harvington! Human Expenditure Program is a free psychological horror visual novel online - no download required.',
  keywords: ['bloodmoney 2', 'harvey harvington', 'human expenditure program game', 'bloodmoney harvey', 'harvey harvington bloodmoney', 'bloodmoney 2 download', 'bloodmoney sequel', 'psychological horror game', 'free browser game', 'SHROOMYCHRIST'],
  alternates: {
    canonical: 'https://humanexpenditureprogram.info'
  },
  openGraph: {
    title: 'BLOODMONEY 2: Harvey Harvington Online Game',
    description: 'Play BLOODMONEY 2 sequel featuring Harvey Harvington! Free psychological horror visual novel online - no download required.',
    type: 'website',
    url: 'https://humanexpenditureprogram.info',
    siteName: 'Human Expenditure Program',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BLOODMONEY 2: Harvey Harvington Online Game',
    description: 'Play BLOODMONEY 2 sequel featuring Harvey Harvington! Free psychological horror visual novel online - no download required.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function Home() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="bg-gradient-to-r from-red-400 to-pink-600 bg-clip-text text-transparent">
              {siteData.slogan}
            </span>
          </h1>
          <div className="text-2xl font-semibold text-gray-300 sm:text-3xl md:text-4xl">
            {gameData.game.title}
          </div>
          <p className="mx-auto max-w-[800px] text-lg text-gray-400 md:text-xl">
            {siteData.intro}
          </p>
        </div>

        {/* Live Stats */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-white mb-6">Live Game Statistics</h2>
          <div className="flex flex-wrap justify-center gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400">{engagementData.liveStats.currentPlayers.toLocaleString()}</div>
            <div className="text-sm text-gray-400">Currently Playing</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400">{engagementData.liveStats.totalPlays.toLocaleString()}</div>
            <div className="text-sm text-gray-400">Total Plays</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400">{engagementData.liveStats.secretsDiscovered}/{engagementData.liveStats.totalSecrets}</div>
            <div className="text-sm text-gray-400">Secrets Discovered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400">{engagementData.liveStats.endingsUnlocked}/{engagementData.liveStats.totalEndings}</div>
            <div className="text-sm text-gray-400">Endings Unlocked</div>
          </div>
        </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Link href="/play">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold">
              ▶ Play Now - Free
            </Button>
          </Link>
          <Link href="#trailer">
            <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg">
              🎬 Watch Trailer
            </Button>
          </Link>
        </div>
      </section>

      {/* Game Preview Card */}
      <GamePreview />

      {/* YouTube Trailer Section */}
      <section id="trailer" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Watch the Official Trailer</h2>
          <p className="text-gray-400 text-lg">See the haunting world of Human Expenditure Program</p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video bg-slate-900/50 rounded-lg overflow-hidden border-2 border-slate-600">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/_qKONc2bIto?start=321&autoplay=0&controls=1&rel=0"
              title="Human Expenditure Program Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0"
            />
          </div>
        </div>
      </section>

      {/* Mystery Teasers */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">The Simulation Whispers...</h2>
          <p className="text-gray-400 text-lg">Cryptic messages from Harvey's digital world</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {engagementData.mysteryTeasers.slice(0, 4).map((teaser: string, index: number) => (
            <Card key={index} className="bg-slate-800/30 border-slate-700 hover:bg-slate-700/30 transition-colors">
              <CardContent className="p-6 text-center">
                <p className="text-gray-300 italic text-sm leading-relaxed">"{teaser}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Player Testimonials */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">What Players Are Saying</h2>
          <p className="text-gray-400 text-lg">Real reactions from the community</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {engagementData.playerTestimonials.slice(0, 3).map((testimonial: any) => (
            <Card key={testimonial.id} className="bg-slate-800/40 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{testimonial.avatar}</span>
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-yellow-400 text-sm">{'★'.repeat(testimonial.rating)}</div>
                  </div>
                </div>
                <p className="text-gray-300 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="text-xs text-gray-500 mt-3">{testimonial.timestamp}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>


    </div>
  )
}