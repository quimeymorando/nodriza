export type Message = {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
    options?: string[]; // Opciones de respuesta rápida para el usuario
}

const INITIAL_GREETING = "¡Hola! Soy la Inteligencia de Nodriza. He analizado miles de patrones de éxito y fracaso en negocios holísticos. ¿Cuál es tu mayor obstáculo ahora mismo para escalar?";

const FALLBACK_RESPONSE = "Interesante. Para darte la respuesta exacta que desbloquee tu situación, necesito que seas más específico. ¿Es un tema de estrategia (Sostén) o de mentalidad (Ser)?";

// Base de conocimiento simplificada con enfoque persuasivo (Russell Brunson Style)
const KNOWLEDGE_BASE = [
    {
        keywords: ['precio', 'costo', 'caro', 'dinero', 'inversión'],
        response: "El precio es solo un filtro de compromiso. La pregunta real no es cuánto cuesta, sino ¿cuunto te está costando NO tener esto? Si sigues haciendo lo mismo, seguirás obteniendo lo mismo. Nodriza no es un gasto, es la inversión que imprime dinero si sigues el mapa.",
        options: ["Quiero saber el precio exacto", "Entiendo, estoy listo"]
    },
    {
        keywords: ['tiempo', 'horario', 'agenda', 'duración'],
        response: "Todos tenemos las mismas 24 horas. La diferencia es el foco. Nodriza requiere 4-5 horas de 'Deep Work' semanal. No buscamos llenarte de tareas, sino eliminar lo que no sirve. ¿Tienes 4 horas para construir tu libertad o prefieres seguir ocupado sin avanzar?",
        options: ["Tengo el tiempo", "Tengo dudas con los horarios"]
    },
    {
        keywords: ['garantia', 'seguro', 'funciona', 'riesgo'],
        response: "El único riesgo real es quedarte donde estás. Pero entiendo tu miedo. Si aplicas el sistema y no ves resultados, el problema no es el sistema. Aún así, filtramos tanto la entrada que es casi imposible fallar si ejecutas. No vendemos seguros, vendemos certezas para quienes actúan.",
        options: ["Estoy listo para actuar", "Quiero ver testimonios"]
    },
    {
        keywords: ['principiante', 'cero', 'empezando', 'nuevo'],
        response: "¡Perfecto! Eres un lienzo en blanco. Es más fácil construir un rascacielos en terreno vacío que remodelar una casa vieja. Te daremos los cimientos perfectos desde el día 1. No necesitas experiencia, necesitas hambre.",
        options: ["Tengo hambre de éxito", "¿Qué necesito tener?"]
    },
    {
        keywords: ['info', 'información', 'detalles', 'que es'],
        response: "Nodriza es una Ingeniería Holística de Negocios. Unimos la Estrategia (Embudos, Ofertas, Tráfico) con el Ser (Mentalidad, Energía). Es el vehículo para facturar $5k-$10k/mes sirviendo desde tu propósito. ¿Estás buscando un curso más o una transformación real?",
        options: ["Transformación Real", "Solo curioseando"]
    },
    {
        keywords: ['hola', 'buenos dias', 'buenas tardes', 'hey'],
        response: "¡Saludos, viajero! Veo que el destino te ha traído aquí. Estoy listo para ayudarte a determinar si Nodriza es el vehículo para tu expansión. ¿Qué te detiene hoy?",
        options: ["Miedo a invertir", "No sé vender", "Me falta claridad"]
    },
    {
        keywords: ['humano', 'persona', 'joaco', 'soporte', 'ayuda'],
        response: "Entiendo que quieras hablar con una persona. La única forma de hablar directamente con Joaquin o su equipo es agendando tu llamada de selección. No tenemos chat de soporte, tenemos llamadas de transformación.",
        options: ["Quiero Agendar Ahora", "Ver testimonios"]
    },
    {
        keywords: ['testimonio', 'pruebas', 'caso de exito', 'funciona'],
        response: "Las historias de éxito son el combustible de la creencia. Hemos ayudado a cientos de personas a desbloquear su potencial. Pero el mejor testimonio será el tuyo.",
        options: ["Quiero ser el próximo caso de éxito", "Quiero Agendar Ahora"]
    },
    {
        keywords: ['agendar', 'reservar', 'cita', 'llamada', 'quiero empezar', 'listo'],
        response: "Esa es la actitud de un líder. No dudas, actúas. Vamos a agendar esa llamada para cambiar tu realidad ahora mismo.",
        options: ["🚀 IR A LA AGENDA"]
    }
];

export const getBotResponse = (input: string): Message => {
    const lowerInput = input.toLowerCase();

    // Buscar coincidencia por keywords
    const match = KNOWLEDGE_BASE.find(item =>
        item.keywords.some(keyword => lowerInput.includes(keyword))
    );

    return {
        id: Date.now().toString(),
        text: match ? match.response : FALLBACK_RESPONSE,
        sender: 'bot',
        timestamp: new Date(),
        options: match ? match.options : ["Hablar con un humano", "Ver testimonios"]
    };
};

export const getInitialGreeting = (): Message => ({
    id: 'init',
    text: INITIAL_GREETING,
    sender: 'bot',
    timestamp: new Date(),
    options: ["El dinero/inversión", "El tiempo/agenda", "Miedo a fallar", "Falta de claridad"]
});
