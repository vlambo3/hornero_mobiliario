document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('testimonials-container');
    
    const prevDesktop = document.getElementById('prev-btn-desktop');
    const nextDesktop = document.getElementById('next-btn-desktop');
    const prevMobile = document.getElementById('prev-btn-mobile');
    const nextMobile = document.getElementById('next-btn-mobile');

    // Función para obtener el ancho exacto de una tarjeta más su espacio (gap)
    const getScrollDistance = () => {
        const firstCard = container.querySelector('.testimonial-card');
        if (!firstCard) return 350;

        // getBoundingClientRect obtiene la medida decimal exacta de la tarjeta en celulares
    const cardWidth = firstCard.getBoundingClientRect().width;
        
        const style = window.getComputedStyle(container);
        const gap = parseFloat(style.gap) || 24;
        
        return firstCard.offsetWidth + gap;
    };

    // Giro circular hacia la derecha (Siguiente)
    const scrollNext = () => {
        const cards = container.querySelectorAll('.testimonial-card');
        if (cards.length === 0) return;

        const firstCard = cards[0];
        const scrollAmount = getScrollDistance();

        // 1. Movemos físicamente la primera tarjeta al final del contenedor de forma instantánea
        container.appendChild(firstCard);
        
        // 2. Compensamos el scroll hacia la izquierda al instante para que el usuario no note el salto
        container.scrollLeft -= scrollAmount;

        // 3. Ejecutamos el desplazamiento suave hacia la derecha mostrando la siguiente tarjeta
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    };

    // Giro circular hacia la izquierda (Anterior)
    const scrollPrev = () => {
        const cards = container.querySelectorAll('.testimonial-card');
        if (cards.length === 0) return;

        const lastCard = cards[cards.length - 1];
        const scrollAmount = getScrollDistance();

        // 1. Movemos físicamente la última tarjeta al principio de forma instantánea
        container.insertBefore(lastCard, cards[0]);
        
        // 2. Compensamos el scroll hacia la derecha al instante
        container.scrollLeft += scrollAmount;

        // 3. Ejecutamos el desplazamiento suave hacia la izquierda
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    };

    // Asignar eventos a los botones de escritorio y móviles
    if (prevDesktop) prevDesktop.addEventListener('click', scrollPrev);
    if (nextDesktop) nextDesktop.addEventListener('click', scrollNext);
    
    if (prevMobile) prevMobile.addEventListener('click', scrollPrev);
    if (nextMobile) nextMobile.addEventListener('click', scrollNext);
});