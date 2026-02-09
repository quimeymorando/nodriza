import { useEffect, useState } from 'react'

export const SpaceBackground = () => {
    const [stars, setStars] = useState<{ id: number, top: string, left: string, size: string, delay: string }[]>([])
    const [shootingStars, setShootingStars] = useState<{ id: number, top: string, left: string, delay: string }[]>([])

    useEffect(() => {
        const generatedStars = Array.from({ length: 45 }).map((_, i) => ({
            id: i,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            size: `${Math.random() * 2 + 1}px`,
            delay: `${Math.random() * 5}s`
        }))
        setStars(generatedStars)

        const generatedShootingStars = Array.from({ length: 2 }).map((_, i) => ({
            id: i,
            top: `${Math.random() * 40}%`,
            left: `${Math.random() * 100 + 10}%`,
            delay: `${Math.random() * 8 + 2}s`
        }))
        setShootingStars(generatedShootingStars)
    }, [])

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10 bg-celeste-hermoso">
            {stars.map(star => (
                <div
                    key={star.id}
                    className="absolute rounded-full bg-white animate-star shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                    style={{
                        top: star.top,
                        left: star.left,
                        width: star.size,
                        height: star.size,
                        animationDelay: star.delay
                    }}
                />
            ))}

            {shootingStars.map(star => (
                <div
                    key={star.id}
                    className="shooting-star opacity-70"
                    style={{
                        top: star.top,
                        left: star.left,
                        animationDelay: star.delay
                    }}
                />
            ))}

            {/* Light orbs for depth */}
            <div className="absolute top-[20%] left-[10%] w-[40%] h-[40%] bg-blue-400/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-[20%] right-[10%] w-[40%] h-[40%] bg-gold-400/5 blur-[120px] rounded-full" />
        </div>
    )
}
