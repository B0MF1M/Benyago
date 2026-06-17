<template>
  <header class="fixed top-0 w-full z-50 bg-white border-b border-secondary-200 shadow-sm">
    <div class="container-pro">
      <nav class="flex items-center justify-between h-20 lg:h-24" role="navigation" aria-label="Navegação principal">
        <LogoBenyago size="xl" />

        <nav class="hidden md:flex items-center gap-10" aria-label="Menu principal">
          <NuxtLink
            v-for="item in navigationItems"
            :key="item.href"
            :to="item.href"
            class="nav-link text-base"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <div class="flex items-center gap-3">
          <XButton
            @click="openWhatsApp"
            size="md"
            class="hidden md:flex !bg-brand-electric !border-brand-electric !text-white !rounded-xl !font-bold"
          >
            Solicitar Orçamento
          </XButton>
          <button
            class="md:hidden w-10 h-10 flex items-center justify-center rounded-xl text-brand-dark hover:bg-secondary-100 transition-all duration-200"
            @click="toggleMobileMenu"
            :aria-expanded="isMobileMenuOpen"
            :aria-label="isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'"
          >
            <XIcon :name="isMobileMenuOpen ? 'x-mark' : 'bars-3'" size="md" />
          </button>
        </div>
      </nav>

      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div
          v-show="isMobileMenuOpen"
          class="md:hidden absolute top-full left-0 right-0 bg-white border-t border-secondary-200 shadow-xl rounded-b-2xl overflow-hidden"
          role="menu"
        >
          <div class="px-6 py-6 space-y-1">
            <NuxtLink
              v-for="item in navigationItems"
              :key="item.href"
              :to="item.href"
              class="block px-4 py-3 text-brand-dark font-semibold rounded-xl hover:bg-brand-electric/5 hover:text-brand-electric transition-all duration-200"
              @click="closeMobileMenu"
              role="menuitem"
            >
              {{ item.label }}
            </NuxtLink>

            <div class="border-t border-secondary-200 pt-4 mt-4">
              <XButton
                @click="openWhatsApp"
                full-width
                size="lg"
                class="!bg-brand-electric !border-brand-electric !text-white !rounded-xl !font-bold"
              >
                Solicitar Orçamento
              </XButton>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </header>
</template>

<script setup lang="ts">
import { NAVIGATION_ITEMS } from '~/utils/constants'

const { openWhatsApp } = useContactForm()
const navigationItems = NAVIGATION_ITEMS

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  document.body.style.overflow = isMobileMenuOpen.value ? 'hidden' : ''
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
}

onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>
