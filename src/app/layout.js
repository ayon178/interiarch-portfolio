// app/layout.js or app/_app.js (if using a custom App component)

import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Toaster } from 'react-hot-toast'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Interiarch',
  description: '',
  icons: {
    icon: './favicon.ico',
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
        {/* Toaster for global toast notifications */}
        <Toaster
          position="top-right"
          reverseOrder={false}
          gutter={8}
          toastOptions={{
            duration: 5000, // Toast duration
            style: {
              background: '#333',
              color: '#fff',
            },
          }}
        />
      </body>
    </html>
  )
}
