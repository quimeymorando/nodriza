import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, Sparkles, Bot } from 'lucide-react'
import { getBotResponse, getInitialGreeting } from '../utils/chatLogic'
import type { Message } from '../utils/chatLogic'

interface ChatWidgetProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    onBooking: () => void;
}

export const ChatWidget = ({ isOpen, setIsOpen, onBooking }: ChatWidgetProps) => {
    const [messages, setMessages] = useState<Message[]>([])
    const [inputValue, setInputValue] = useState("")
    const [isTyping, setIsTyping] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    // Cargar mensaje inicial al abrir por primera vez (o al montar si queremos que esté listo)
    useEffect(() => {
        if (messages.length === 0) {
            setMessages([getInitialGreeting()])
        }
    }, [])

    // Auto-scroll al fondo
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages, isTyping])

    const handleSendMessage = async (text: string) => {
        if (!text.trim()) return

        // Añadir mensaje de usuario
        const userMsg: Message = {
            id: Date.now().toString(),
            text: text,
            sender: 'user',
            timestamp: new Date()
        }
        setMessages(prev => [...prev, userMsg])
        setInputValue("")
        setIsTyping(true)

        // Simular latencia de "pensamiento"
        setTimeout(() => {
            // Check especial para booking
            if (text.includes("Agendar") || text.includes("Reservar") || text.includes("Listo")) {
                const bookingMsg: Message = {
                    id: Date.now().toString(),
                    text: "¡Esa es la actitud! Vamos a agendar tu llamada de claridad ahora mismo para desatar tu potencial.",
                    sender: 'bot',
                    timestamp: new Date(),
                    options: ["🚀 IR A LA AGENDA"]
                }
                setMessages(prev => [...prev, bookingMsg])
                setIsTyping(false)
                return
            }

            const botMsg = getBotResponse(text)
            setMessages(prev => [...prev, botMsg])
            setIsTyping(false)
        }, 1500)
    }

    const handleOptionClick = (opt: string) => {
        if (opt.includes("IR A LA AGENDA")) {
            setIsOpen(false)
            onBooking()
        } else {
            handleSendMessage(opt)
        }
    }

    return (
        <div className="fixed bottom-6 right-6 z-50 font-montserrat">

            {/* Botón Flotante (Toggle) */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ scale: 0, rotate: 180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: -180 }}
                        whileHover={{ scale: 1.1 }}
                        onClick={() => setIsOpen(true)}
                        className="w-16 h-16 bg-[#001A33] border-2 border-[#A67C00] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(166,124,0,0.5)] group relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gold-gradient opacity-0 group-hover:opacity-20 transition-opacity" />
                        <Bot className="w-8 h-8 text-[#A67C00]" />

                        {/* Notificación Badge */}
                        <div className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-[#001A33] animate-pulse" />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Ventana de Chat */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        className="bg-[#001222] border border-[#A67C00]/50 w-[90vw] max-w-[400px] h-[600px] max-h-[80vh] rounded-lg shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-[#001A33] p-4 flex justify-between items-center border-b border-white/10 relative">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#A67C00] to-yellow-300 p-[1px]">
                                    <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                                        <Sparkles className="w-5 h-5 text-[#FFD700]" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-white font-cinzel font-bold text-sm">Nodriza AI</h3>
                                    <p className="text-green-400 text-xs flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                                        En línea
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white/50 hover:text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Body (Mensajes) */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-[#A67C00]/30 scrollbar-track-transparent">
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, x: msg.sender === 'user' ? 20 : -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`max-w-[85%] p-3 rounded-lg text-sm leading-relaxed ${msg.sender === 'user'
                                        ? 'bg-[#A67C00] text-white rounded-br-none'
                                        : 'bg-white/10 text-white/90 rounded-bl-none border border-white/5'
                                        }`}>
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}

                            {/* Indicador de escribiendo */}
                            {isTyping && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex justify-start"
                                >
                                    <div className="bg-white/10 p-3 rounded-lg rounded-bl-none flex gap-1">
                                        <span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce delay-0" />
                                        <span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce delay-100" />
                                        <span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce delay-200" />
                                    </div>
                                </motion.div>
                            )}

                            {/* Opciones Rápidas (Solo si el último mensaje es del bot y tiene opciones) */}
                            {!isTyping && messages[messages.length - 1]?.sender === 'bot' && messages[messages.length - 1]?.options && (
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {messages[messages.length - 1].options?.map((opt, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => handleOptionClick(opt)}
                                            className="text-xs bg-white/5 hover:bg-[#A67C00]/20 border border-[#A67C00]/30 text-[#A67C00] hover:text-white px-3 py-1.5 rounded-full transition-colors"
                                        >
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Footer (Input) */}
                        <div className="p-3 bg-[#001A33] border-t border-white/10 flex gap-2">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                                placeholder="Escribe tu duda aquí..."
                                className="flex-1 bg-black/30 text-white text-sm rounded-full px-4 py-2 border border-white/10 focus:border-[#A67C00] outline-none transition-colors"
                            />
                            <button
                                onClick={() => handleSendMessage(inputValue)}
                                className="p-2 bg-[#A67C00] rounded-full text-white hover:bg-[#8a6800] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={!inputValue.trim()}
                            >
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
