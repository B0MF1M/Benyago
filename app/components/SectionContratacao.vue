<template>
  <section class="py-20 lg:py-24 bg-brand-light">
    <div class="container-pro">
      <div class="text-center mb-14">
        <span class="text-xs font-semibold uppercase tracking-[0.2em] text-brand-electric inline-block mb-4">
          Contratação
        </span>
        <h2 class="text-3xl lg:text-4xl font-extrabold text-brand-black leading-tight mb-4">
          Contrate do <span class="text-gradient-brand">seu jeito</span>
        </h2>
        <p class="text-brand-dark/60 text-lg max-w-2xl mx-auto">
          Flexibilidade total: pague apenas pelo que usar, quando precisar.
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-14">
        <div
          v-for="item in modalities"
          :key="item.label"
          class="text-center bg-white rounded-2xl p-6 border border-secondary-200 hover:border-brand-electric/30 hover:shadow-md transition-all duration-300 group"
        >
          <div class="w-12 h-12 bg-brand-electric/10 rounded-xl mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <XIcon :name="item.icon" size="md" class="text-brand-electric" />
          </div>
          <div class="font-bold text-brand-black text-sm mb-1">{{ item.label }}</div>
          <div class="text-xs text-brand-dark/50">{{ item.sub }}</div>
        </div>
      </div>

      <div class="bg-gradient-to-r from-brand-electric to-brand-royal rounded-2xl p-10 lg:p-12 text-center text-white shadow-xl">
        <h3 class="text-2xl lg:text-3xl font-extrabold mb-4">
          O diferencial que você procura
        </h3>
        <p class="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
          <strong class="text-white">Sem taxa de adesão, sem mensalidade, sem multa.</strong><br>
          Você paga apenas quando usar nossos serviços.
        </p>
        <XButton
          @click="openWhatsApp('Olá! Gostaria de entender melhor como funcionam as modalidades de contratação (por roteiro, diária, evento, etc.).')"
          variant="outline"
          size="lg"
          class="!border-white !text-white hover:!bg-white hover:!text-brand-electric !rounded-xl !font-bold !px-10"
        >
          Saber Mais Sobre Preços
        </XButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { openWhatsApp } = useContactForm()

const modalities = [
  { icon: 'map', label: 'Por Roteiro', sub: 'Trajetos específicos' },
  { icon: 'clock', label: 'Por Hora', sub: 'Tempo determinado' },
  { icon: 'calendar-days', label: 'Por Evento', sub: 'Ocasiões especiais' },
  { icon: 'calendar', label: 'Mensal', sub: 'Demandas recorrentes' },
  { icon: 'building-office-2', label: 'Empresarial', sub: 'Contratos corporativos' }
]
</script>
