import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { SpaceBackground } from './SpaceBackground'
import { Star, Rocket, Heart, ShieldCheck } from 'lucide-react'

const milestones = [
    {
        year: "El Inicio",
        title: "La Búsqueda",
        desc: "Como tú, sentía que tenía un potencial inmenso atrapado. Buscaba respuestas en libros, cursos y mentores, pero siempre faltaba una pieza para materializarlo en libertad real.",
        icon: <Star className="w-6 h-6" />
    },
    {
        year: "El Quiebre",
        title: "La Desconexión",
        desc: "Intenté seguir las reglas del mercado tradicional. 'Vende más, siente menos'. Me desconecté de mi esencia y, aunque facturaba, me sentía vacío. La incoherencia me estaba apagando.",
        icon: <ShieldCheck className="w-6 h-6" />
    },
    {
        year: "El Despertar",
        title: "Ingeniería del Ser",
        desc: "Entendí que el negocio es una extensión del alma. Creé un sistema que une la estructura (Sostén) con la energía (Ser). No tuve que elegir entre dinero y propósito: los integré.",
        icon: <Heart className="w-6 h-6" />
    },
    {
        year: "Hoy",
        title: "Misión Nodriza",
        desc: "Ahora, mi misión es entregarte este vehículo. Una 'Nave Nodriza' donde tu propósito encuentra tierra fértil y estructura sólida para expandirse sin límites.",
        icon: <Rocket className="w-6 h-6" />
    }
]

export const Story = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [0, -50])

    return (
        <section ref={containerRef} className="py-32 relative overflow-hidden bg-gradient-to-b from-[#001A33] via-[#001222] to-[#001A33]">
            {/* Alma Galáctica */}
            <SpaceBackground />

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                    {/* Columna Izquierda: Sticky Image */}
                    <div className="relative hidden lg:block h-fit sticky top-32">
                        <motion.div
                            style={{ y }}
                            className="aspect-[3/4] rounded-sm overflow-hidden border border-white/20 shadow-2xl relative z-20 group"
                        >
                            <img
                                src="https://caqodbqrdirvavlyldyp.supabase.co/storage/v1/object/public/recursos%20joaco/joaquin_alterman_style_vibe_1768237564971.png"
                                alt="Joaquín Alterman"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            {/* Overlay degradado */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                            <div className="absolute bottom-8 left-8 right-8 text-white">
                                <p className="font-cinzel text-2xl mb-2">Joaquín Alterman</p>
                                <p className="font-montserrat text-sm opacity-70 tracking-widest uppercase">Fundador de Nodriza</p>
                            </div>
                        </motion.div>
                        {/* Marcos decorativos */}
                        <div className="absolute -top-6 -left-6 w-full h-full border border-[#A67C00]/30 z-10 rounded-sm" />
                    </div>

                    {/* Columna Derecha: Timeline */}
                    <div className="flex flex-col justify-center">
                        <div className="mb-16">
                            <span className="text-[#A67C00] font-cinzel text-sm tracking-[0.4em] mb-4 block uppercase font-bold">
                                El Camino del Mentor
                            </span>
                            <h2 className="text-4xl md:text-5xl font-cinzel text-white leading-tight">
                                De la Búsqueda a la <span className="text-gold-gradient">Coherencia</span>
                            </h2>
                        </div>

                        <div className="relative border-l-2 border-white/10 ml-4 lg:ml-0 space-y-12 pb-12">
                            {milestones.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                                    className="relative pl-12"
                                >
                                    {/* Icono del Timeline */}
                                    <div className="absolute -left-[9px] top-0 bg-[#001A33] border border-[#A67C00] rounded-full p-2 text-[#A67C00] shadow-[0_0_15px_rgba(166,124,0,0.3)]">
                                        {item.icon}
                                    </div>

                                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-sm hover:-translate-y-1 transition-transform duration-300">
                                        <span className="text-[#A67C00] font-cinzel text-xs tracking-widest uppercase mb-2 block font-bold">
                                            {item.year}
                                        </span>
                                        <h3 className="text-xl font-cinzel text-white mb-4">{item.title}</h3>
                                        <p className="text-white/70 font-montserrat leading-relaxed text-sm">
                                            {item.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="mt-8 pl-12"
                        >
                            <p className="text-white text-lg font-cinzel mb-8 italic">
                                "No te enseño teoría. Te entrego el mapa exacto que yo recorro cada día."
                            </p>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    )
}
