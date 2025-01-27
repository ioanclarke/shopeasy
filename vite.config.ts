import {defineConfig} from 'vite';
import solidPlugin from 'vite-plugin-solid';
import checker from "vite-plugin-checker";
// import devtools from 'solid-devtools/vite';

export default defineConfig({
    base: "",
    plugins: [
        /*
        Uncomment the following line to enable solid-devtools.
        For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
        */
        // devtools(),
        solidPlugin(),
        checker({
            typescript: true
        })
    ],
    server: {
        port: 3000,
    },
    build: {
        target: 'esnext',
        outDir: './docs',
        emptyOutDir: true
    },
});
