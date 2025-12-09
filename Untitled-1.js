// --- 1. LÓGICA DE CAMBIO DE IDIOMA ---

// Elemento del botón de idioma
const btnIdioma = document.getElementById("btn-idioma");

// Diccionario de textos en ES y EN
const textos = {
    es: {
        titulo: "Conociendo a Perú",
        navTrad: "Tradición",
        navGast: "Gastronomía",
        navLug: "Lugares emblemáticos",
        headerTitle: "Perú",
        headerDesc:
            "Perú es un destino que deslumbra con su riqueza cultural, histórica y natural. Desde la imponente ciudadela de Machu Picchu hasta las misteriosas Líneas de Nazca, cada rincón guarda un legado único.",
        headerBtn: "Conocer más",
        c1Title: "Gastronomía",
        c1Text:
            "El ceviche peruano, fresco y lleno de sabor, es uno de los platos más representativos de Perú.",
        c2Title: "Lugares emblemáticos",
        c2Text:
            "Desde Machu Picchu hasta las Líneas de Nazca, Perú guarda tesoros únicos en cada rincón.",
        c3Title: "Tradición",
        c3Text:
            "Las festividades y costumbres peruanas reflejan la riqueza cultural y la diversidad del país.",
        videoTitle: "Explora Perú",
        videoText: "Un recorrido por su cultura, paisajes y tradiciones únicas.",
    },
    en: {
        titulo: "Discover Peru",
        navTrad: "Tradition",
        navGast: "Gastronomy",
        navLug: "Landmarks",
        headerTitle: "Peru",
        headerDesc:
            "Peru is a destination that dazzles with its cultural, historical, and natural richness. From the majestic Machu Picchu to the mysterious Nazca Lines, every corner holds a unique legacy.",
        headerBtn: "Learn more",
        c1Title: "Gastronomy",
        c1Text:
            "Peruvian ceviche, fresh and full of flavor, is one of the country's most iconic dishes.",
        c2Title: "Landmarks",
        c2Text:
            "From Machu Picchu to the Nazca Lines, Peru preserves unique treasures at every turn.",
        c3Title: "Tradition",
        c3Text:
            "Peruvian festivals and traditions reflect the country's cultural wealth and diversity.",
        videoTitle: "Explore Peru",
        videoText: "A journey through its culture, landscapes, and unique traditions.",
    },
};

// Función para obtener saludo personalizado
function getGreeting(lang) {
    const hour = new Date().getHours();
    let greeting;

    if (lang === 'es') {
        if (hour >= 6 && hour < 12) {
            greeting = "Buenos días";
        } else if (hour >= 12 && hour < 18) {
            greeting = "Buenas tardes";
        } else {
            greeting = "Buenas noches";
        }
        return `${greeting}, bienvenido a Conociendo Perú`;
    } else { // lang === 'en'
        if (hour >= 6 && hour < 12) {
            greeting = "Good morning";
        } else if (hour >= 12 && hour < 18) {
            greeting = "Good afternoon";
        } else {
            greeting = "Good evening";
        }
        return `${greeting}, welcome to Discover Peru`;
    }
}


// Función principal para aplicar textos según idioma
function cambiarIdioma(idioma) {
    const t = textos[idioma];

    // Encabezado y Menú
    document.querySelector(".titulo").textContent = t.titulo;
    document.querySelector(".nav-tradicion").textContent = t.navTrad;
    document.querySelector(".nav-gastronomia").textContent = t.navGast;
    document.querySelector(".nav-lugares").textContent = t.navLug;

    // Sección Principal (Header)
    document.querySelector(".header-title").textContent = t.headerTitle;
    document.querySelector(".header-desc").textContent = t.headerDesc;
    document.querySelector(".header-btn").textContent = t.headerBtn;

    // Carrusel
    document.querySelector(".c1-title").textContent = t.c1Title;
    document.querySelector(".c1-text").textContent = t.c1Text;
    document.querySelector(".c2-title").textContent = t.c2Title;
    document.querySelector(".c2-text").textContent = t.c2Text;
    document.querySelector(".c3-title").textContent = t.c3Title;
    document.querySelector(".c3-text").textContent = t.c3Text;

    // Sección de Video
    document.querySelector(".video-title").textContent = t.videoTitle;
    document.querySelector(".video-text").textContent = t.videoText;
    
    // 3️⃣ MENSAJE DE BIENVENIDA DINÁMICO
    // Se asume que hay un elemento con la clase '.welcome-message' en el HTML (ver nota abajo)
    const welcomeElement = document.querySelector(".welcome-message");
    if (welcomeElement) {
        welcomeElement.textContent = getGreeting(idioma);
    }

    // Guardar preferencia del usuario y actualizar el botón/lang
    localStorage.setItem("idioma", idioma);
    btnIdioma.textContent = idioma === "es" ? "EN" : "ES";
    document.documentElement.lang = idioma;
}

