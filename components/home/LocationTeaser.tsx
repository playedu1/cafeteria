'use client';

import { motion } from 'framer-motion';

export function LocationTeaser() {
    return (
        <section className="py-24 bg-card relative">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                {/* Lado do Texto */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-accent font-bold tracking-wider uppercase text-sm mb-4 block">Nossos Espaços</span>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">Vem sentir de perto</h2>
                    <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
                        Nossas cafeterias foram desenhadas para serem extensões da sua sala de estar.
                        Música boa, wi-fi rápido e cheiro de café fresco o tempo todo.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-10">
                        {['⚡ Tem tomada', '👶 Espaço pra carrinho', '🪑 Mesa quieta', '🐶 Pet friendly'].map((item) => (
                            <span key={item} className="px-4 py-2 bg-background border border-border/30 rounded-full text-foreground/80 font-medium">
                                {item}
                            </span>
                        ))}
                    </div>

                    <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors">
                        Ver unidade mais próxima de você
                    </button>
                </motion.div>

                {/* Lado Visual (Placeholder Mapa/Foto) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative h-[400px] md:h-[500px] bg-muted rounded-[3rem] overflow-hidden shadow-2xl"
                >
                    {/* Decorativo */}
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent z-10" />

                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/50 z-0 bg-secondary/20">
                        <span className="text-lg font-medium">[Foto Real: Ambiente Interno Acolhedor]</span>
                    </div>

                    {/* Card Flutuante de Unidade */}
                    <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl z-20 shadow-lg border border-white/20">
                        <div className="flex justify-between items-start">
                            <div>
                                <h4 className="font-bold text-lg text-foreground">Unidade Centro</h4>
                                <p className="text-sm text-foreground/60">Rua das Flores, 123 - A 2km de você</p>
                            </div>
                            <div className="bg-success text-white text-xs font-bold px-2 py-1 rounded">ABERTO</div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
