<template>
  <div>
    <!-- Hero Section -->
    <TheHero />
    
    <!-- Credibilidade -->
    <SectionCredibility />
    
    <!-- Serviços -->
    <SectionServices />
    
    <!-- Como funciona -->
    <SectionProcess />
    
    <!-- Flexibilidade -->
    <SectionContratacao />
    
    <!-- Formulário de Contato -->
    <SectionContactForm />
  </div>
</template>

<script setup lang="ts">
// Página inicial
definePageMeta({
  layout: 'default'
})useHead({
  title: 'Benyago | Carreto, Frete e Transporte em Salvador e Região Metropolitana',
  meta: [
    {
      name: 'description',
      content: 'Benyago — carreto, frete, transporte de cargas, mudança, transporte escolar, motorista particular e locação de veículos em Salvador, Lauro de Freitas, Camaçari, Simões Filho e toda Região Metropolitana da Bahia. Atendimento 24h.'
    },
    {
      name: 'keywords',
      content: 'carreto Salvador, frete Salvador, transporte de carga Salvador, mudança Salvador, transporte escolar Salvador, motorista particular Salvador, locação de veículos Salvador, van para eventos Salvador, transporte executivo Salvador, freteamento Bahia, carreto Lauro de Freitas, carreto Camaçari, frete Simões Filho, frete região metropolitana Salvador, transporte empresarial Salvador, logística Salvador, caminhão de carga Salvador, transporte de mudança Salvador, frete rápido Salvador, carreto barato Salvador, transporte particular Bahia, aluguel de van Salvador, transporte escolar Bahia, frete urgente Salvador, carreto residencial Salvador, carreto comercial Salvador, frete de móveis Salvador, transporte de mercadorias Salvador'
    },
    { property: 'og:title', content: 'Benyago | Carreto, Frete e Transporte em Salvador — Atendimento 24h' },
    { property: 'og:description', content: 'Carreto, frete, mudança, transporte escolar, motorista particular e locação de veículos em Salvador e Região Metropolitana da Bahia. Solicite agora pelo WhatsApp!' },
    { property: 'og:image', content: 'https://benyago.com.br/images/og-image.jpg' },
    { property: 'og:url', content: 'https://benyago.com.br' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', content: 'https://benyago.com.br/images/og-image.jpg' }
  ],
  link: [
    { rel: 'canonical', href: 'https://benyago.com.br' }
  ]
})

// Schema.org LocalBusiness + Services + FAQ
useJsonld([
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Benyago Transporte',
    alternateName: ['Benyago Carreto', 'Benyago Frete', 'Benyago Logística'],
    description: 'Carreto, frete, transporte de cargas, mudança, transporte escolar, motorista particular e locação de veículos em Salvador and Região Metropolitana da Bahia.',
    url: 'https://benyago.com.br',
    telephone: '+5571993403630',
    email: 'contato@benyago.com.br',
    priceRange: '$$',
    image: 'https://benyago.com.br/images/og-image.jpg',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Salvador',
      addressRegion: 'BA',
      addressCountry: 'BR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -12.9714,
      longitude: -38.5014
    },
    openingHours: 'Mo-Su 00:00-23:59',
    areaServed: [
      { '@type': 'City', name: 'Salvador' },
      { '@type': 'City', name: 'Lauro de Freitas' },
      { '@type': 'City', name: 'Camaçari' },
      { '@type': 'City', name: 'Simões Filho' },
      { '@type': 'City', name: 'Dias d\'Ávila' },
      { '@type': 'City', name: 'Pojuca' },
      { '@type': 'City', name: 'Madre de Deus' },
      { '@type': 'AdministrativeArea', name: 'Região Metropolitana de Salvador' }
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Serviços de Transporte em Salvador',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Carreto em Salvador', description: 'Serviço de carreto residencial e comercial em Salvador e região metropolitana' }
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Frete em Salvador', description: 'Frete de cargas, mercadorias e móveis em Salvador, Lauro de Freitas e Camaçari' }
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Transporte Escolar em Salvador', description: 'Transporte escolar seguro e pontual em Salvador e adjacências' }
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Motorista Particular em Salvador', description: 'Motorista particular para deslocamentos, eventos e compromissos em Salvador' }
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Locação de Veículos em Salvador', description: 'Aluguel de veículos com e sem motorista em Salvador e Bahia' }
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Transporte para Eventos em Salvador', description: 'Van e ônibus para eventos, casamentos e eventos corporativos em Salvador' }
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Mudança em Salvador', description: 'Transporte de mudança residencial e comercial em Salvador e região' }
        }
      ]
    },
    sameAs: [
      'https://wa.me/5571993403630'
    ]
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Vocês fazem carreto em Salvador?',
        acceptedAnswer: { '@type': 'Answer', text: 'Sim! A Benyago realiza carretos residenciais e comerciais em Salvador, Lauro de Freitas, Camaçari, Simões Filho e toda Região Metropolitana da Bahia. Entre em contato pelo WhatsApp (71) 99340-3630.' }
      },
      {
        '@type': 'Question',
        name: 'Qual o valor do frete em Salvador?',
        acceptedAnswer: { '@type': 'Answer', text: 'O valor do frete em Salvador depende do tipo de carga, distância e urgência. Entre em contato pelo WhatsApp (71) 99340-3630 para solicitar um orçamento rápido e sem compromisso.' }
      },
      {
        '@type': 'Question',
        name: 'Fazem transporte escolar em Salvador?',
        acceptedAnswer: { '@type': 'Answer', text: 'Sim! Oferecemos transporte escolar seguro, pontual e responsável em Salvador e região. Motoristas qualificados e veículos adequados para o transporte de crianças.' }
      },
      {
        '@type': 'Question',
        name: 'Atendem em Lauro de Freitas e Camaçari?',
        acceptedAnswer: { '@type': 'Answer', text: 'Sim! Atendemos Salvador, Lauro de Freitas, Camaçari, Simões Filho, Dias d\'Ávila e toda a Região Metropolitana de Salvador com carreto, frete and transporte.' }
      },
      {
        '@type': 'Question',
        name: 'Têm motorista particular em Salvador?',
        acceptedAnswer: { '@type': 'Answer', text: 'Sim! Disponibilizamos motoristas particulares experientes para deslocamentos urbanos, aeroporto, eventos e compromissos executivos em Salvador.' }
      }
    ]
  }
])
</script>