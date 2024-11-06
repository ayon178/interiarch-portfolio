// app/layout.js or app/_app.js (if using a custom App component)

import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Interiarch',
  description: '',
  icons: {
    icon: '/public/favicon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Include Navbar at the top */}
        <Navbar />

        {/* Main content */}
        <main
          style={{
            minHeight: '100vh',
          }}
        >
          {children}
        </main>

        {/* Include Footer at the bottom */}
        <Footer />
      </body>
    </html>
  )
}
