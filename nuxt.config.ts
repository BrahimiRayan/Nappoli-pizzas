import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: ['@nuxt/image', '@nuxt/ui', '@nuxtjs/leaflet'],
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabasePublishableKey: process.env.SUPABASE_PUBLISHABLE_KEY,
    },

  },

   icon: {
    // Mode serveur local : inclut les icônes dans le bundle serveur
    serverBundle: 'local',
    
    // Optionnel : bundle client pour les icônes fréquentes
    clientBundle: {
      scan: true, // Scanne automatiquement les icônes utilisées
      sizeLimitKb: 256, // Limite de taille
      // Ou spécifiez manuellement les icônes courantes
      icons: [
        'lucide:home',
        'lucide:book-open',
        'lucide:moon',
        'lucide:sun',
        'lucide:menu',
        'lucide:x',
        'lucide:arrow-right',
        'lucide:door-closed-locked',
        'lucide:mouse-pointer-click'
      ]
    },
    
    // Mode de rendu (css est plus léger)
    mode: 'css',
    
    // Timeout plus long (optionnel)
    fetchTimeout: 3000
  }
})