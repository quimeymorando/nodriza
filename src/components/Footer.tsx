
export const Footer = () => {
    return (
        <footer className="py-10 bg-primary-navy border-t border-[#A67C00]/20 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#A67C00]/50 to-transparent" />

            <div className="container mx-auto px-4 text-center relative z-10">
                <h2 className="text-2xl md:text-3xl font-cinzel text-[#A67C00] font-bold tracking-[0.2em] mb-2">
                    TIERRA DORADA
                </h2>

                <p className="font-cinzel text-white/60 text-xs md:text-sm tracking-widest mb-6">
                    AMOR <span className="mx-2 text-[#A67C00]">•</span> CONCIENCIA <span className="mx-2 text-[#A67C00]">•</span> ABUNDANCIA
                </p>

                <div className="text-white/30 text-[10px] font-montserrat">
                    <p>&copy; {new Date().getFullYear()} NODRIZA | Escuela de Programación de la Realidad. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}
