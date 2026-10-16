// landing.js (Versión unificada y limpia)

// 1. Configuración unificada de Tailwind (si no la pones en el HTML)
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', 'sans-serif'],
            },
            colors: {
                brandDark: '#1A1D20',
                brandGreen: '#25D366',
                brandAccent: '#2E7D32',
                cardShadow: 'rgba(46, 125, 50, 0.08)',
                brandBrown: '#3A3030',
                brandLabel: '#A57C72',
                brandBtnRose: '#DA8B8B',
                brandTextDark: '#1E1E1E',
                brandTextMuted: '#6B7280',
                cardBgOffset: '#F7F7F8'
            }
        }
    }
}

// 2. Lógica de interactividad del DOM
document.addEventListener('DOMContentLoaded', function() {
    
    // Control del Navbar al hacer scroll
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.classList.add(
                    'bg-[#2A1B12]/40', 
                    'backdrop-blur-md', 
                    'border-b', 
                    'border-white/10',
                    'shadow-sm'
                );
            } else {
                navbar.classList.remove(
                    'bg-[#2A1B12]/40', 
                    'backdrop-blur-md', 
                    'border-b', 
                    'border-white/10',
                    'shadow-sm'
                );
            }
        });
    }

    // Control del Menú Hamburguesa Móvil (Única instancia)
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    
    if (btn && menu) {
        // 1. Abrir/Cerrar al hacer clic en el botón hamburguesa
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        // 2. Cerrar automáticamente al hacer clic en cualquier opción del menú
        const menuLinks = menu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
            });
        });
    }
});