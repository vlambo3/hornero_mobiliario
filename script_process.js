tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
                    },
                    colors: {
                        brandBrown: '#3A3030',      /* Warm dark brown from CTA banner */
                        brandLabel: '#A57C72',      /* Muted rose/brown for uppercase labels */
                        brandBtnRose: '#DA8B8B',    /* Rose/coral color for contact button */
                        brandGreen: '#25D366',      /* WhatsApp green */
                        brandTextDark: '#1E1E1E',   /* Primary title dark font */
                        brandTextMuted: '#6B7280',  /* Body text muted gray */
                        cardBgOffset: '#F7F7F8'     /* Subtle gray shape offset background */
                    }
                }
            }
        }

document.addEventListener('DOMContentLoaded', function() {
            const btn = document.getElementById('mobile-menu-btn');
            const menu = document.getElementById('mobile-menu');

            if (btn && menu) {
                btn.addEventListener('click', () => {
                    menu.classList.toggle('hidden');
                });
            }
        });