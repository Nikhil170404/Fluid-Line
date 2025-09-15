import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';
import { fileURLToPath, URL } from 'node:url';

// Get current directory in ES modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';
  
  return {
    plugins: [
      react({
        // Enable Fast Refresh
        fastRefresh: true,
        // Babel plugins for optimizations
        babel: {
          plugins: [
            // Remove console.log in production
            isProduction && [
              'babel-plugin-transform-remove-console',
              { exclude: ['error', 'warn'] }
            ]
          ].filter(Boolean)
        }
      }),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
        manifest: {
          name: 'WebCraft - Professional Web Development',
          short_name: 'WebCraft',
          description: 'Professional web development services at 30% cheaper than competitors',
          theme_color: '#3b82f6',
          background_color: '#ffffff',
          display: 'standalone',
          orientation: 'portrait',
          scope: '/',
          start_url: '/',
          icons: [
            {
              src: 'pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png'
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable'
            }
          ]
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg,webp,woff,woff2}'],
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'google-fonts-cache',
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
                },
                cacheKeyWillBeUsed: async ({ request }) => {
                  return `${request.url}?v=1`;
                }
              }
            },
            {
              urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'gstatic-fonts-cache',
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
                }
              }
            },
            {
              urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
              handler: 'CacheFirst',
              options: {
                cacheName: 'images-cache',
                expiration: {
                  maxEntries: 100,
                  maxAgeSeconds: 60 * 60 * 24 * 30 // 30 days
                }
              }
            }
          ]
        }
      })
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
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/styles/variables.scss";'
        }
      },
      devSourcemap: true
    },
    define: {
      __APP_VERSION__: JSON.stringify(process.env.npm_package_version || '1.0.0'),
      __BUILD_DATE__: JSON.stringify(new Date().toISOString())
    },
    esbuild: {
      // Remove console.log in production
      drop: isProduction ? ['console', 'debugger'] : []
    }
  };
});