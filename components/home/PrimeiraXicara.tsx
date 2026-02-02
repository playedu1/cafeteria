'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export function PrimeiraXicara() {
    return (
        <section className="py-20 px-6">
            <div className="max-w-6xl mx-auto relative bg-accent rounded-[3rem] overflow-hidden">
                {/* Background Circles */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/5 rounded-full -translate-x-1/3 translate-y-1/3 blur-xl" />

                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-12 md:p-20 gap-10 text-accent-foreground">
                    <div className="max-w-xl text-center md:text-left">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-bold mb-6"
                        >
                            Sua primeira xícara é especial
                        </motion.h2>
                        <p className="text-xl opacity-90 mb-8 font-medium">
                            Nunca nos visitou? Venha experimentar nossa "Xícara de Boas Vindas" por um preço simbólico. Queremos te conquistar pelo sabor.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <Link href="/contato" className="px-8 py-4 bg-foreground text-background rounded-full font-bold text-lg hover:bg-black hover:text-white transition-colors shadow-lg">
                                Quero meu voucher (R$ 5)
                            </Link>
                            <Link href="/cardapio" className="px-8 py-4 bg-transparent border-2 border-accent-foreground/30 text-accent-foreground rounded-full font-bold text-lg hover:bg-accent-foreground/5 transition-colors">
                                Ver cardápio completo
                            </Link>
                        </div>
                    </div>

                    {/* Ilustração ou Foto do Café */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative w-64 h-64 md:w-80 md:h-80 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 shadow-2xl"
                    >
                        <span className="text-8xl">☕</span>

                        {/* Badge flutuante */}
                        <div className="absolute -top-4 -right-4 bg-white text-accent font-black text-xl w-24 h-24 rounded-full flex items-center justify-center rotate-12 shadow-md">
                            R$ 5
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
