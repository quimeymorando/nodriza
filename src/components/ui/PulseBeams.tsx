
import { cn } from "../../utils/cn";

export const PulseBeams = ({
    className,
}: {
    className?: string;
    width?: number; // Kept for compatibility but unused
    height?: number; // Kept for compatibility but unused
    beams?: any[]; // Kept for compatibility but unused
}) => {
    return (
        <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
            <div className="absolute inset-0 bg-[#000B1A] opacity-90" />

            {/* Central Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#A67C00] opacity-20 blur-[100px] rounded-full animate-pulse" />

            {/* Moving Beams (CSS Animation) */}
            <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-[#A67C00] to-transparent opacity-50 animate-[beam_3s_infinite_linear]" style={{ animationDelay: '0s' }} />
            <div className="absolute top-0 left-3/4 w-[1px] h-full bg-gradient-to-b from-transparent via-[#FFD700] to-transparent opacity-50 animate-[beam_4s_infinite_linear]" style={{ animationDelay: '1s' }} />

            {/* Horizontal Beams */}
            <div className="absolute top-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#A67C00] to-transparent opacity-30 animate-[h-beam_5s_infinite_linear]" style={{ animationDelay: '0.5s' }} />
            <div className="absolute bottom-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#A67C00] to-transparent opacity-30 animate-[h-beam_6s_infinite_linear]" style={{ animationDelay: '2s' }} />

            <style>{`
        @keyframes beam {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes h-beam {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
        </div>
    );
};
