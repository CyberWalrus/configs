import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import type { UserConfig } from 'vite';
import { defineConfig } from 'vite';

export const defineCustomConfig = (config: UserConfig) =>
    defineConfig({
        ...config,
        css: {
            modules: {
                generateScopedName: '[local]_[hash:base64:4]',
                localsConvention: 'camelCaseOnly',
            },
            ...config?.css,
        },
        plugins: [react(), ...(config?.plugins ?? [])],
        resolve: {
            ...config?.resolve,
            alias: {
                $__mocks__: resolve(__dirname, './src/__mocks__'),
                $__tests__: resolve(__dirname, './src/__tests__'),
                $app: resolve(__dirname, './src/app'),
                $entities: resolve(__dirname, './src/entities'),
                $features: resolve(__dirname, './src/features'),
                $pages: resolve(__dirname, './src/pages'),
                $shared: resolve(__dirname, './src/shared'),
                $types: resolve(__dirname, './src/types'),
                $widgets: resolve(__dirname, './src/widgets'),
                ...config?.resolve?.alias,
            },
        },
    });