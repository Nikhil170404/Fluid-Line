import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'node:url';
import { readFileSync } from 'node:fs';

// Get current directory in ES modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Read package.json to get version
const getPackageVersion = () => {
  try {
    const packageJson = JSON.parse(readFileSync(path.join(__dirname, 'package.json'), 'utf8'));
    return packageJson.version || '1.0.0';
  } catch {
    return '1.0.0';
  }
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';
  const packageVersion = getPackageVersion();
  
  return {
    plugins: [
      react({
        // Enable Fast Refresh
        fastRefresh: true,
        // Removed problematic babel plugins
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@components': path.resolve(__dirname, './src/components'),
        '@pages': path.resolve(__dirname, './src/pages'),
        '@contexts': path.resolve(__dirname, './src/contexts'),
        '@hooks': path.resolve(__dirname, './src/hooks'),
        '@utils': path.resolve(__dirname, './src/utils'),
        '@assets': path.resolve(__dirname, './src/assets')
      }
    },
    server: {
      port: 3000,
      host: true,
      open: true,
      hmr: {
        overlay: true
      }
    },
    preview: {
      port: 3000,
      host: true,
      open: true
    },
    build: {
      target: 'esnext',
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
      minify: 'esbuild',
      cssMinify: true,
      rollupOptions: {
        output: {
          manualChunks: {
            // Vendor chunk for React and related libraries
            vendor: ['react', 'react-dom', 'react-router-dom'],
            // Animation libraries
            animations: ['framer-motion'],
            // UI components
            ui: ['@headlessui/react', '@heroicons/react'],
            // Utils
            utils: ['react-hot-toast', 'react-intersection-observer']
          },
          assetFileNames: (assetInfo) => {
            const info = assetInfo.name.split('.');
            const extType = info[info.length - 1];
            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
              return `images/[name]-[hash][extname]`;
            }
            if (/woff|woff2|eot|ttf|otf/i.test(extType)) {
              return `fonts/[name]-[hash][extname]`;
            }
            return `assets/[name]-[hash][extname]`;
          },
          chunkFileNames: 'js/[name]-[hash].js',
          entryFileNames: 'js/[name]-[hash].js'
        }
      },
      chunkSizeWarningLimit: 1000,
      // Optimize dependencies
      optimizeDeps: {
        include: [
          'react',
          'react-dom',
          'react-router-dom',
          'framer-motion',
          '@headlessui/react',
          '@heroicons/react/24/outline',
          '@heroicons/react/24/solid'
        ]
      }
    },
    css: {
      modules: {
        localsConvention: 'camelCase'
      },
      devSourcemap: true
    },
    define: {
      __APP_VERSION__: JSON.stringify(packageVersion),
      __BUILD_DATE__: JSON.stringify(new Date().toISOString())
    },
    esbuild: {
      // Remove console.log in production (simpler method)
      drop: isProduction ? ['console', 'debugger'] : []
    }
  };
});