// Inicialización: Detectar idioma guardado o usar español por defecto
let idiomaActual = localStorage.getItem("idioma") || "es";
cambiarIdioma(idiomaActual);

// Evento del botón de idioma
btnIdioma.addEventListener("click", () => {
    idiomaActual = idiomaActual === "es" ? "en" : "es";
    cambiarIdioma(idiomaActual);
});


// --- 2. SLIDER DINÁMICO AUTOMÁTICO + MANUAL (CARRUSEL) ---

// Elementos del carrusel
const carouselItems = document.querySelectorAll(".carousel-item");
const prevButton = document.querySelector(".carousel-btn.prev");
const nextButton = document.querySelector(".carousel-btn.next");
let currentIndex = 0;
let slideInterval; // Variable para almacenar el ID del intervalo de auto-slide

// Función para mostrar el ítem actual y ocultar los demás
function updateCarousel() {
    carouselItems.forEach((item, index) => {
        if (index === currentIndex) {
            item.style.display = 'flex'; 
            item.setAttribute('aria-current', 'true');
        } else {
            item.style.display = 'none';
            item.setAttribute('aria-current', 'false');
        }
    });
}

// Mueve el carrusel al siguiente ítem (función usada por botones y auto-slide)
function nextSlide() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    updateCarousel();
}

// Mueve el carrusel al ítem anterior
function prevSlide() {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    updateCarousel();
}

// Inicia el auto-avance del carrusel
function startAutoSlide() {
    // 4000 ms = 4 segundos de duración para cada diapositiva
    slideInterval = setInterval(nextSlide, 4000); 
}

// Detiene el auto-avance (útil para la interacción del usuario)
function stopAutoSlide() {
    clearInterval(slideInterval);
}

// Event Listeners para los botones del carrusel (manuales)
nextButton.addEventListener('click', () => {
    stopAutoSlide(); // Detiene el auto-slide al interactuar
    nextSlide();
    startAutoSlide(); // Reinicia el auto-slide después de un breve tiempo
});

prevButton.addEventListener('click', () => {
    stopAutoSlide(); // Detiene el auto-slide al interactuar
    prevSlide();
    startAutoSlide(); // Reinicia el auto-slide
});

// Inicializa el carrusel al cargar la página
updateCarousel();
startAutoSlide(); // 👈 Inicia el movimiento automático


// --- 3. MENÚ DESPLEGABLE (HOVER/CLICK con JavaScript) ---

// Se asume que el menú tiene una estructura:
// <li class="menu-item-parent"> <a href="#">Tradición</a> <ul class="submenu">...</ul> </li>

const menuParentItems = document.querySelectorAll('.navbar li'); // Selecciona todos los <li> dentro del menú
const activeClass = 'active-dropdown'; // Clase CSS para mostrar el submenú

menuParentItems.forEach(item => {
    const submenu = item.querySelector('ul');
    if (submenu) {
        // Opción 1: Desplegar con clic (Toggle)
        item.addEventListener('click', (e) => {
             // Evita que el clic en el ítem navegue si tiene submenú, si no lo deseas
            // e.preventDefault(); 
            
            // Cierra otros submenús abiertos (opcional, para una mejor experiencia)
            menuParentItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove(activeClass);
                }
            });

            // Alterna la clase 'active-dropdown'
            item.classList.toggle(activeClass);
        });

        // Opción 2: Desplegar con hover (añade la clase para el CSS)
        item.addEventListener('mouseenter', () => {
            item.classList.add(activeClass);
        });

        // Opción 3: Ocultar al salir del hover
        item.addEventListener('mouseleave', () => {
            // Se puede añadir un pequeño retardo aquí, si se quiere dar tiempo al usuario para entrar en el submenú
            item.classList.remove(activeClass);
        });
    }
});

// Cierra el menú si se hace clic fuera de él
document.addEventListener('click', (e) => {
    // Si el clic no fue dentro del menú de navegación, cierra todos los desplegables
    if (!e.target.closest('.navbar')) {
        menuParentItems.forEach(item => {
            item.classList.remove(activeClass);
        });
    }
});