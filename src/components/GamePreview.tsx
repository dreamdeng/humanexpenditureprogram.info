'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { siteData, gameData } from '@/data/siteData'

export default function GamePreview() {
  const [showIframe, setShowIframe] = useState(false)

  const handlePlayClick = () => {
    setShowIframe(true)
  }

  return (
    <section className="container mx-auto px-4 py-24">
      <Card className="bg-slate-800/30 border-slate-700 backdrop-blur-sm overflow-hidden">
        <CardContent className="p-0">
          <div className="grid lg:grid-cols-2 gap-0 min-h-[600px]">
            <div className="p-12 lg:p-16 flex flex-col justify-center space-y-8 bg-gradient-to-br from-slate-900/80 to-purple-900/20">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Experience Harvey's Digital World
                </h2>
                <p className="text-gray-300 text-xl leading-relaxed">
                  {gameData.game.storyline}
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  {gameData.game.themes.map((theme: string, index: number) => (
                    <span key={index} className="px-4 py-2 bg-purple-900/50 text-purple-300 rounded-full text-sm font-medium border border-purple-700/30">
                      {theme}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Link href="/play">
                  <Button size="lg" className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold">
                    ▶ Start Playing Now
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg"
                  onClick={handlePlayClick}
                >
                  🎮 Preview Game
                </Button>
              </div>
            </div>
            <div className="relative bg-slate-900/50 min-h-[400px] lg:min-h-[600px] flex items-center justify-center">
              <div className="relative w-full h-full p-6">
                {!showIframe ? (
                  // Cover Image
                  <div 
                    className="absolute inset-6 bg-cover bg-center rounded-lg border-2 border-slate-600 cursor-pointer group transition-all duration-300 hover:border-red-500"
                    style={{backgroundImage: 'url(https://humanexpenditureprogram.io/data/image/posts/human-expenditure-program-banner1.jpg)'}}
                    onClick={handlePlayClick}
                  >
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 rounded-lg flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className="w-20 h-20 bg-red-600/80 rounded-full flex items-center justify-center group-hover:bg-red-500 transition-colors duration-300">
                          <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                          </svg>
                        </div>
                        <div className="text-white">
                          <div className="text-lg font-semibold">Click to Play</div>
                          <div className="text-sm opacity-80">Harvey Harvington awaits...</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Game iframe
                  <iframe
                    src={siteData.gameUrl}
                    className="absolute inset-6 w-[calc(100%-3rem)] h-[calc(100%-3rem)] rounded-lg border-2 border-slate-600"
                    title="Human Expenditure Program Preview"
                    allow="fullscreen"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-presentation"
                  />
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}