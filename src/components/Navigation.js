'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils"

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/play', label: 'Play Game', special: true },
  { path: '/posts', label: 'Articles' },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b glass-dark backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gradient-red">Human Expenditure Program</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "flex items-center text-sm font-medium transition-colors hover:text-red-400",
                  item.path === pathname ? "text-red-400" : "text-gray-300",
                  item.special && "bg-gradient-to-r from-red-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-red-700 hover:to-pink-700 transition-all duration-300"
                )}
              >
                {item.special && "Play "}{item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/play"
            className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2"
          >
            <span className="text-sm font-medium">🎮 Play Now</span>
          </Link>
        </div>
      </div>
    </header>
  )
}