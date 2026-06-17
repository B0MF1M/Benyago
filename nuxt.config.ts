export default defineNuxtConfig({
  srcDir: 'app',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    '@vueuse/nuxt',
    'nuxt-jsonld'
  ],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Banyago | Carreto, Transporte e Frete em Salvador e Região',
      htmlAttrs: { lang: 'pt-BR' },
      meta: [
        {
          name: 'description',
          content: 'Banyago — carreto, frete, transporte de cargas, mudança, transporte escolar, motorista particular e locação de veículos em Salvador, Lauro de Freitas, Camaçari, Simões Filho e toda Região Metropolitana da Bahia. Atendimento 24h no WhatsApp.'
        },
        {
          name: 'keywords',
          content: 'carreto Salvador, frete Salvador, transporte de carga Salvador, mudança Salvador, transporte escolar Salvador, motorista particular Salvador, locação de veículos Salvador, van para eventos Salvador, transporte executivo Salvador, freteamento Bahia, carreto Lauro de Freitas, carreto Camaçari, frete Simões Filho, frete região metropolitana Salvador, transporte empresarial Salvador, logística Salvador, caminhão de carga Salvador, transporte de mudança Salvador, frete rápido Salvador, carreto barato Salvador, transporte particular Bahia, aluguel de van Salvador, transporte escolar Bahia, motorista de aplicativo alternativo Salvador'
        },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'Banyago Transporte' },
        { name: 'theme-color', content: '#1a1aff' },
        { name: 'geo.region', content: 'BR-BA' },
        { name: 'geo.placename', content: 'Salvador, Bahia' },
        { name: 'geo.position', content: '-12.9714;-38.5014' },
        { name: 'ICBM', content: '-12.9714, -38.5014' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://banyago.com.br' },
        { property: 'og:title', content: 'Banyago | Carreto, Frete e Transporte em Salvador — Atendimento 24h' },
        { property: 'og:description', content: 'Carreto, frete, mudança, transporte escolar, motorista particular e locação de veículos em Salvador e Região Metropolitana da Bahia. Solicite agora pelo WhatsApp!' },
        { property: 'og:image', content: 'https://banyago.com.br/images/og-image.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:locale', content: 'pt_BR' },
        { property: 'og:site_name', content: 'Banyago Transporte' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Banyago | Carreto, Frete e Transporte em Salvador' },
        { name: 'twitter:description', content: 'Carreto, frete, mudança, transporte escolar e motorista particular em Salvador e região. Atendimento 24h!' },
        { name: 'twitter:image', content: 'https://banyago.com.br/images/og-image.jpg' }
      ],
      link: [
        { rel: 'canonical', href: 'https://banyago.com.br' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v=4' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg?v=4' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png?v=4' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png?v=4' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png?v=4' }
      ]
    }
  },
  fonts: {
    google: {
      families: {
        'Inter': [300, 400, 500, 600, 700],
        'Cormorant Garamond': [300, 400, 500, 600, 700],
        'Cinzel': [400, 500, 600]
      }
    }
  },
  typescript: {
    strict: false,
    typeCheck: false
  }
})