<template>
  <section
    id="inicio"
    class="relative min-h-screen overflow-hidden bg-brand-black"
    style="background-image: url('/images/hero-v3.png'); background-size: cover; background-position: center 0%; background-repeat: no-repeat;"
  >
    <!-- Background overlay gradients -->
    <div class="absolute inset-0 bg-gradient-to-r from-brand-black/80 via-brand-black/60 to-brand-royal/40 pointer-events-none" />
    <div class="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent pointer-events-none" />
    <!-- Ambient backdrops/glows for premium tech styling -->
    <div class="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-electric/15 rounded-full blur-[130px] pointer-events-none" />
    <div class="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-brand-royal/20 rounded-full blur-[160px] pointer-events-none" />

    <!-- Container -->
    <div class="relative z-10 container-pro min-h-screen flex items-center">
      <div class="w-full max-w-3xl text-left py-20 lg:py-24 mt-24 lg:mt-32 space-y-8">
        
        <div class="space-y-5 animate-slide-up">
          <h1 class="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
            Transporte corporativo
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-brand-electric to-blue-300">
              que impulsiona
            </span>
            seu negócio
          </h1>

          <p class="text-base lg:text-lg text-neutral-300 max-w-2xl leading-relaxed">
            Solução completa em gestão de frotas e logística executiva com
            <strong class="text-white font-semibold">inteligência operacional</strong>,
            rastreamento em tempo real e suporte dedicado 24 horas em Salvador e região.
          </p>
        </div>

        <!-- Buttons -->
        <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4 pt-2 animate-slide-up" style="animation-delay: 200ms">
          <XButton
            @click="openWhatsApp('Olá! Gostaria de solicitar uma demonstração da Banyago Transporte.')"
            size="lg"
            class="!bg-brand-electric !border-brand-electric !text-white shadow-lg hover:shadow-brand-electric/40 hover:scale-[1.02] active:scale-[0.98] !transition-all !duration-300 !font-bold !px-8 !py-3.5"
          >
            Solicitar Demonstração
          </XButton>

          <XButton
            variant="outline"
            size="lg"
            @click="scrollToServices"
            class="!border-white/30 !text-white hover:!bg-white hover:!text-brand-dark !transition-all !duration-300 !px-8 !py-3.5"
          >
            Ver Soluções
          </XButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { openWhatsApp } = useContactForm()

const scrollToServices = () => {
  const servicesSection = document.getElementById('services')
  if (servicesSection) {
    servicesSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
