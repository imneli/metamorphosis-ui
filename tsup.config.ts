import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/ui/components/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: false,
  clean: true,
  external: [
    'react',
    'react-dom',
    'class-variance-authority',
    'clsx',
    'tailwind-merge',
    'react-icons'
  ],
  treeshake: true,
  outDir: 'dist',
});