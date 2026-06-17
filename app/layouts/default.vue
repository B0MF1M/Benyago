<template>
  <div class="min-h-screen bg-brand-light text-brand-dark">
    <TheHeader />
    
    <main>
      <slot />
    </main>
    
    <TheFooter />
    <CookieConsent />
  </div>
</template>

<script setup lang="ts">
// Layout padrão para todas as páginas
useHead({
  htmlAttrs: {
    lang: 'pt-BR',
    class: 'scroll-smooth'
  },
  bodyAttrs: {
    class: 'antialiased font-sans'
  }
})
</script>