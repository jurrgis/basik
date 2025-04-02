// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

export default defineConfig({
    server: {
        host: true
    },

    vite: {
        resolve: {
            alias: {
                '@': '/src'
            }
        },
        plugins: [tailwind()]
    },
});