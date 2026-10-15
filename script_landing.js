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
                        cardShadow: 'rgba(46, 125, 50, 0.08)'
                    }
                }
            }
        }

    document.addEventListener('DOMContentLoaded', function() {
        const navbar = document.getElementById('navbar');

        // Lógica para cambiar al fondo marrón nuboso al hacer scroll
        if (navbar) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 20) {
                    // Fondo marrón cálido semi-transparente con desenfoque suave
                    navbar.classList.add(
                        'bg-[#2A1B12]/40', 
                        'backdrop-blur-md', 
                        'border-b', 
                        'border-white/10',
                        'shadow-sm'
                    );
                } else {
                    // Vuelve a ser 100% transparente al estar arriba del todo
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

        // Lógica del menú móvil
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        if (btn && menu) {
            btn.addEventListener('click', () => {
                menu.classList.toggle('hidden');
            });
        }
    });        