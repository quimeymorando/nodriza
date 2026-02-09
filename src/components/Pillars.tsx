import { motion } from 'framer-motion'
import { Sparkles, Sun, Landmark } from 'lucide-react'

const pillars = [
    {
        title: "SER",
        subtitle: "Estabilidad Interna",
        icon: <Sparkles className="w-8 h-8" />,
        items: [
            "Regulación emocional y Amor propio",
            "Auto-Confianza y Presencia",
            "Pertenencia y Tribu"
        ],
        delay: 0.1
    },
    {
        title: "SERVICIO",
        subtitle: "Claridad de Propósito",
        icon: <Sun className="w-8 h-8" />,
        items: [
            "Diseño de ofertas y Marca Personal",
            "Comunicación de alto impacto",
            "Expansión de tu mensaje al mundo"
        ],
        delay: 0.2
    },
    {
        title: "SOSTÉN",
        subtitle: "Bases Reales",
        icon: <Landmark className="w-8 h-8" />,
        items: [
            "Relación sana con el dinero",
            "Ventas y Acción Comercial",
            "Tecnología, IA y Funnels simples"
        ],
        delay: 0.3
    }
]

export const Pillars = () => {
    return (
        <section className="py-32 bg-white text-slate-900 border-y border-slate-100 overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-24">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[#A67C00] font-cinzel text-xs tracking-[0.4em] mb-4 block uppercase font-bold"
                    >
                        Ingeniería del Éxito
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-cinzel mb-8"
                    >
                        Los 3 Pilares de <span className="text-gold-gradient">NODRIZA</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-500 max-w-2xl mx-auto font-montserrat leading-relaxed"
                    >
                        No es solo ganar dinero. Es estabilizar tu vida en tres niveles fundamentales para una expansión real y sostenida.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {pillars.map((pillar, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: pillar.delay, duration: 0.6 }}
                            whileHover={{
                                y: -20,
                                transition: { duration: 0.3 }
                            }}
                            className="p-12 bg-white border border-[#A67C00] rounded-xl group transition-all duration-500 shadow-[0_10px_30px_-15px_rgba(166,124,0,0.15)] hover:shadow-[0_30px_60px_-10px_rgba(166,124,0,0.4)] hover:ring-1 hover:ring-[#A67C00] relative overflow-hidden flex flex-col items-center text-center"
                        >
                            {/* Card Sheen Effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#A67C00]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

                            {/* Background Glow on Hover */}
                            <div className="absolute inset-0 bg-[#A67C00]/0 group-hover:bg-[#A67C00]/[0.02] transition-colors duration-500" />

                            {/* Decorative background glyph */}
                            <span className="absolute -right-6 -top-6 text-[120px] font-cinzel text-slate-100 group-hover:text-[#A67C00]/10 transition-colors duration-700 pointer-events-none select-none">
                                {pillar.title.charAt(0)}
                            </span>

                            <motion.div
                                className="mb-8 p-5 bg-white rounded-full shadow-lg border border-slate-100 text-[#A67C00] group-hover:bg-[#A67C00] group-hover:text-white group-hover:border-[#A67C00] group-hover:shadow-[0_0_30px_rgba(166,124,0,0.5)] transition-all duration-500 z-10"
                            >
                                {pillar.icon}
                            </motion.div>

                            <h3 className="text-2xl font-cinzel mb-3 tracking-widest text-slate-900 group-hover:text-[#A67C00] transition-colors duration-300 z-10 font-bold">
                                {pillar.title}
                            </h3>
                            <p className="text-[#A67C00] font-bold mb-8 text-xs uppercase tracking-[0.2em] group-hover:text-slate-600 transition-colors z-10">{pillar.subtitle}</p>

                            <ul className="space-y-4 text-slate-600 text-sm font-montserrat w-full z-10">
                                {pillar.items.map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: 0.4 + (i * 0.1) }}
                                        className="flex items-center gap-3 justify-start"
                                    >
                                        <span className="w-1.5 h-1.5 bg-[#A67C00] rounded-full flex-shrink-0 group-hover:scale-150 group-hover:shadow-[0_0_10px_#A67C00] transition-all" />
                                        <span className="group-hover:text-slate-900 transition-colors uppercase text-[10px] tracking-wider text-left font-medium">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>

                            {/* Decorative bottom line */}
                            <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-gold-metallic group-hover:w-full transition-all duration-700 ease-in-out" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
