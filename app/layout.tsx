import type { Metadata } from 'next'
import { Charm } from 'next/font/google'
import './globals.css'

const charm = Charm({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-heading',
})

export const metadata: Metadata = {
    title: 'Cafeteria',
    description: 'Cafeteria Application',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt" className={charm.variable}>
            <body className="font-sans antialiased">{children}</body>
        </html>
    )
}