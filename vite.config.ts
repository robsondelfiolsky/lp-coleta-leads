import { defineConfig, loadEnv } from "vite";
import studioCreatorComponentTagger from "@dyad-sh/react-vite-component-tagger";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => {
  // Load .env / .env.local / .env.[mode] / .env.[mode].local into
  // process.env so server-side plugin code (Vite middleware, plugins
  // reading process.env.POSTGRES_URL etc.) can pick up secrets the
  // same way a regular Node process would. The empty prefix loads ALL
  // keys, not just VITE_-prefixed ones. Studio-creator's
  // <skyone-config-panel> writes credentials to .env.local at runtime —
  // without this hoist, every plugin doing
  // `new Pool({connectionString: process.env.POSTGRES_URL})` sees
  // undefined and the app errors with "POSTGRES_URL is not configured".
  const env = loadEnv(mode, process.cwd(), "");
  for (const [key, value] of Object.entries(env)) {
    if (process.env[key] === undefined) {
      process.env[key] = value;
    }
  }

  return {
    // Use relative asset paths so the generated app works when hosted
    // under a repository path on GitHub Pages.
    base: "./",
    server: {
      host: "::",
      port: 8080,
      // O preview roda atrás de um reverse-proxy TLS num host dinâmico
      // (`<app>-<ws>.<base>`). O Vite 6 bloqueia hosts desconhecidos por
      // padrão (o ping do HMR e o próprio HTML tomariam 403), então liberamos
      // qualquer host — o acesso já é gateado por edge-auth/cookie de preview
      // antes de chegar aqui.
      allowedHosts: true,
      // Sem isto o cliente HMR tenta `wss://<host>:<porta-dev>/` e falha atrás
      // do proxy (a porta interna do Vite não é exposta). Fixa a conexão do
      // cliente na borda pública (wss/443) — o proxy encaminha o upgrade ao
      // Vite. `VITE_HMR_CLIENT_PORT` permite override (dev local em http).
      hmr: {
        protocol: process.env.VITE_HMR_PROTOCOL || "wss",
        clientPort: process.env.VITE_HMR_CLIENT_PORT
          ? Number(process.env.VITE_HMR_CLIENT_PORT)
          : 443,
      },
    },
    plugins: [studioCreatorComponentTagger(), react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
