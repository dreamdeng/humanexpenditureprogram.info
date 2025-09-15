'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export default function PlayPage() {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [gameLoaded, setGameLoaded] = useState(false)
  const [currentPlayers, setCurrentPlayers] = useState(1247)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlayers(prev => prev + Math.floor(Math.random() * 3) - 1)
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  const toggleFullscreen = () => {
    const gameFrame = document.getElementById('game-iframe')
    if (!document.fullscreenElement) {
      gameFrame.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  const handleGameLoad = () => {
    setGameLoaded(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Human Expenditure Program</h1>
          <p className="text-gray-400 text-lg mb-4">Manage Harvey Harvington Digital Consciousness</p>
          <div className="flex justify-center items-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              {currentPlayers.toLocaleString()} currently playing
            </span>
            <span>~30 minutes</span>
            <span>Free to Play</span>
          </div>
        </div>

        <div className="relative mb-8">
          <Card className="bg-slate-800/50 border-slate-700 overflow-hidden">
            <CardContent className="p-0">
              <div className="relative">
                {!gameLoaded && (
                  <div className="absolute inset-0 bg-slate-900/90 flex items-center justify-center z-10">
                    <div className="text-center space-y-4">
                      <div className="animate-spin w-8 h-8 border-2 border-red-400 border-t-transparent rounded-full mx-auto"></div>
                      <p className="text-white">Loading Harvey world...</p>
                    </div>
                  </div>
                )}
                <iframe
                  id="game-iframe"
                  src="https://html-classic.itch.zone/html/14943229/index.html"
                  className="w-full h-[600px] lg:h-[800px]"
                  title="Human Expenditure Program"
                  frameBorder="0"
                  allow="fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  onLoad={handleGameLoad}
                />
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <Button
              onClick={toggleFullscreen}
              variant="outline"
              className="bg-slate-800 border-slate-600 text-gray-300 hover:bg-slate-700"
            >
              {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
            </Button>
            <Button
              onClick={() => window.location.reload()}
              variant="outline"
              className="bg-slate-800 border-slate-600 text-gray-300 hover:bg-slate-700"
            >
              Restart Game
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-slate-800/40 border-slate-700">
            <CardHeader className="pb-2">
              <CardTitle className="text-white text-lg">Secrets Found</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-400">8/12</div>
              <div className="w-full bg-slate-700 rounded-full h-2 mt-2">
                <div className="bg-blue-400 h-2 rounded-full" style={{ width: '67%' }}></div>
              </div>
              <p className="text-xs text-gray-400 mt-2">Community Progress</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/40 border-slate-700">
            <CardHeader className="pb-2">
              <CardTitle className="text-white text-lg">Endings Unlocked</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-400">3/5</div>
              <div className="w-full bg-slate-700 rounded-full h-2 mt-2">
                <div className="bg-green-400 h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
              <p className="text-xs text-gray-400 mt-2">Community Discovery</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/40 border-slate-700">
            <CardHeader className="pb-2">
              <CardTitle className="text-white text-lg">Total Plays</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-400">15,683</div>
              <p className="text-xs text-gray-400 mt-2">Community Engagement</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/40 border-slate-700">
            <CardHeader className="pb-2">
              <CardTitle className="text-white text-lg">Average Rating</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-yellow-400">4.7</div>
              <div className="text-yellow-400 text-sm mt-1">5 Stars</div>
              <p className="text-xs text-gray-400 mt-1">Player Reviews</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-slate-800/30 border-slate-700 hover:bg-slate-700/30 transition-colors">
            <CardHeader>
              <CardTitle className="text-white">Watch Trailer</CardTitle>
              <CardDescription className="text-gray-400">
                See the haunting world of Human Expenditure Program
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="https://www.youtube.com/watch?v=_qKONc2bIto&t=321s" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Watch on YouTube
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/30 border-slate-700 hover:bg-slate-700/30 transition-colors">
            <CardHeader>
              <CardTitle className="text-white">BLOODMONEY! Prequel</CardTitle>
              <CardDescription className="text-gray-400">
                Play the original game that started Harvey story
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="https://shroomychrist.itch.io/bloodmoney" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  Play BLOODMONEY!
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/30 border-slate-700 hover:bg-slate-700/30 transition-colors">
            <CardHeader>
              <CardTitle className="text-white">More SHROOMYCHRIST Games</CardTitle>
              <CardDescription className="text-gray-400">
                Explore other psychological horror experiences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="https://shroomychrist.itch.io/" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Browse Games
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-slate-800/20 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Playing Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6 text-gray-300">
              <div>
                <h4 className="font-semibold text-white mb-2">For First-Time Players:</h4>
                <ul className="space-y-1 text-sm">
                  <li>Take your time to read all dialogue carefully</li>
                  <li>Pay attention to subtle environmental details</li>
                  <li>Your choices matter - there are multiple endings</li>
                  <li>Look for interactive elements beyond obvious buttons</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">For Secret Hunters:</h4>
                <ul className="space-y-1 text-sm">
                  <li>Try clicking on seemingly non-interactive areas</li>
                  <li>Return to previous screens after new revelations</li>
                  <li>Some secrets only appear under specific conditions</li>
                  <li>The community has found 8/12 secrets so far</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}