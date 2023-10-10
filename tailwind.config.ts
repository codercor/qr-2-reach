import type {Config} from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {},

    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [{
            mytheme: {

                "primary": "#bf4d0b",

                "secondary": "#dbb9f7",

                "accent": "#ef4fa2",

                "neutral": "#2d1a2d",

                "base-100": "#382d43",

                "info": "#3a5ecb",

                "success": "#169c74",

                "warning": "#f0a038",

                "error": "#ea7680",
            },
        }]
    }
}
export default config
