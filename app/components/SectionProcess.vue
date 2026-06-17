<template>
  <section id="process" class="py-20 lg:py-24 bg-white">
    <div class="container-pro">
      <div class="text-center mb-16">
        <span class="text-xs font-semibold uppercase tracking-[0.2em] text-brand-electric inline-block mb-4">
          Processo
        </span>
        <h2 class="text-3xl lg:text-4xl font-extrabold text-brand-black leading-tight mb-4">
          Como funciona? <span class="text-gradient-brand">É muito simples!</span>
        </h2>
        <p class="text-brand-dark/60 text-lg max-w-2xl mx-auto">
          Em 4 passos você resolve sua necessidade de transporte. Sem burocracia.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div
          v-for="(step, index) in processSteps"
          :key="step.id"
          class="text-center group relative"
        >
          <div class="relative mb-6 inline-block">
            <div
              class="w-20 h-20 mx-auto bg-gradient-to-br from-brand-electric to-brand-royal rounded-2xl flex items-center justify-center text-white text-2xl font-extrabold shadow-lg group-hover:scale-110 group-hover:shadow-brand-electric/30 transition-all duration-300"
            >
              {{ step.step }}
            </div>
            <div class="absolute -bottom-2 -right-2 w-10 h-10 bg-white rounded-xl border-2 border-brand-electric/20 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
              <XIcon :name="step.icon" size="sm" class="text-brand-electric" />
            </div>
            <div
              v-if="index < processSteps.length - 1"
              class="hidden lg:block absolute top-10 left-full w-[calc(100%-5rem)] h-0.5 bg-gradient-to-r from-brand-electric/30 to-transparent"
            />
          </div>

          <h3 class="text-lg font-extrabold text-brand-black mb-2">
            {{ step.title }}
          </h3>
          <p class="text-sm text-brand-dark/60 leading-relaxed max-w-xs mx-auto">
            {{ step.description }}
          </p>
        </div>
      </div>

      <div class="text-center bg-brand-light rounded-2xl p-10 max-w-2xl mx-auto border border-secondary-200">
        <h3 class="text-2xl font-extrabold text-brand-black mb-3">Pronto para começar?</h3>
        <p class="text-brand-dark/60 mb-6">Fale conosco agora e receba seu orçamento personalizado em poucos minutos.</p>
        <XButton
          @click="openWhatsApp('Olá! Vi o passo a passo no site e gostaria de solicitar um orçamento de transporte personalizado.')"
          size="lg"
          class="!bg-brand-electric !border-brand-electric !text-white hover:!shadow-lg hover:!shadow-brand-electric/25 !transition-all !duration-300 !rounded-xl !font-bold"
        >
          Iniciar Conversa no WhatsApp
        </XButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PROCESS_STEPS } from '~/utils/constants'

const { openWhatsApp } = useContactForm()
const processSteps = PROCESS_STEPS
</script>
