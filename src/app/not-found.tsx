import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="container mx-auto px-4 py-12">
        <Card className="bg-slate-800/50 border-slate-700 max-w-2xl mx-auto text-center">
          <CardHeader>
            <div className="text-6xl mb-4">🚫</div>
            <CardTitle className="text-4xl font-bold text-white mb-4">
              Page Not Found
            </CardTitle>
            <CardDescription className="text-gray-300 text-lg">
              The page you're looking for doesn't exist in Harvey's digital world.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-gray-400">
              Perhaps this page was consumed by the simulation, or maybe it never existed at all...
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                  Return Home
                </Button>
              </Link>
              <Link href="/play">
                <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                  Play the Game
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}