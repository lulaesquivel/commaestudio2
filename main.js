const blob = document.getElementById('cursor-blob');

// --- Script para el cursor personalizado y efecto parallax ---
document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;

    // 1. Mover el cursor personalizado (blob)
    if (blob) {
        // Usamos requestAnimationFrame para un rendimiento más suave
        requestAnimationFrame(() => {
            blob.style.transform = `translate(${clientX - 20}px, ${clientY - 20}px)`;
        });
    }

    // 2. Mover las decoraciones del hero (efecto parallax)
    const heroSection = document.querySelector('#hero');
    if (heroSection && heroSection.matches(':hover')) {
        const decoraciones = document.querySelectorAll('.hero-decoracion');
        const { offsetWidth, offsetHeight } = heroSection;

        const xPos = (clientX / offsetWidth - 0.5) * 2;
        const yPos = (clientY / offsetHeight - 0.5) * 2;

        decoraciones.forEach(decoracion => {
            const speed = decoracion.getAttribute('data-speed');
            const x = xPos * speed;
            const y = yPos * speed;
            decoracion.style.transform = `translate(${x}px, ${y}px)`;
        });
    }
});

// --- Script para el Componente Antes/Después ---
function initBeforeAfterSlider(slider) {
    const afterWrapper = slider.querySelector('.before-after-slider__after-wrapper');
    const handle = slider.querySelector('.before-after-slider__handle');
    let isDragging = false;

    // Establecer el ancho de la imagen 'after' para que coincida con el contenedor
    const sliderWidth = slider.offsetWidth;
    afterWrapper.querySelector('img').style.setProperty('--slider-width', `${sliderWidth}px`);

    const onDrag = (e) => {
        if (!isDragging) return;

        // Usar eventos de touch o mouse según el dispositivo
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;

        const rect = slider.getBoundingClientRect();
        let position = (clientX - rect.left) / rect.width * 100;

        // Limitar la posición entre 0 y 100
        position = Math.max(0, Math.min(100, position));

        handle.style.left = `${position}%`;
        afterWrapper.style.width = `${position}%`;
    };

    const stopDragging = () => {
        isDragging = false;
    };

    // Eventos de Mouse
    slider.addEventListener('mousedown', () => isDragging = true);
    document.addEventListener('mouseup', stopDragging);
    document.addEventListener('mousemove', onDrag);

    // Eventos Táctiles (para móviles)
    slider.addEventListener('touchstart', () => isDragging = true);
    document.addEventListener('touchend', stopDragging);
    document.addEventListener('touchmove', onDrag);
}

// Inicializar todos los sliders que encuentre en la página
document.querySelectorAll('.before-after-slider').forEach(slider => {
    initBeforeAfterSlider(slider);
});

// --- Script para el menú hamburguesa ---
const menuBtn = document.querySelector('.menu-hamburguesa');
const navLinks = document.querySelector('nav ul');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('menu-abierto');
    menuBtn.classList.toggle('activo'); // <-- Esta es la línea nueva
});

// --- Script para la animación de Scroll Reveal ---
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // Si el elemento está en el viewport
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Opcional: Dejar de observar el elemento una vez que ha sido revelado
            observer.unobserve(entry.target);
        }
    });
}, {
    root: null, // Observa en relación al viewport
    rootMargin: '0px',
    threshold: 0.1 // Se activa cuando el 10% del elemento es visible
});

// Observar cada uno de los elementos con la clase .reveal
revealElements.forEach(element => {
    revealObserver.observe(element);
});

// --- Script para el cursor inmersivo en enlaces ---
const interactiveElements = document.querySelectorAll('a, button, .proyecto-item');

interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        blob.classList.add('link-hover');
    });
    el.addEventListener('mouseleave', () => {
        blob.classList.remove('link-hover');
    });
});

// --- Lógica del Selector de Servicios ---
const botonesSelector = document.querySelectorAll('.btn-selector');
const gruposServicios = document.querySelectorAll('.grupo-servicios');

if (botonesSelector.length > 0) {
    botonesSelector.forEach(boton => {
        boton.addEventListener('click', () => {
            // 1. Quitar estado activo a todos los botones
            botonesSelector.forEach(b => b.classList.remove('activo'));
            // 2. Activar el botón clickeado
            boton.classList.add('activo');

            // 3. Obtener el target (residencial o comercial)
            const targetId = boton.getAttribute('data-target');

            // 4. Ocultar todos los grupos y mostrar el correcto
            gruposServicios.forEach(grupo => {
                grupo.classList.remove('activo');
                if (grupo.id === targetId) {
                    grupo.classList.add('activo');
                }
            });
        });
    });
}