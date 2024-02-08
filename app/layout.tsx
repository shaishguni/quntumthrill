import type { Metadata } from 'next'

import './globals.css'



export const metadata: Metadata = {
  title: '…',
  description: '…',
}

// bg-gradient-to-r from-gray-700 via-gray-900 to-black
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <div className="w-screen h-screen overscroll-hidden mt-0 mb-96 pt-0 pb-0 bg-gradient-to-r from-gray-700 via-gray-900 to-black   mx-auto px-4  sm:px-6 lg-px-8 text-black">
        <div>{children}</div>
        </div>
      </body>
    </html>
  )
}