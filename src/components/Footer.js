// components/Footer.js
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">About Human Expenditure Program</h3>
            <p className="mt-4 text-base text-gray-400">
              Experience the psychological horror sequel to BLOODMONEY! Play Harvey Harvington's digital consciousness simulation - a free browser-based visual novel exploring corporate ethics and human nature.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/" className="text-base text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/play" className="text-base text-gray-400 hover:text-white">
                  Play Game
                </Link>
              </li>
              <li>
                <Link href="/posts" className="text-base text-gray-400 hover:text-white">
                  Articles
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Contact & Support</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="mailto:dengchr@protonmail.com" className="text-base text-gray-400 hover:text-white">
                  Contact Developer
                </a>
              </li>
              <li>
                <a href="https://shroomychrist.itch.io/" target="_blank" rel="noopener noreferrer" className="text-base text-gray-400 hover:text-white">
                  SHROOMYCHRIST Games
                </a>
              </li>
              <li>
                <a href="https://shroomychrist.itch.io/bloodmoney" target="_blank" rel="noopener noreferrer" className="text-base text-gray-400 hover:text-white">
                  BLOODMONEY (Original)
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-500 text-center">
            &copy; {new Date().getFullYear()} Human Expenditure Program. All rights reserved. | humanexpenditureprogram.info
          </p>
        </div>
      </div>
    </footer>
  );
}