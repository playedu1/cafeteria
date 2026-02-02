'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const estados = [
    {
        id: 'cansado',
        emoji: '😫',
        titulo: 'Tá cansado?',
        desc: 'Recarregue sua energia com força total.',
        cor: 'bg-primary/10',
        link: '/cardapio?filter=energia'
    },
    {
        id: 'animado',
        emoji: '🤩',
        titulo: 'Tá animado?',
        desc: 'Celebre o momento com algo especial.',
        cor: 'bg-accent/10',
        link: '/cardapio?filter=celebracao'
    },
    {
        id: 'foco',
        emoji: '🧐',
        titulo: 'Precisa de foco?',
        desc: 'Cafés limpos para clareza mental.',
        cor: 'bg-secondary/10',
        link: '/cardapio?filter=foco'
    },
    {
        id: 'relax',
        emoji: '😌',
        titulo: 'Quer relaxar?',
        desc: 'Opções suaves para desacelerar.',
        cor: 'bg-success/10',
        link: '/cardapio?filter=relax'
    }
];

export function EstadosDeMindCarousel() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center md:text-left"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Como você está se sentindo?</h2>
                    <p className="text-lg text-foreground/60">Escolha seu café pelo seu estado de espírito.</p>
                </motion.div>

                {/* Container com scroll horizontal fluido (no-scrollbar utility needed usually, but standard works) */}
                <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide">
                    {estados.map((estado, index) => (
                        <motion.div
                            key={estado.id}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="min-w-[280px] md:min-w-[320px] snap-center"
                        >
                            <Link href={estado.link} className="block h-full">
                                <div className={`h-full p-8 rounded-3xl ${estado.cor} border border-transparent hover:border-foreground/10 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 group cursor-pointer`}>
                                    <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300 transform origin-left">
                                        {estado.emoji}
                                    </div>
                                    <h3 className="text-2xl font-bold text-foreground mb-3">{estado.titulo}</h3>
                                    <p className="text-foreground/70 mb-6 font-medium">{estado.desc}</p>

                                    <div className="flex items-center text-accent font-semibold group-hover:underline">
                                        Ver sugestões
                                        <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
