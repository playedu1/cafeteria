import { Hero } from '@/components/home/Hero';
import { EstadosDeMindCarousel } from '@/components/home/EstadosDeMindCarousel';
import { LocationTeaser } from '@/components/home/LocationTeaser';
import { PrimeiraXicara } from '@/components/home/PrimeiraXicara';

export default function Home() {
    return (
        <main className="min-h-screen bg-background overflow-hidden">
            {/* 1. Hero com impacto emocional */}
            <Hero />

            {/* 2. Carrossel de Estados de Espírito (Navegação não técnica) */}
            <EstadosDeMindCarousel />

            {/* 3. Teaser de Localização e Ambiente */}
            <LocationTeaser />

            {/* 4. Banner de Conversão (First Time Offer) */}
            <PrimeiraXicara />

            {/* Footer Spacer (se necessário antes do footer real) */}
            <div className="h-20" />
        </main>
    );
}
