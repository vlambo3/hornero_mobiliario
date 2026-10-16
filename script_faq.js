document.addEventListener('DOMContentLoaded', () => {
    const faqCards = document.querySelectorAll('[data-faq]');

    faqCards.forEach(card => {
        const btn = card.querySelector('.faq-btn');
        const icon = card.querySelector('.faq-icon');

        btn.addEventListener('click', () => {
            const isActive = card.classList.contains('active');

            // Opcional: Si deseas que se cierren las demás al abrir una, descomenta la siguiente línea:
            /*
            faqCards.forEach(otherCard => {
                otherCard.classList.remove('active');
                otherCard.querySelector('.faq-icon').textContent = '+';
                otherCard.querySelector('.faq-answer').style.display = 'none';
            });
            */

            if (isActive) {
                card.classList.remove('active');
                icon.textContent = '+';
            } else {
                card.classList.add('active');
                icon.textContent = '−';
            }
        });
    });
});