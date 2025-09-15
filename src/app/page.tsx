import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { siteData, engagementData, gameData } from '@/data/siteData'

export const metadata: Metadata = {
  title: 'Human Expenditure Program - Psychological Horror Visual Novel | Play Free Online',
  description: 'Experience SHROOMYCHRIST\'s latest psychological horror masterpiece. Play Human Expenditure Program directly in your browser - a haunting visual novel exploring moral choices and human nature. Free to play, no download required.',
  keywords: ['Human Expenditure Program', 'psychological horror visual novel', 'SHROOMYCHRIST games', 'Harvey Harvington game', 'free browser horror games', 'BLOODMONEY sequel'],
  openGraph: {
    title: 'Human Expenditure Program - Own Your Digital Harvey Harvington Today!',
    description: 'Manage Harvey Harvington\'s digital consciousness in this haunting sequel to BLOODMONEY!',
    type: 'website',
    url: 'https://humanexpenditureprogram.info',
  }
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
          <h2 className="text-2xl font-semibold text-gray-300 sm:text-3xl md:text-4xl">
            {gameData.game.title}
          </h2>
          <p className="mx-auto max-w-[800px] text-lg text-gray-400 md:text-xl">
            {siteData.intro}
          </p>
        </div>

        {/* Live Stats */}
        <div className="flex flex-wrap justify-center gap-6 mt-8">
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
      <section className="container mx-auto px-4 py-16">
        <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-white">Experience Harvey's Digital World</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {gameData.game.storyline}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {gameData.game.themes.map((theme: string, index: number) => (
                    <span key={index} className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-sm">
                      {theme}
                    </span>
                  ))}
                </div>
                <div className="pt-4">
                  <Link href="/play">
                    <Button className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white">
                      Start Playing Now
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-lg">
                <iframe
                  src={siteData.gameUrl}
                  className="w-full h-64 md:h-80 rounded border-2 border-slate-600"
                  title="Human Expenditure Program Preview"
                  allow="fullscreen"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* YouTube Trailer Section */}
      <section id="trailer" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-white mb-4">Watch the Official Trailer</h3>
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
          <h3 className="text-4xl font-bold text-white mb-4">The Simulation Whispers...</h3>
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
          <h3 className="text-4xl font-bold text-white mb-4">What Players Are Saying</h3>
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