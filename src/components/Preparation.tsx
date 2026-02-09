import { motion } from 'framer-motion'
import { SpaceBackground } from './SpaceBackground'
import { CheckCircle2, MessageSquare, Target, AlertTriangle, CalendarCheck, Lock } from 'lucide-react'

const checklistItems = [
    {
        icon: <MessageSquare className="w-6 h-6" />,
        number: "01",
        title: "Monitorea tu WhatsApp",
        desc: "Te contactaré personalmente para confirmar los detalles técnicos. Es indispensable que respondas para mantener tu cupo activo."
    },
    {
        icon: <Target className="w-6 h-6" />,
        number: "02",
        title: "Verifica tu Intención",
        desc: "Esta sesión es para personas listas para invertir en su expansión. Si solo buscas 'info gratis', por favor cancela para dar espacio a otro."
    },
    {
        icon: <AlertTriangle className="w-6 h-6" />,
        number: "03",
        title: "El Costo de la Inacción",
        desc: "Reflexiona antes de la llamada: ¿Cuánto te está costando (emocional y financieramente) seguir en el mismo lugar?"
    },
    {
        icon: <CheckCircle2 className="w-6 h-6" />,
        number: "04",
        title: "Construye Certeza",
        desc: "Mira los casos de éxito debajo. Necesito que vengas con la convicción de que es posible para ti también."
    }
]

export const Preparation = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center overflow-x-hidden pt-20 pb-20">
            {/* Alma Galáctica */}
            <SpaceBackground />

            <div className="relative z-10 container mx-auto px-4 max-w-6xl text-center">

                {/* Header de Éxito */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <div className="inline-flex items-center justify-center p-4 bg-green-500/10 rounded-full mb-6 border border-green-500/30 shadow-[0_0_30px_rgba(34,197,94,0.2)] animate-pulse-slow">
                        <CheckCircle2 className="w-12 h-12 text-green-400" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-cinzel text-white mb-6 leading-tight drop-shadow-lg">
                        ¡Tu Sesión de Claridad está <span className="text-gold-gradient">Confirmada</span>!
                    </h1>
                    <p className="text-lg text-white/80 font-montserrat max-w-2xl mx-auto leading-relaxed">
                        Has dado el primer paso hacia la materialización de tu propósito. <br />
                        Ahora, es vital que te prepares para aprovechar al máximo nuestros 45 minutos juntos.
                    </p>
                </motion.div>

                {/* Aviso Importante */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-red-500/10 border border-red-500/30 p-4 rounded-sm max-w-3xl mx-auto mb-16 flex items-center justify-center gap-3"
                >
                    <Lock className="w-5 h-5 text-red-400 flex-shrink-0" />
                    <p className="text-red-200/90 text-sm font-montserrat text-left">
                        <strong>IMPORTANTE:</strong> Si no asistes a la sesión sin aviso previo, el sistema bloqueará futuras reservas.
                    </p>
                </motion.div>

                {/* PASO 1: VIDEO BRIEFING */}
                <div className="mb-20">
                    <span className="text-[#A67C00] font-cinzel text-sm tracking-[0.4em] mb-4 block uppercase font-bold">PASO #1</span>
                    <h2 className="text-3xl font-cinzel text-white mb-2">Briefing de Apertura</h2>
                    <p className="text-white/50 text-sm mb-8 font-montserrat">(Mira este video de 3 minutos antes de nuestra llamada)</p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="w-full max-w-4xl mx-auto aspect-video bg-black/80 rounded-sm border border-white/20 shadow-2xl overflow-hidden group hover:border-[#A67C00]/50 transition-colors duration-500"
                    >
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/JzkVfsIDeGE"
                            title="Briefing Nodriza"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                        />
                    </motion.div>
                </div>

                {/* PASO 2: CHECKLIST */}
                <div className="mb-20 relative">
                    <div className="absolute inset-0 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />
                    <span className="text-[#A67C00] font-cinzel text-sm tracking-[0.4em] mb-8 block uppercase font-bold relative z-10">PASO #2</span>
                    <h2 className="text-3xl font-cinzel text-white mb-12 relative z-10">Garantiza tu <span className="text-gold-gradient">Éxito</span></h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto relative z-10">
                        {checklistItems.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + (idx * 0.1) }}
                                className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-sm text-left flex gap-6 hover:bg-white/10 transition-colors duration-300 group"
                            >
                                <div className="text-6xl font-cinzel text-white/5 font-bold group-hover:text-[#A67C00]/20 transition-colors duration-500">
                                    {item.number}
                                </div>
                                <div>
                                    <div className="flex items-center gap-3 mb-2 text-[#A67C00]">
                                        {item.icon}
                                        <h3 className="font-cinzel text-lg text-white font-bold tracking-wide">{item.title}</h3>
                                    </div>
                                    <p className="text-white/70 text-sm font-montserrat leading-relaxed border-l-2 border-white/10 pl-4 group-hover:border-[#A67C00] transition-colors duration-300">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* PASO 3: CALENDARIO */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-20 bg-gradient-to-br from-blue-900/40 to-black/40 border border-white/10 p-12 rounded-sm max-w-4xl mx-auto backdrop-blur-xl relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-[#A67C00] to-transparent opacity-50" />

                    <span className="text-[#A67C00] font-cinzel text-sm tracking-[0.4em] mb-4 block uppercase font-bold">PASO #3</span>
                    <h2 className="text-3xl font-cinzel text-white mb-6">Confirmación Definitiva</h2>
                    <p className="text-white/80 font-montserrat mb-8 text-lg">
                        He enviado una invitación a tu calendario. <br />
                        Por favor dale click en <strong className="text-[#FFD700]">"Añadir al calendario"</strong> y responde <strong className="text-[#FFD700]">"SÍ"</strong> a la asistencia.
                    </p>

                    <a
                        href="https://calendar.google.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-3 bg-white text-primary-navy px-8 py-4 rounded-sm font-bold font-cinzel tracking-wider hover:bg-[#FFD700] transition-colors duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                    >
                        <CalendarCheck className="w-5 h-5" />
                        IR A MI CALENDARIO
                    </a>
                </motion.div>

                {/* PASO 4: TESTIMONIOS */}
                <div className="mb-16">
                    <span className="text-[#A67C00] font-cinzel text-sm tracking-[0.4em] mb-8 block uppercase font-bold">PASO #4: INSPÍRATE</span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <div className="aspect-video bg-black rounded-sm border border-white/20 shadow-xl overflow-hidden">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/E2llff-52OA"
                                title="Testimonio 1"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                        <div className="aspect-video bg-black rounded-sm border border-white/20 shadow-xl overflow-hidden">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/qPiLfBx2vf4"
                                title="Testimonio 2"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>

                <button
                    onClick={() => window.location.href = '/'}
                    className="text-white/40 hover:text-white font-cinzel text-xs tracking-[0.2em] uppercase transition-colors border-b border-white/10 hover:border-white pb-1"
                >
                    Volver al Inicio
                </button>

            </div>
        </section>
    )
}
