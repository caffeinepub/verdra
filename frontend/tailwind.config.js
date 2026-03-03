import typography from '@tailwindcss/typography';
import containerQueries from '@tailwindcss/container-queries';
import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['index.html', 'src/**/*.{js,ts,jsx,tsx,html,css}'],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px'
            }
        },
        extend: {
            colors: {
                border: 'oklch(var(--border))',
                input: 'oklch(var(--input))',
                ring: 'oklch(var(--ring) / <alpha-value>)',
                background: 'oklch(var(--background))',
                foreground: 'oklch(var(--foreground))',
                primary: {
                    DEFAULT: 'oklch(var(--primary) / <alpha-value>)',
                    foreground: 'oklch(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'oklch(var(--secondary) / <alpha-value>)',
                    foreground: 'oklch(var(--secondary-foreground))'
                },
                destructive: {
                    DEFAULT: 'oklch(var(--destructive) / <alpha-value>)',
                    foreground: 'oklch(var(--destructive-foreground))'
                },
                muted: {
                    DEFAULT: 'oklch(var(--muted) / <alpha-value>)',
                    foreground: 'oklch(var(--muted-foreground) / <alpha-value>)'
                },
                accent: {
                    DEFAULT: 'oklch(var(--accent) / <alpha-value>)',
                    foreground: 'oklch(var(--accent-foreground))'
                },
                popover: {
                    DEFAULT: 'oklch(var(--popover))',
                    foreground: 'oklch(var(--popover-foreground))'
                },
                card: {
                    DEFAULT: 'oklch(var(--card))',
                    foreground: 'oklch(var(--card-foreground))'
                },
                chart: {
                    1: 'oklch(var(--chart-1))',
                    2: 'oklch(var(--chart-2))',
                    3: 'oklch(var(--chart-3))',
                    4: 'oklch(var(--chart-4))',
                    5: 'oklch(var(--chart-5))'
                },
                sidebar: {
                    DEFAULT: 'oklch(var(--sidebar))',
                    foreground: 'oklch(var(--sidebar-foreground))',
                    primary: 'oklch(var(--sidebar-primary))',
                    'primary-foreground': 'oklch(var(--sidebar-primary-foreground))',
                    accent: 'oklch(var(--sidebar-accent))',
                    'accent-foreground': 'oklch(var(--sidebar-accent-foreground))',
                    border: 'oklch(var(--sidebar-border))',
                    ring: 'oklch(var(--sidebar-ring))'
                },
                /* VERDRA Brand Colors */
                verdra: {
                    'deep-forest': '#0F3D2E',
                    'emerald': '#1E7F4F',
                    'leaf': '#4CAF50',
                    'earth': '#6B4F2A',
                    'beige': '#F5F1E8',
                }
            },
            fontFamily: {
                heading: ['Montserrat', 'sans-serif'],
                body: ['Poppins', 'sans-serif'],
                sans: ['Poppins', 'sans-serif'],
                display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
                serif: ['Lora', 'Georgia', 'serif'],
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            boxShadow: {
                xs: '0 1px 2px 0 rgba(0,0,0,0.05)',
                'glow-sm': '0 0 10px rgba(76, 175, 80, 0.3), 0 0 20px rgba(76, 175, 80, 0.1)',
                'glow-md': '0 0 20px rgba(76, 175, 80, 0.4), 0 0 40px rgba(76, 175, 80, 0.15)',
                'glow-lg': '0 0 30px rgba(76, 175, 80, 0.5), 0 0 60px rgba(76, 175, 80, 0.2)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                },
                'float-up': {
                    '0%': { transform: 'translateY(100vh) rotate(0deg)', opacity: '0' },
                    '10%': { opacity: '0.6' },
                    '90%': { opacity: '0.3' },
                    '100%': { transform: 'translateY(-10vh) rotate(360deg)', opacity: '0' }
                },
                'light-ray': {
                    '0%, 100%': { opacity: '0.1', transform: 'scaleX(1)' },
                    '50%': { opacity: '0.3', transform: 'scaleX(1.1)' }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'float-up': 'float-up 8s linear infinite',
                'light-ray': 'light-ray 4s ease-in-out infinite',
            }
        }
    },
    plugins: [typography, containerQueries, animate]
};
