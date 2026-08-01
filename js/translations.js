document.addEventListener("DOMContentLoaded", () => {
    const translations = {
        es: {
            // LOYALTY
            "project-showcase-loyalty": "LEALTAD",
            "project-description-loyalty": "Ritmo de tráiler cinematográfico, pistas de voz y diseño de efectos de sonido para Red Dead Redemption 2.",
            
            "text-project-loyalty": "El objetivo principal de este proyecto era <span class='highlight-text'>construir un tráiler cinematográfico de alto impacto</span> para Red Dead Redemption 2. El desafío visual y estructural radicaba en mantener un <span class='highlight-text'>flujo narrativo sólido</span> sin saturar la pantalla, al tiempo que se establecía un ritmo atmosférico potente adaptado para plataformas digitales.",
            
            "text-strategy-loyalty": "Mediante un proceso enfocado en el <span class='highlight-text'>montaje narrativo basado en el sonido</span>, se ejecutaron soluciones de edición específicas <span class='highlight-text'>utilizando Premiere Pro</span>. Las pistas de voz aisladas y el diseño de efectos de sonido en capas se estructuraron en una <span class='highlight-text'>reproducción de audio precisa</span>, asegurando un ritmo fluido que dicta los cortes visuales y mantiene al espectador enganchado.",

            "text-final-loyalty": "Para garantizar un estándar profesional de alta gama, se aplicó un <span class='highlight-text'>formato panorámico nativo de 16:9 con bandas negras cinematográficas personalizadas</span>. El resultado final es un activo pulido que cuenta con un <span class='highlight-text'>ritmo visual fluido y una integración de audio nítida</span>, diseñado estratégicamente para destacar en un portafolio profesional desde el primer segundo.",

            "rol-loyalty": "Editor de video y diseñador de sonido",
            "format-loyalty": "Horizontal (16:9) / 1920x1080",

            // DROP
            "project-showcase-drop": "LANZAMIENTO",
            "project-description-drop": "Diseño gráfico comercial y composición visual para el estreno de la colección Air Jordan 4",
            
            "text-project-drop": "El objetivo principal de este proyecto era <span class='highlight-text'>crear un cartel comercial de alto impacto</span> para el lanzamiento de un producto de la marca Jordan. El desafío visual consistía en <span class='highlight-text'>integrar tipografía audaces y elementos de interfaz de usuario</span> sobre una textura compleja sin comprometer la legibilidad ni la presentación prémium del producto.",
            
            "text-strategy-drop": "Utilizando una <span class='highlight-text'>estructura centrada en el producto sobre una textura</span> de veta de madera gris, organicé la información para lograr un impacto inmediato. Las soluciones incluyeron la <span class='highlight-text'>aplicación de tipografía delineada y un kerning preciso</span> en el titular principal, creando contraste contra el fondo oscuro mientras se realza el producto en sí.",

            "text-final-drop": "Para finalizar el recurso, me centré en la jerarquía visual. <span class='highlight-text'>Integré una barra de búsqueda de interfaz de usuario realista</span> y coloqué los logotipos del producto y la marca en la parte inferior para lograr una identidad visual profesional. El póster final ofrece un <span class='highlight-text'>reconocimiento de marca inmediato y llamadas a la acción claras</span> dentro de un entorno sofisticado y texturizado, listo para su distribución digital.",

            "rol-drop": "Diseñador gráfico",

            // OCTANO
            "project-showcase-octane": "OCTANO",
            "project-description-octano": "Creación de un montaje agresivo y audio inmersivo para la exhibición de la energía automotriz moderna",
            
            "text-project-octane": "El objetivo principal de este proyecto era <span class='highlight-text'>transformar material de archivo automotriz de alta velocidad</span> para conectar eficazmente con las audiencias en las <span class='highlight-text'>redes sociales a través de reels verticales</span>. El desafío visual y estructural consistía en mantener <span class='highlight-text'>un ritmo de edición agresivo y un diseño de sonido impactante</span> sin saturar la pantalla, optimizando al mismo tiempo los recursos para el consumo móvil acelerado.",
            
            "text-strategy-octane": "Mediante un proceso enfocado en el <span class='highlight-text'>corte rítmico preciso y un diseño de sonido de alto impacto</span>, se implementaron soluciones específicas <span class='highlight-text'>utilizando Premiere Pro</span>. Se ejecutaron fotogramas clave de posición meticulosos para el <span class='highlight-text'>formato 9:16</span>, asegurando un flujo continuo que mantiene la atención del espectador fija en la acción principal y los puntos focales de la pieza.",

            "text-final-octane": "Para garantizar un estándar profesional de alta gama, <span class='highlight-text'>se aplicó la corrección de color con Lumetri y la unificación</span> de recursos visuales. El resultado final es un activo pulido con un <span class='highlight-text'>contraste vibrante y una armonía audiovisual impecable</span>, diseñado estratégicamente para destacar en su entorno digital y retener a los espectadores desde el primer segundo.",

            "rol-octane": "Edición de video, diseño de sonido, corrección de color",

            // TRANSLATES
            "nav-home": "Inicio",
            "nav-projects": "Proyectos",
            "nav-skills": "Habilidades",
            "nav-about-me": "Sobre mí",
            "nav-contact": "Contacto",
            "hero-subtitle": "Editor de Video y Productor Multimedia",
            "btn-primary": "Ver portafolio",
            "btn-secondary": "Descargar CV",
            "projects-title-bg": "Proyectos",
            "projects-title": "Proyectos",
            "projects-subtitle": "Precisión técnica, <span>sensibilidad multimedia</span>",
            "badge-top-short": "Cortometrajes",
            "badge-top-commercial": "Comercial y Social",
            "badge-top-digital": "Digital e Interactivo",
            "project-name-loyalty": "Lealtad",
            "project-name-octane": "Octano",
            "project-name-drop": "Lanzamiento",
            "btn-explore": "Todos los Proyectos",
            "skills-title-bg": "Habilidades",
            "skills-title": "Habilidades",
            "skills-subtitle": "Un conjunto de herramientas especializado para la <span>narrativa cinematográfica y las experiencias interactivas</span>",
            "post-production": "Postproducción<br>Sonido",
            "art-direction": "Dirección de Arte<br>Diseño UI",
            "interactive": "Interactivo<br>Tecnología Web",
            "about-title-bg": "Sobre mí",
            "about-title": "Sobre mí",
            "progress-badge": "ING | B2-C1 EN PROGRESO",
            "native-badge": "ESP | C2 NATIVO",
            "about-lead": "Mi valor principal radica en la versatilidad narrativa: <strong><br>4 años de experiencia en producción multimedia para dirigir, editar y postproducir historias visuales de alto impacto.</strong>",
            "about-body": "No me limito a cortar clips; creo atmósferas inmersivas. Al fusionar la narrativa cinematográfica con los medios interactivos, <strong>transformo conceptos en experiencias que cautivan a la audiencia.</strong>",
            "btn-resume-download": "Descargar CV completa",
            "contact-title": "¿Listo para el siguiente nivel?",
            "contact-subtitle": "Construyamos tu próxima experiencia visual",
            "contact-name": "Nombre <span>*</span>",
            "contact-email": "Correo <span>*</span>",
            "contact-phone": "Teléfono",
            "contact-message": "Cuéntame sobre tu proyecto <span>*</span>",
            "btn-submit": "Enviar mensaje",
            "hero-title": "PORTAFOLIO",
            "hero-subtitle-portfolio": "Una colección de <span>piezas comerciales</span>, <span>narrativas cinematográficas</span> y <span>proyectos multimedia</span>",
            "sidebar-title": "Categoría",
            "selected-filter-text": "Todas",
            "all": "Todas",
            "short-films": "Cortometrajes <span>(1)</span>",
            "commercial": "Comercial y Social <span>(2)</span>",
            "digital": "Digital e Interactivo <span></span>",
            "project-loyalty": "LEALTAD",
            "project-octane": "OCTANO",
            "project-drop": "LANZAMIENTO",
            "cta-title": "¿Quieres hablar sobre tu proyecto?",
            "btn-send-message": "Enviar mensaje",
            "step-item-project": "01. Desafío del Proyecto",
            "step-item-strategy": "02. Estrategia y Desarrollo Técnico",
            "step-item-final": "03. Optimización y Finalización",
            "format": "Formato",
            "year": "Año",
            "cta-text": "¿Te gusta este estilo<br>para tu marca?",
            "btn-project-cta": `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                        </svg> Hablemos`,
        }
    };

    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
        if (!el.hasAttribute("data-original")) {
            el.setAttribute("data-original", el.innerHTML);
        }
    });

    function setLanguage(lang) {
        elements.forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (lang === "es" && translations.es[key]) {
                el.innerHTML = translations.es[key];
            } else if (lang === "en") {
                el.innerHTML = el.getAttribute("data-original");
            }
        });
        localStorage.setItem("portfolio-lang", lang);

        const langToggleBtn = document.getElementById("lang-toggle-btn");
        if (langToggleBtn) {
            langToggleBtn.setAttribute("data-lang", lang);
        }
    }

    const savedLang = localStorage.getItem("portfolio-lang");
    if (savedLang) {
        setLanguage(savedLang);
    } else {
        const browserLang = navigator.language || navigator.userLanguage;
        const initialLang = browserLang.startsWith("es") ? "es" : "en";
        setLanguage(initialLang);
    }

    // 5. Evento del botón para alternar
    const langToggleBtn = document.getElementById("lang-toggle-btn");
    if (langToggleBtn) {
        langToggleBtn.addEventListener("click", () => {
            const currentLang = localStorage.getItem("portfolio-lang") || "en";
            const newLang = currentLang === "en" ? "es" : "en";
            setLanguage(newLang);
        });
    }
});