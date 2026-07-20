<template>
  <footer class="bg-brand-black text-white/60">
    <div class="container-pro py-16 lg:py-20">
      <div class="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 mb-12">
        <div class="lg:w-2/5 max-w-md">
          <div class="bg-white rounded-2xl p-4 inline-block mb-6">
            <LogoBenyago size="xl" />
          </div>

          <p class="text-white/70 leading-relaxed mb-8 text-sm">
            <strong class="text-white">Transporte confiável em Salvador.</strong><br>
            Licenciados pela ANTT, com seguro total e motoristas experientes. Sua segurança é nossa prioridade.
          </p>

          <div class="flex flex-wrap gap-3">
            <div class="flex items-center gap-2 bg-white/10 border border-white/20 rounded-xl px-4 py-2.5">
              <XIcon name="shield-check" size="sm" class="text-brand-electric" />
              <span class="text-brand-electric text-sm font-semibold">ISO 9001</span>
            </div>
            <div class="flex items-center gap-2 bg-white/10 border border-white/20 rounded-xl px-4 py-2.5">
              <XIcon name="document-check" size="sm" class="text-blue-400" />
              <span class="text-blue-400 text-sm font-semibold">ANTT</span>
            </div>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row gap-12 sm:gap-24 lg:w-3/5 lg:justify-end">
          <div>
            <h3 class="text-white font-extrabold text-lg mb-6 tracking-wide">Serviços</h3>
            <ul class="space-y-4">
              <li v-for="item in footerServices" :key="item">
                <a href="#services" class="text-white/60 hover:text-white hover:translate-x-1 inline-block transition-all text-sm font-medium">
                  {{ item }}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-white font-extrabold text-lg mb-6 tracking-wide">Contato</h3>
            <ul class="space-y-4">
              <li>
                <a :href="`https://wa.me/${contactInfo.whatsapp}`" target="_blank"
                  class="flex items-center gap-3 text-white/60 hover:text-green-400 transition-colors group">
                  <svg class="w-5 h-5 text-current group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.436.002 9.851-4.407 9.854-9.842.002-2.632-1.02-5.107-2.879-6.968-1.859-1.861-4.329-2.884-6.966-2.885-5.442 0-9.857 4.409-9.86 9.846-.001 1.748.465 3.456 1.348 4.966L1.879 21.05l5.222-1.37a9.789 9.789 0 0 0 4.546 1.159zm10.428-7.104c-.29-.145-1.712-.845-1.977-.942-.266-.097-.459-.145-.653.145-.193.29-.748.942-.917 1.134-.17.193-.339.217-.63.072-1.285-.642-2.224-1.12-3.136-2.685-.242-.415.242-.385.693-1.285.074-.145.037-.266-.019-.387-.056-.12-.459-1.11-.63-1.522-.165-.398-.347-.344-.459-.349-.115-.005-.246-.005-.377-.005-.131 0-.344.049-.525.246-.181.197-.692.677-.692 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.077.38-.058 1.712-.7 1.955-1.378.243-.678.243-1.258.17-1.378-.073-.12-.266-.192-.556-.337z"/>
                  </svg>
                  <span class="text-sm font-medium">WhatsApp</span>
                </a>
              </li>
              <li>
                <a :href="`https://www.instagram.com/${contactInfo.instagram}`" target="_blank" rel="noopener noreferrer"
                  class="flex items-center gap-3 text-white/60 hover:text-brand-electric transition-colors group">
                  <svg class="w-5 h-5 text-current group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  <span class="text-sm font-medium">@{{ contactInfo.instagram }}</span>
                </a>
              </li>
              <li>
                <a :href="`tel:${contactInfo.phone}`"
                  class="flex items-center gap-3 text-white/60 hover:text-white transition-colors group">
                  <XIcon name="phone" size="sm" class="text-current group-hover:scale-110 transition-transform duration-300" />
                  <span class="text-sm font-medium">{{ contactInfo.phone }}</span>
                </a>
              </li>
              <li>
                <a :href="`mailto:${contactInfo.email}`"
                  class="flex items-center gap-3 text-white/60 hover:text-white transition-colors group">
                  <XIcon name="envelope" size="sm" class="text-current group-hover:scale-110 transition-transform duration-300" />
                  <span class="text-sm font-medium">{{ contactInfo.email }}</span>
                </a>
              </li>
              <li class="flex items-start gap-3 text-white/60">
                <XIcon name="map-pin" size="sm" class="text-white/60 mt-0.5 flex-shrink-0" />
                <span class="text-sm">{{ contactInfo.address }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="border-t border-white/10 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-6">
          <div class="text-white/40 text-sm">
            &copy; {{ currentYear }} Banyago Transporte. Todos os direitos reservados.
          </div>
          <div class="flex flex-wrap gap-6">
            <NuxtLink to="/politica-de-privacidade" class="text-white/40 hover:text-white/70 transition-colors text-sm font-medium">
              Política de Privacidade
            </NuxtLink>
            <NuxtLink to="/termos-de-uso" class="text-white/40 hover:text-white/70 transition-colors text-sm font-medium">
              Termos de Uso
            </NuxtLink>
            <NuxtLink to="/politica-de-cookies" class="text-white/40 hover:text-white/70 transition-colors text-sm font-medium">
              Cookies
            </NuxtLink>
          </div>
        </div>
        <div class="text-center mt-6 pt-6 border-t border-white/5">
          <p class="text-white/30 text-xs">Tecnologia premium para experiência executiva</p>
        </div>
      </div>
    </div>

    <div class="fixed bottom-6 right-6 z-50">
      <XButton
        @click="openWhatsApp('Olá! Vi o site da Banyago e gostaria de um orçamento.')"
        class="!w-16 !h-16 !p-0 !rounded-full !bg-green-500 hover:!bg-green-600 !border-green-500 hover:!border-green-600 hover:!shadow-xl hover:!shadow-green-500/30 animate-bounce !transition-all !duration-300"
        aria-label="Chamar no WhatsApp"
      >
        <XIcon name="chat-bubble-left-right" size="lg" />
      </XButton>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { CONTACT_INFO } from '~/utils/constants'

const { openWhatsApp } = useContactForm()
const contactInfo = CONTACT_INFO
const currentYear = new Date().getFullYear()

const footerServices = [
  'Locação de Veículos',
  'Motorista Particular',
  'Transporte Escolar',
  'Transporte de Cargas'
]
</script>
