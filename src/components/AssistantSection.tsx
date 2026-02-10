import { motion } from 'framer-motion'
import { Bot } from 'lucide-react'
import { PulseBeams } from './ui/PulseBeams'

interface AssistantSectionProps {
    onOpenChat: () => void;
}

export const AssistantSection = ({ onOpenChat }: AssistantSectionProps) => {
    return (
        <section className="py-16 md:py-24 relative overflow-hidden bg-[#000B1A]">
            <div className="absolute inset-0 z-0">
                <PulseBeams className="w-full h-full" />
            </div>

            <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-[#001A33]/80 to-[#001222]/80 backdrop-blur-sm border border-[#A67C00]/30 p-12 rounded-2xl shadow-[0_0_50px_rgba(166,124,0,0.15)] relative overflow-hidden group"
                >
                    {/* Efecto de brillo al hacer hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" />

                    <div className="w-20 h-20 mx-auto bg-[#001A33] rounded-full flex items-center justify-center border-2 border-[#A67C00] mb-6 shadow-lg relative z-20">
                        <Bot className="w-10 h-10 text-[#FFD700]" />
                        <span className="absolute -top-1 -right-1 flex h-4 w-4">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-cinzel text-white mb-4 relative z-20">
                        ¿MÁS <span className="text-gold-gradient">DUDAS</span>?
                    </h2>

                    <p className="text-white/70 font-montserrat text-lg mb-8 max-w-2xl mx-auto relative z-20">
                        Si estás listo para entrar pero tienes una pregunta específica, usa mi IA entrenada.
                    </p>

                    <button
                        onClick={onOpenChat}
                        className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-[#A67C00] px-8 py-3 rounded-full font-cinzel tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(166,124,0,0.4)] relative z-20"
                    >
                        <Bot className="w-5 h-5" />
                        HABLAR CON NODRIZA AI
                    </button>

                    <p className="mt-6 text-xs text-white/30 font-montserrat relative z-20">
                        *Solo para aspirantes comprometidos.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
