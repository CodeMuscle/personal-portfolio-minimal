import Link from 'next/link'
import '../globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import { getPages } from '@/sanity/sanity-utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Minimal Portfolio',
  description: 'This is my portfolio page.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pages = await getPages();

  return (
    <html lang="en">
      <body className={`${inter.className} max-w-5xl p-10 mx-auto`}>
        <header className="flex items-center justify-between">
          <Link href="/" className="font-bold text-2xl bg-black bg-clip-text text-transparent hover:drop-shadow transition" >Portfolio</Link>
          <div className="flex items-center gap-8 text-semibold text-gray-600">
            {pages.map((page) => (
              <Link className="hover:underline hover:underline-offset-2 hover:text-black" href={`/${page.slug}`} key={page._id}>
                {page.title}
              </Link>
            ))}
          </div>
        </header>
        <main className="py-20">{children}</main>
      </body>
    </html>
  )
}
