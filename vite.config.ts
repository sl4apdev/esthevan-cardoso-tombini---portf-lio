import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react'; // 1. Importe o plugin do React

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    // 2. Adicione as duas linhas abaixo
    plugins: [react()],
    base: "/esthevan-cardoso-tombini---portfólio/",

    // Suas configurações existentes (estão perfeitas)
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});