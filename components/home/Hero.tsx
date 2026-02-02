'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background Dinâmico */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-100 via-background to-accent/10" />

            {/* Elementos Decorativos Animados */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                className="absolute top-20 right-10 w-64 h-64 rounded-full bg-accent/20 blur-3xl"
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
                className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-secondary/15 blur-3xl"
            />

            {/* Conteúdo Central */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center flex flex-col items-center">

                {/* Badge Emocional */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-block mb-8"
                >
                    <span className="px-6 py-2 bg-white/50 backdrop-blur-sm text-foreground/80 rounded-full text-sm font-medium border border-white/60 shadow-sm">
                        ☕ Seu momento merece um café melhor
                    </span>
                </motion.div>

                {/* Título Principal */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-6xl md:text-8xl font-bold mb-8 leading-[1.1] tracking-tight text-foreground"
                >
                    O café que{' '}
                    <span className="relative inline-block text-accent">
                        te abraça
                        <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                            <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                        </svg>
                    </span>
                </motion.h1>

                {/* Subtítulo */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-2xl font-light"
                >
                    Não importa como está o seu dia. <br className="hidden md:block" />
                    Aqui tem o café certo pra você agora.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
                >
                    <Link
                        href="/cardapio"
                        className="group px-8 py-4 bg-accent text-white rounded-full font-semibold text-lg shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                        Encontre sua xícara
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                    </Link>

                    <Link
                        href="/sobre"
                        className="px-8 py-4 bg-white/50 hover:bg-white text-foreground rounded-full font-medium text-lg border border-foreground/10 hover:border-foreground/20 transition-all duration-300"
                    >
                        Nossa história
                    </Link>
                </motion.div>

                {/* Social Proof / Info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-20 flex flex-wrap justify-center gap-8 text-sm font-medium text-foreground/50"
                >
                    <div className="flex items-center gap-2 bg-success/10 px-3 py-1 rounded-lg text-success-foreground bg-success">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                        </span>
                        Aberto agora
                    </div>
                    <div className="flex items-center gap-2">
                        <span>📍</span> 5 unidades
                    </div>
                    <div className="flex items-center gap-2">
                        <span>⭐</span> 4.9 de avaliação
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <div className="flex flex-col items-center gap-2 text-foreground/30 text-sm">
                    <span>Role para explorar</span>
                    <div className="w-5 h-8 border-2 border-foreground/30 rounded-full flex justify-center p-1">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            className="w-1 h-1 bg-foreground/50 rounded-full"
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
