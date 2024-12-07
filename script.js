// Selecciona elementos clave
const hamburger = document.querySelector('.hamburger');
const modal = document.querySelector('.modal');

// Función para alternar el menú modal
const toggleMenu = () => {
    hamburger.classList.toggle('active'); // Animación del botón
    modal.classList.toggle('active');    // Activar deslizamiento del modal
};

// Función para cerrar el menú si se hace clic fuera
const closeMenuOnClickOutside = (event) => {
    if (event.target === modal) {
        hamburger.classList.remove('active');
        modal.classList.remove('active');
    }
};

// Agrega eventos
hamburger.addEventListener('click', toggleMenu);
modal.addEventListener('click', closeMenuOnClickOutside);
