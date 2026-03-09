import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
export default defineConfig({
    plugins: [
        vue({
            template: {
                compilerOptions: {
                    // Treat all tags starting with 'vscode-' as custom elements
                    isCustomElement: function (tag) { return tag.startsWith('vscode-'); }
                }
            }
        })
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
        },
    },
    build: {
        target: 'esnext',
        outDir: 'build',
        rollupOptions: {
            output: {
                entryFileNames: "assets/[name].js",
                chunkFileNames: "assets/[name].js",
                assetFileNames: "assets/[name].[ext]",
            },
        },
    },
});
