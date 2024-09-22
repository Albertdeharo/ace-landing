import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ace-landing/', // Asegúrate de reemplazar 'ace-landing' con el nombre exacto de tu repositorio
});
