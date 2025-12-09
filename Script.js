

<script>
    const btn = document.getElementById("btn-idioma");

    let idioma = "ES"; // idioma inicial

    btn.addEventListener("click", () => {
        if (idioma === "ES") {
            cambiarIngles();
            idioma = "EN";
            btn.textContent = "ES";
        } else {
            cambiarEspañol();
            idioma = "ES";
            btn.textContent = "EN";
        }
    });

    function cambiarIngles() {
        document.querySelector(".titulo").textContent = "Knowing Peru";
        document.querySelector(".nav-tradicion").textContent = "Tradition";
        document.querySelector(".nav-gastronomia").textContent = "Gastronomy";
        document.querySelector(".nav-lugares").textContent = "Landmarks";

        document.querySelector(".header-title").textContent = "Peru";
        document.querySelector(".header-desc").textContent =
            "Peru dazzles with its cultural, historical and natural richness. From the imposing city of Machu Picchu to the mysterious Nazca Lines, every corner preserves a unique legacy.";
        document.querySelector(".header-btn").textContent = "Learn more";

        document.querySelector(".c1-title").textContent = "Gastronomy";
        document.querySelector(".c1-text").textContent =
            "Peruvian ceviche, fresh and full of flavor, is one of Peru's most iconic dishes.";

        document.querySelector(".c2-title").textContent = "Landmarks";
        document.querySelector(".c2-text").textContent =
            "From Machu Picchu to the Nazca Lines, Peru holds unique treasures in every corner.";

        document.querySelector(".c3-title").textContent = "Tradition";
        document.querySelector(".c3-text").textContent =
            "Peruvian festivities and customs reflect the cultural richness and diversity of the country.";

        document.querySelector(".video-title").textContent = "Explore Peru";
        document.querySelector(".video-text").textContent =
            "A journey through its culture, landscapes and unique traditions.";
    }

    function cambiarEspañol() {
        document.querySelector(".titulo").textContent = "Conociendo a Perú";
        document.querySelector(".nav-tradicion").textContent = "Tradición";
        document.querySelector(".nav-gastronomia").textContent = "Gastronomía";
        document.querySelector(".nav-lugares").textContent = "Lugares emblemáticos";

        document.querySelector(".header-title").textContent = "Perú";
        document.querySelector(".header-desc").textContent =
            "Perú es un destino que deslumbra con su riqueza cultural, histórica y natural. Desde la imponente ciudadela de Machu Picchu hasta las misteriosas Líneas de Nazca, cada rincón guarda un legado único.";
        document.querySelector(".header-btn").textContent = "Conocer más";

        document.querySelector(".c1-title").textContent = "Gastronomía";
        document.querySelector(".c1-text").textContent =
            "El ceviche peruano, fresco y lleno de sabor, es uno de los platos más representativos de Perú.";

        document.querySelector(".c2-title").textContent = "Lugares emblemáticos";
        document.querySelector(".c2-text").textContent =
            "Desde Machu Picchu hasta las Líneas de Nazca, Perú guarda tesoros únicos en cada rincón.";

        document.querySelector(".c3-title").textContent = "Tradición";
        document.querySelector(".c3-text").textContent =
            "Las festividades y costumbres peruanas reflejan la riqueza cultural y la diversidad del país.";

        document.querySelector(".video-title").textContent = "Explora Perú";
        document.querySelector(".video-text").textContent =
            "Un recorrido por su cultura, paisajes y tradiciones únicas.";
    }
</script>
