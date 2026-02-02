import type { Metadata } from 'next'
import { Charm, Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-sans',
    display: 'swap',
})

const charm = Charm({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-heading',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Cafeteria | O café que te abraça',
    description: 'Não importa o seu dia, aqui tem o café certo pra você. Venha sentir o conforto em cada xícara.',
    keywords: ['café', 'cafeteria', 'conforto', 'lattes', 'espresso'],
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-BR" className={`${inter.variable} ${charm.variable}`}>
            <body className="font-sans antialiased min-h-screen bg-background text-foreground flex flex-col">
                {/* TODO: Adicionar Header aqui */}
                <div className="flex-1">
                    {children}
                </div>
                {/* TODO: Adicionar Footer aqui */}
            </body>
        </html>
    )
}