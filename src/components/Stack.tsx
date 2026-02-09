import { motion } from 'framer-motion'
import { Zap, Users, Video, BookOpen } from 'lucide-react'

const stackItems = [
    {
        title: "Mentoria Semanal en Vivo",
        icon: <Video className="w-6 h-6" />,
        desc: "4 Encuentros directos conmigo de 90 minutos. Pura estrategia, desbloqueo y dirección. Sin filtros.",
        highlight: true
    },
    {
        title: "Plataforma Nodriza 24/7",
        icon: <BookOpen className="w-6 h-6" />,
        desc: "Acceso de por vida a las grabaciones y píldoras tácticas. Tu biblioteca personal de expansión.",
        highlight: false
    },
    {
        title: "Círculo Privado (Comunidad)",
        icon: <Users className="w-6 h-6" />,
        desc: "Networking con otros líderes que vibran en tu frecuencia. El entorno define tu estándar.",
        highlight: false
    },
    {
        title: "Bonus: Scripts de Venta",
        icon: <Zap className="w-6 h-6" />,
        desc: "Mis guiones exactos para cerrar llamadas High-Ticket sin sentir que vendes, solo sirves.",
        highlight: false
    }
]

export const Stack = () => {
    return (
        <section className="py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl relative z-10">

                <div className="text-center mb-20">
                    <span className="text-[#A67C00] font-cinzel text-sm tracking-[0.4em] mb-4 block uppercase font-bold">
                        La Oferta Irresistible
                    </span>
                    <h2 className="text-4xl md:text-5xl font-cinzel text-slate-900 leading-tight">
                        Todo lo que incluye tu <span className="text-gold-gradient">Acceso</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {stackItems.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`p-6 md:p-8 rounded-sm border transition-all duration-300 relative group overflow-hidden ${item.highlight
                                ? 'bg-[#001A33] border-[#A67C00] text-white shadow-2xl scale-105 md:col-span-2'
                                : 'bg-[#FDFCFB] border-slate-100 text-slate-800 hover:shadow-xl'
                                }`}
                        >
                            {item.highlight && (
                                <div className="absolute top-0 right-0 bg-[#A67C00] text-white text-xs font-bold px-4 py-1 font-cinzel tracking-widest uppercase">
                                    Core del Programa
                                </div>
                            )}

                            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                                <div className={`p-4 rounded-full flex-shrink-0 ${item.highlight ? 'bg-white/10 text-[#FFD700]' : 'bg-[#A67C00]/10 text-[#A67C00]'
                                    }`}>
                                    {item.icon}
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-center mb-2 flex-wrap gap-2">
                                        <h3 className={`font-cinzel text-xl font-bold ${item.highlight ? 'text-white' : 'text-slate-900'}`}>
                                            {item.title}
                                        </h3>
                                    </div>
                                    <p className={`font-montserrat text-sm leading-relaxed ${item.highlight ? 'text-white/80' : 'text-slate-600'}`}>
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action sin precio explicito */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="max-w-2xl mx-auto text-center"
                >
                    <p className="font-cinzel text-3xl md:text-5xl text-[#A67C00] mb-8 font-bold">
                        Precio: Invaluable
                    </p>

                    <button className="button-gold-metallic px-10 py-5 text-white font-bold rounded-full font-cinzel tracking-widest shadow-gold text-lg w-full md:w-auto hover:scale-105 transition-transform">
                        APLICAR AHORA
                    </button>
                    <p className="mt-4 text-xs text-slate-400 font-montserrat">
                        *Solo aceptamos 10 personas por generación.
                    </p>
                </motion.div>

            </div>
        </section>
    )
}
