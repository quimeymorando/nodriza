import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
    {
        question: "¿Es para mí si estoy empezando de cero?",
        answer: "Absolutamente. Nodriza está diseñado para construir las bases desde la raíz. Si no tienes una oferta clara, la diseñaremos juntos. Si no tienes estructura, te la daremos. Es mejor empezar con ingeniería sólida que reconstruir sobre escombros después."
    },
    {
        question: "¿Cuánto tiempo necesito invertir semanalmente?",
        answer: "No buscamos que trabajes más, sino mejor. El programa requiere unas 4-5 horas semanales de foco profundo (Deep Work). No te daremos 'relleno', solo acciones de alta palanca para mover la aguja de tu negocio."
    },
    {
        question: "¿Qué pasa si no puedo asistir a las sesiones en vivo?",
        answer: "Todo queda grabado en alta definición y subido a tu plataforma en menos de 24 horas. Además, tienes acceso al canal de soporte para dejar tus preguntas antes de la sesión si sabes que no podrás estar."
    },
    {
        question: "¿En qué se diferencia de otros programas de 'High Ticket'?",
        answer: "La mayoría te enseña solo 'Ventas' o solo 'Marketing'. Nodriza integra el SER (mentalidad y energía) con el SOSTÉN (estrategia pura). Sin coherencia interna, ninguna estrategia de ventas se sostiene en el tiempo. Nosotros trabajamos ambas."
    }
]

export const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    return (
        <section className="py-32 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-4xl relative z-10">

                <div className="text-center mb-16">
                    <span className="text-[#A67C00] font-cinzel text-sm tracking-[0.4em] mb-4 block uppercase font-bold">
                        Dudas Frecuentes
                    </span>
                    <h2 className="text-4xl md:text-5xl font-cinzel text-slate-900 leading-tight">
                        Claridad antes del <span className="text-gold-gradient">Compromiso</span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className="bg-white border border-slate-200 rounded-sm overflow-hidden transition-all duration-300 hover:border-[#A67C00]/30 hover:shadow-lg"
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                                className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4 group"
                            >
                                <span className="flex items-center gap-4">
                                    <HelpCircle className={`w-5 h-5 transition-colors ${activeIndex === idx ? 'text-[#A67C00]' : 'text-slate-300'}`} />
                                    <span className={`font-cinzel text-lg font-bold transition-colors ${activeIndex === idx ? 'text-[#A67C00]' : 'text-slate-800'}`}>
                                        {faq.question}
                                    </span>
                                </span>
                                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${activeIndex === idx ? 'rotate-180 text-[#A67C00]' : ''}`} />
                            </button>

                            <AnimatePresence>
                                {activeIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 md:p-8 pt-0 pl-16 md:pl-20 border-t border-dashed border-slate-100">
                                            <p className="font-montserrat text-slate-600 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
