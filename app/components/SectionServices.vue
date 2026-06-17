<template>
  <section id="services" class="py-20 lg:py-24 bg-brand-light overflow-hidden">
    <!-- Header info inside container -->
    <div class="container-pro">
      <div class="text-center mb-16">
        <span class="text-xs font-semibold uppercase tracking-[0.2em] text-brand-electric inline-block mb-4">
          Serviços
        </span>
        <h2 class="text-3xl lg:text-4xl font-extrabold text-brand-black leading-tight mb-4">
          Nossas <span class="text-gradient-brand">Soluções</span>
        </h2>
        <p class="text-brand-dark/60 text-lg max-w-2xl mx-auto">
          De deslocamentos urbanos a logística corporativa — temos o veículo e o plano certo para você
        </p>
      </div>
    </div>

    <!-- Carousel: Full width 100% (outside container-pro) -->
    <div class="relative w-full overflow-hidden py-4 mb-16">
      <!-- Left/Right soft shadow overlay gradients for visual depth -->
      <div class="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-brand-light via-brand-light/40 to-transparent z-10 pointer-events-none" />
      <div class="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-brand-light via-brand-light/40 to-transparent z-10 pointer-events-none" />
      
      <!-- Scrolling marquee track -->
      <div class="flex gap-6 animate-marquee hover:[animation-play-state:paused] w-max select-none">
        <!-- Render 3 times to ensure perfect infinite loop wrapping -->
        <div v-for="n in 3" :key="n" class="flex gap-6">
          <div
            v-for="service in services"
            :key="service.id + '-' + n"
            class="w-[310px] sm:w-[360px] md:w-[380px] bg-white rounded-2xl p-8 border border-secondary-200 hover:border-brand-electric/25 hover:shadow-xl transition-all duration-300 flex flex-col group flex-shrink-0"
          >
            <div class="w-14 h-14 bg-brand-electric/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-electric group-hover:text-white transition-all duration-300">
              <XIcon :name="service.icon" size="lg" class="text-brand-electric group-hover:text-white transition-colors duration-300" />
            </div>

            <div v-if="service.isHighlighted" class="inline-flex items-center gap-1.5 bg-brand-electric/10 text-brand-electric text-xs font-bold px-3 py-1.5 rounded-full mb-4 w-fit">
              <XIcon name="star" size="xs" />
              Mais Procurado
            </div>
            <div v-else class="h-7 mb-4" />

            <h3 class="text-xl font-extrabold text-brand-black mb-2">{{ service.title }}</h3>
            <p class="text-sm text-brand-dark/50 mb-4">{{ service.subtitle }}</p>
            <p class="text-brand-dark/70 text-sm leading-relaxed mb-6 flex-grow">{{ service.description }}</p>

            <div class="space-y-2.5 mb-8">
              <div
                v-for="feature in service.features.slice(0, 3)"
                :key="feature"
                class="flex items-center gap-2.5 text-sm text-brand-dark/70"
              >
                <div class="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <XIcon name="check" size="xs" class="text-green-600" />
                </div>
                {{ feature }}
              </div>
            </div>

            <XButton
              @click="openWhatsApp(`Olá! Preciso de orçamento para ${service.title}. Poderia me ajudar?`)"
              full-width
              class="!bg-brand-electric !border-brand-electric !text-white hover:!shadow-lg hover:!shadow-brand-electric/25 !transition-all !duration-300 !rounded-xl !font-bold"
            >
              Solicitar Orçamento
            </XButton>
          </div>
        </div>
      </div>
    </div>

    <!-- Reopen container-pro for the rest of page -->
    <div class="container-pro">

      <!-- Frota Section -->
      <div id="frota" class="bg-white rounded-3xl p-10 lg:p-14 border border-secondary-200 shadow-sm">
        <div class="text-center mb-12">
          <h3 class="text-2xl lg:text-3xl font-extrabold text-brand-black mb-3">
            Nossa <span class="text-gradient-brand">Frota</span>
          </h3>
          <p class="text-brand-dark/60">Veículos preparados e revisados para sua segurança</p>
        </div>

        <div class="grid md:grid-cols-3 gap-6 mb-12">
          <!-- Veículos de Passeio -->
          <div class="bg-white rounded-2xl p-8 border border-secondary-200 hover:border-brand-electric/30 hover:shadow-lg transition-all duration-300 text-center group">
            <div class="w-16 h-16 mx-auto mb-5 flex items-center justify-center">
              <!-- Sedan / passenger car icon -->
              <svg viewBox="0 0 64 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-16 h-auto text-brand-electric group-hover:scale-110 transition-transform duration-300">
                <path d="M6 28 L6 22 L14 14 L38 12 L50 20 L58 22 L58 28" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round" fill="none"/>
                <path d="M6 28 L58 28" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
                <path d="M18 14 L22 8 L40 8 L46 14" stroke="currentColor" stroke-width="2" stroke-linejoin="round" fill="none"/>
                <circle cx="16" cy="30" r="4.5" stroke="currentColor" stroke-width="2.5" fill="none"/>
                <circle cx="48" cy="30" r="4.5" stroke="currentColor" stroke-width="2.5" fill="none"/>
                <path d="M2 24 L6 24" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <path d="M58 24 L62 24" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
            <h4 class="text-lg font-bold text-brand-black mb-4">Veículos de Passeio</h4>
            <ul class="text-sm text-brand-dark/70 space-y-2 text-left">
              <li class="flex items-center gap-2">
                <XIcon name="check" size="xs" class="text-brand-electric" />
                <span><strong class="text-brand-black">Novo Onix:</strong> Deslocamentos urbanos</span>
              </li>
              <li class="flex items-center gap-2">
                <XIcon name="check" size="xs" class="text-brand-electric" />
                <span><strong class="text-brand-black">Cruze:</strong> Conforto premium executivo</span>
              </li>
            </ul>
          </div>

          <!-- Utilitários & Vans -->
          <div class="bg-white rounded-2xl p-8 border border-secondary-200 hover:border-brand-electric/30 hover:shadow-lg transition-all duration-300 text-center group">
            <div class="w-16 h-16 mx-auto mb-5 flex items-center justify-center">
              <!-- Van icon -->
              <svg viewBox="0 0 72 42" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-16 h-auto text-brand-electric group-hover:scale-110 transition-transform duration-300">
                <rect x="4" y="12" width="52" height="20" rx="3" stroke="currentColor" stroke-width="2.5" fill="none"/>
                <path d="M56 20 L68 20 L68 32 L56 32" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round" fill="none"/>
                <path d="M56 20 L62 14 L68 16 L68 20" stroke="currentColor" stroke-width="2" stroke-linejoin="round" fill="none"/>
                <circle cx="16" cy="34" r="4" stroke="currentColor" stroke-width="2.5" fill="none"/>
                <circle cx="56" cy="34" r="4" stroke="currentColor" stroke-width="2.5" fill="none"/>
                <path d="M20 12 L20 32" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2 2"/>
                <rect x="8" y="16" width="9" height="7" rx="1.5" stroke="currentColor" stroke-width="1.5" fill="none"/>
                <rect x="23" y="16" width="9" height="7" rx="1.5" stroke="currentColor" stroke-width="1.5" fill="none"/>
              </svg>
            </div>
            <h4 class="text-lg font-bold text-brand-black mb-4">Utilitários & Vans</h4>
            <ul class="text-sm text-brand-dark/70 space-y-2 text-left">
              <li class="flex items-center gap-2">
                <XIcon name="check" size="xs" class="text-brand-electric" />
                <span><strong class="text-brand-black">Saveiro Robust:</strong> Entregas ágeis</span>
              </li>
              <li class="flex items-center gap-2">
                <XIcon name="check" size="xs" class="text-brand-electric" />
                <span><strong class="text-brand-black">Fiorino:</strong> Logística urbana</span>
              </li>
            </ul>
          </div>

          <!-- Caminhões de Carga -->
          <div class="bg-white rounded-2xl p-8 border border-secondary-200 hover:border-brand-electric/30 hover:shadow-lg transition-all duration-300 text-center group">
            <div class="w-16 h-16 mx-auto mb-5 flex items-center justify-center">
              <!-- Truck icon -->
              <svg viewBox="0 0 80 42" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-16 h-auto text-brand-electric group-hover:scale-110 transition-transform duration-300">
                <rect x="2" y="8" width="50" height="24" rx="2" stroke="currentColor" stroke-width="2.5" fill="none"/>
                <path d="M52 16 L52 32 L76 32 L76 22 L66 10 L52 10 L52 16" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round" fill="none"/>
                <path d="M52 16 L66 16 L66 10" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" fill="none"/>
                <circle cx="16" cy="34" r="4" stroke="currentColor" stroke-width="2.5" fill="none"/>
                <circle cx="60" cy="34" r="4" stroke="currentColor" stroke-width="2.5" fill="none"/>
                <circle cx="70" cy="34" r="4" stroke="currentColor" stroke-width="2.5" fill="none"/>
                <path d="M70 22 L76 22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
            <h4 class="text-lg font-bold text-brand-black mb-4">Caminhões de Carga</h4>
            <ul class="text-sm text-brand-dark/70 space-y-2 text-left">
              <li class="flex items-center gap-2">
                <XIcon name="check" size="xs" class="text-brand-electric" />
                <span><strong class="text-brand-black">Mercedes 710:</strong> Cargas robustas</span>
              </li>
              <li class="flex items-center gap-2">
                <XIcon name="check" size="xs" class="text-brand-electric" />
                <span><strong class="text-brand-black">Iveco:</strong> Grande capacidade</span>
              </li>
              <li class="flex items-center gap-2">
                <XIcon name="check" size="xs" class="text-brand-electric" />
                <span><strong class="text-brand-black">Kia Bongo:</strong> Cargas urbanas</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Fleet attributes row -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="text-center p-5 rounded-2xl bg-brand-light border border-secondary-200 hover:border-brand-electric/30 hover:shadow-sm transition-all duration-300" v-for="item in fleetFeatures" :key="item.label">
            <div class="w-11 h-11 bg-brand-electric/10 rounded-xl mx-auto mb-3 flex items-center justify-center">
              <XIcon :name="item.icon" size="md" class="text-brand-electric" />
            </div>
            <div class="font-bold text-brand-black text-sm">{{ item.label }}</div>
            <div class="text-xs text-brand-dark/50 mt-1">{{ item.sub }}</div>
          </div>
        </div>
      </div>

      <!-- Destaques Especiais -->
      <div class="grid lg:grid-cols-2 gap-6 mt-12">

        <!-- Card Transporte Escolar -->
        <div class="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 lg:p-10 border border-emerald-100 text-center hover:shadow-lg hover:shadow-emerald-200 transition-all duration-300">
          <!-- Badge -->
          <div class="inline-flex items-center gap-1.5 bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full mb-6">
            <XIcon name="user-group" size="xs" />
            Para Famílias
          </div>
          <div class="flex flex-col items-center gap-4 mb-6">
            <div class="w-14 h-14 bg-emerald-200 rounded-2xl flex items-center justify-center">
              <!-- School bus SVG line art -->
              <svg viewBox="0 0 72 44" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-10 h-auto text-emerald-700">
                <rect x="3" y="8" width="58" height="24" rx="3" stroke="currentColor" stroke-width="2.5" fill="none"/>
                <path d="M61 16 L69 16 L69 32 L61 32" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round" fill="none"/>
                <path d="M61 16 L66 10 L69 12 L69 16" stroke="currentColor" stroke-width="2" stroke-linejoin="round" fill="none"/>
                <circle cx="14" cy="34" r="4" stroke="currentColor" stroke-width="2.5" fill="none"/>
                <circle cx="50" cy="34" r="4" stroke="currentColor" stroke-width="2.5" fill="none"/>
                <!-- Windows -->
                <rect x="7"  y="12" width="10" height="8" rx="1.5" stroke="currentColor" stroke-width="1.5" fill="none"/>
                <rect x="21" y="12" width="10" height="8" rx="1.5" stroke="currentColor" stroke-width="1.5" fill="none"/>
                <rect x="35" y="12" width="10" height="8" rx="1.5" stroke="currentColor" stroke-width="1.5" fill="none"/>
                <rect x="49" y="12" width="9"  height="8" rx="1.5" stroke="currentColor" stroke-width="1.5" fill="none"/>
                <!-- Door -->
                <path d="M27 32 L27 22" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2 2"/>
              </svg>
            </div>
            <div>
              <h4 class="text-xl font-extrabold text-emerald-900">Transporte Escolar</h4>
              <p class="text-emerald-600 text-sm">Segurança e responsabilidade</p>
            </div>
          </div>
          <p class="text-emerald-800/70 text-sm mb-6">Cuidamos do transporte de quem você ama com atenção, pontualidade e compromisso.</p>
          <!-- Features: vertical list -->
          <div class="flex justify-center mb-8">
            <div class="inline-flex flex-col gap-2.5">
              <div v-for="item in schoolFeatures" :key="item" class="flex items-center gap-2.5 text-sm text-emerald-800">
                <div class="w-5 h-5 bg-emerald-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <XIcon name="check" size="xs" class="text-emerald-700" />
                </div>
                {{ item }}
              </div>
            </div>
          </div>
          <XButton @click="openWhatsApp('Olá! Gostaria de solicitar um orçamento para o serviço de Transporte Escolar.')" size="sm" class="!bg-emerald-500 !border-emerald-500 !text-white hover:!bg-emerald-600 hover:!shadow-lg hover:!shadow-emerald-300 !rounded-xl !font-bold !transition-all !duration-300">
            Solicitar Transporte Escolar
          </XButton>
        </div>

        <!-- Card Transporte de Cargas -->
        <div class="bg-gradient-to-br from-brand-black to-brand-royal rounded-2xl p-8 lg:p-10 border border-white/10 text-center hover:shadow-lg hover:shadow-brand-electric/20 transition-all duration-300">
          <!-- Badge -->
          <div class="inline-flex items-center gap-1.5 bg-brand-electric text-white text-xs font-bold px-3 py-1.5 rounded-full mb-6">
            <XIcon name="building-office-2" size="xs" />
            Para Empresas
          </div>
          <div class="flex flex-col items-center gap-4 mb-6">
            <div class="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
              <!-- Cargo truck SVG line art -->
              <svg viewBox="0 0 80 44" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-10 h-auto text-white">
                <rect x="2" y="10" width="48" height="22" rx="2.5" stroke="currentColor" stroke-width="2.5" fill="none"/>
                <path d="M50 18 L50 32 L76 32 L76 22 L66 10 L50 10 L50 18" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round" fill="none"/>
                <path d="M50 18 L66 18 L66 10" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" fill="none"/>
                <circle cx="14" cy="35" r="4" stroke="currentColor" stroke-width="2.5" fill="none"/>
                <circle cx="60" cy="35" r="4" stroke="currentColor" stroke-width="2.5" fill="none"/>
                <circle cx="70" cy="35" r="4" stroke="currentColor" stroke-width="2.5" fill="none"/>
                <path d="M70 22 L76 22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
            <div>
              <h4 class="text-xl font-extrabold text-white">Transporte de Cargas</h4>
              <p class="text-white/60 text-sm">Logística empresarial</p>
            </div>
          </div>
          <p class="text-white/70 text-sm mb-6">Frota preparada para empresas com entregas recorrentes e distribuição urbana.</p>
          <!-- Features: vertical list -->
          <div class="flex justify-center mb-8">
            <div class="inline-flex flex-col gap-2.5">
              <div v-for="item in cargoFeatures" :key="item" class="flex items-center gap-2.5 text-sm text-white/80">
                <div class="w-5 h-5 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <XIcon name="check" size="xs" class="text-brand-electric" />
                </div>
                {{ item }}
              </div>
            </div>
          </div>
          <XButton @click="openWhatsApp('Olá! Gostaria de solicitar um orçamento para o serviço de Transporte de Cargas / Logística.')" size="sm" class="!bg-brand-electric !border-brand-electric !text-white hover:!bg-brand-electric/80 hover:!shadow-lg hover:!shadow-brand-electric/30 !rounded-xl !font-bold !transition-all !duration-300">
            Solicitar Transporte de Carga
          </XButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { SERVICES } from '~/utils/constants'

const { openWhatsApp } = useContactForm()
const services = SERVICES

const fleetFeatures = [
  { icon: 'cog-6-tooth', label: 'Manutenção Preventiva', sub: 'Revisões regulares' },
  { icon: 'shield-check', label: 'Seguro Total', sub: 'Cobertura completa' },
  { icon: 'map-pin', label: 'Rastreamento', sub: 'GPS em tempo real' },
  { icon: 'clock', label: 'Backup Imediato', sub: 'Veículo reserva' }
]

const schoolFeatures = [
  'Segurança certificada',
  'Pontualidade rigorosa',
  'Cuidado em cada detalhe',
  'Comunicação constante'
]

const cargoFeatures = [
  'Veículos para diferentes tipos de carga',
  'Otimização de rotas e horários',
  'Seguro de carga incluído'
]
</script>
