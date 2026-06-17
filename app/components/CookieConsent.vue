<template>
  <Transition
    enter-active-class="transition duration-500 ease-out"
    enter-from-class="transform translate-y-20 opacity-0"
    enter-to-class="transform translate-y-0 opacity-100"
    leave-active-class="transition duration-300 ease-in"
    leave-from-class="transform translate-y-0 opacity-100"
    leave-to-class="transform translate-y-20 opacity-0"
  >
    <div 
      v-if="showBanner"
      class="fixed md:bottom-8 md:right-8 bottom-0 left-0 right-0 z-[100] md:max-w-md w-full px-4 pb-4 md:pb-0"
    >
      <div class="bg-brand-dark/95 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl p-6 text-white text-left animate-slide-up">
        
        <div class="flex items-start gap-4">
          <!-- Premium Icon Ring -->
          <div class="p-2 bg-brand-electric/15 border border-brand-electric/35 rounded-xl text-brand-electric flex-shrink-0">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
            </svg>
          </div>
          
          <div class="flex-1">
            <h4 class="font-extrabold text-base text-white tracking-wide mb-1">
              Cookies & Privacidade
            </h4>
            <p class="text-xs text-white/70 leading-relaxed">
              Utilizamos cookies para otimizar sua navegação e analisar estatísticas de tráfego. Ao clicar em "Aceitar", você concorda com nossos 
              <NuxtLink to="/politica-de-privacidade" class="text-brand-electric hover:underline font-semibold">Termos de Privacidade</NuxtLink> e 
              <NuxtLink to="/politica-de-cookies" class="text-brand-electric hover:underline font-semibold">Política de Cookies</NuxtLink>.
            </p>
          </div>
        </div>

        <div class="mt-5 pt-4 border-t border-white/10 flex items-center justify-end gap-3">
          <button 
            @click="rejectCookies"
            class="text-xs text-white/50 hover:text-white font-semibold py-2 px-3 transition-colors duration-200"
          >
            Rejeitar
          </button>
          
          <NuxtLink 
            to="/politica-de-cookies"
            class="text-xs text-white/80 hover:text-brand-electric font-semibold py-2 px-3 border border-white/10 hover:border-brand-electric/55 rounded-xl transition-all duration-200"
          >
            Saber Mais
          </NuxtLink>
          
          <button 
            @click="acceptCookies"
            class="bg-brand-electric hover:bg-brand-royal text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-all duration-300 shadow-md shadow-brand-electric/20"
          >
            Aceitar
          </button>
        </div>

      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const showBanner = ref(false)

onMounted(() => {
  // Check if consent was already recorded
  const consent = localStorage.getItem('banyago-cookie-consent')
  if (!consent) {
    // Show banner with a small delay for smooth entry
    setTimeout(() => {
      showBanner.value = true
    }, 1500)
  }
})

const acceptCookies = () => {
  localStorage.setItem('banyago-cookie-consent', 'accepted')
  showBanner.value = false
}

const rejectCookies = () => {
  localStorage.setItem('banyago-cookie-consent', 'rejected')
  showBanner.value = false
}
</script>
