<template>
  <div class="min-h-screen bg-brand-light pt-24 pb-16">
    <div class="container-pro">
      
      <!-- Premium Hero Header -->
      <div class="bg-gradient-to-br from-brand-dark via-brand-dark to-brand-royal text-white p-8 md:p-12 lg:p-16 rounded-3xl relative overflow-hidden mb-12 shadow-xl animate-fade-in">
        <div class="absolute -right-16 -top-16 w-64 h-64 bg-brand-electric/10 rounded-full blur-3xl pointer-events-none" />
        <div class="absolute -left-16 -bottom-16 w-64 h-64 bg-brand-royal/20 rounded-full blur-3xl pointer-events-none" />
        
        <div class="relative z-10 max-w-3xl">
          <NuxtLink to="/" class="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-semibold mb-6 group">
            <XIcon name="arrow-left" size="sm" class="group-hover:-translate-x-1 transition-transform" />
            Voltar para o Início
          </NuxtLink>
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Política de Cookies
          </h1>
          <p class="text-white/70 text-base md:text-lg leading-relaxed">
            Saiba como e por que utilizamos cookies e outras tecnologias semelhantes para melhorar a sua experiência ao navegar em nosso site.
          </p>
          <div class="mt-6 pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-sm text-white/50">
            <span>Última atualização: 15 de Junho de 2026</span>
            <span class="w-1.5 h-1.5 bg-brand-electric rounded-full hidden sm:inline" />
            <span>Versão: 1.0</span>
          </div>
        </div>
      </div>

      <!-- Main Layout -->
      <div class="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        <!-- Quick Navigation Sidebar -->
        <aside class="lg:col-span-4 bg-white border border-secondary-200 rounded-2xl p-6 sticky top-28 shadow-sm hidden lg:block animate-slide-up">
          <h3 class="text-brand-black font-extrabold text-lg mb-4 pb-3 border-b border-secondary-100">
            Nesta Página
          </h3>
          <nav class="space-y-1">
            <a 
              v-for="(section, idx) in sections" 
              :key="idx"
              :href="`#section-${idx}`"
              class="block py-2.5 px-3 rounded-lg text-sm font-medium text-brand-dark/70 hover:text-brand-electric hover:bg-secondary-50 transition-all duration-200"
            >
              {{ section.title }}
            </a>
          </nav>
          <div class="mt-8 p-4 bg-brand-light border border-secondary-200 rounded-xl">
            <h4 class="text-brand-black font-bold text-sm mb-2">Configurações de Cookies</h4>
            <p class="text-xs text-brand-dark/60 leading-relaxed mb-3">
              Você pode desativar ou redefinir seus cookies a qualquer momento limpando o cache do seu navegador.
            </p>
            <a href="#" @click.prevent="clearConsent" class="text-xs font-semibold text-brand-electric hover:underline block">
              Redefinir Preferências de Cookies
            </a>
          </div>
        </aside>

        <!-- Cookies Content Column -->
        <article class="lg:col-span-8 bg-white border border-secondary-200 rounded-2xl p-6 md:p-10 shadow-sm animate-slide-up animation-delay-100">
          <div class="prose max-w-none text-brand-dark/80 space-y-8">
            
            <p class="text-base md:text-lg leading-relaxed text-brand-dark/70">
              Esta política foi criada para explicar, de forma clara, direta e objetiva, como a <strong>Banyago Transporte</strong> utiliza cookies em seu site. Ao continuar a usar nossos serviços e navegar no site, você aceita o uso de cookies em conformidade com as diretrizes descritas a seguir.
            </p>

            <div v-for="(section, idx) in sections" :key="idx" :id="`section-${idx}`" class="scroll-mt-28">
              <h2 class="text-xl md:text-2xl font-bold text-brand-black mb-4 flex items-center gap-3">
                <span class="w-8 h-8 rounded-lg bg-brand-electric/10 text-brand-electric flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {{ idx + 1 }}
                </span>
                {{ section.title }}
              </h2>
              <div class="space-y-4 text-sm md:text-base leading-relaxed pl-11 text-brand-dark/70" v-html="section.content">
              </div>
              <div class="h-px bg-secondary-100 mt-8" v-if="idx < sections.length - 1" />
            </div>

            <!-- Manage Prompt Alert -->
            <div class="bg-brand-light border border-brand-electric/10 rounded-2xl p-6 mt-12">
              <div class="flex gap-4 items-start">
                <div class="p-2.5 bg-brand-electric/10 rounded-xl text-brand-electric flex-shrink-0">
                  <XIcon name="cog-6-tooth" size="md" />
                </div>
                <div>
                  <h4 class="text-brand-black font-extrabold text-base mb-1">
                    Como redefinir sua preferência?
                  </h4>
                  <p class="text-sm text-brand-dark/60 leading-relaxed mb-4">
                    Para visualizar novamente o banner de consentimento de cookies e alterar sua decisão (aceitar ou recusar), clique no botão abaixo.
                  </p>
                  <button 
                    @click="clearConsent"
                    class="bg-brand-electric hover:bg-brand-royal text-white text-xs font-semibold py-2 px-4 rounded-lg transition-colors shadow-sm"
                  >
                    Redefinir Consentimento de Cookies
                  </button>
                </div>
              </div>
            </div>

          </div>
        </article>

      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { CONTACT_INFO } from '~/utils/constants'

useHead({
  title: 'Política de Cookies | Banyago Transporte',
  meta: [
    {
      name: 'description',
      content: 'Entenda como a Banyago Transporte usa cookies no seu site. Saiba como desativar cookies ou configurar o seu navegador.'
    }
  ]
})

const sections = [
  {
    title: 'O que são Cookies?',
    content: `
      <p>Cookies são pequenos arquivos de texto baixados e salvos no seu computador, smartphone ou outro dispositivo habilitado para internet ao visitar determinados websites. Eles permitem que o site reconheça seu dispositivo e armazene algumas informações sobre suas preferências, histórico de navegação ou interações para personalizar e otimizar sua visita.</p>
    `
  },
  {
    title: 'Quais tipos de Cookies utilizamos?',
    content: `
      <p>Nosso site utiliza as seguintes categorias de cookies:</p>
      <ul class="list-disc pl-5 mt-2 space-y-1.5">
        <li><strong>Cookies Estritamente Necessários:</strong> Essenciais para o funcionamento básico do site, como navegação segura em páginas e acesso a formulários. Sem esses cookies, o site pode não carregar corretamente.</li>
        <li><strong>Cookies Funcionais:</strong> Usados para salvar preferências básicas feitas pelo usuário, como registrar se o banner de consentimento de cookies já foi aceito ou fechado, evitando que a notificação reapareça a cada carregamento de página.</li>
        <li><strong>Cookies de Análise e Desempenho (Opcionais):</strong> Permitem coletar informações estatísticas de tráfego de maneira anônima (como o número de acessos por dia, tempo de permanência no site, páginas mais lidas). Isso nos ajuda a entender as necessidades de transporte na região de Salvador e melhorar a usabilidade da plataforma.</li>
      </ul>
    `
  },
  {
    title: 'Como gerenciar e desativar os Cookies?',
    content: `
      <p>Você pode controlar, apagar ou desativar o uso de cookies a qualquer momento alterando as configurações do seu navegador de internet. Cada navegador possui uma seção específica para gerenciar cookies:</p>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li><strong>Google Chrome:</strong> Configurações > Privacidade e segurança > Cookies e outros dados do site.</li>
        <li><strong>Mozilla Firefox:</strong> Opções > Privacidade e segurança > Cookies e dados de sites.</li>
        <li><strong>Safari:</strong> Preferências > Privacidade > Bloquear todos os cookies.</li>
        <li><strong>Microsoft Edge:</strong> Configurações > Permissões do site > Cookies e dados salvos.</li>
      </ul>
      <p class="mt-2">Note que, se você bloquear totalmente os cookies necessários, parte dos recursos interativos do nosso site poderá ficar indisponível.</p>
    `
  },
  {
    title: 'Mais informações',
    content: `
      <p>Buscamos manter as coisas o mais transparentes possível. Se você tiver alguma dúvida sobre nosso uso de cookies ou privacidade em geral, poderá ler nossa <a href="/politica-de-privacidade" class="text-brand-electric hover:underline font-semibold">Política de Privacidade</a> ou enviar um e-mail para <strong>${CONTACT_INFO.email}</strong>.</p>
    `
  }
]

const clearConsent = () => {
  if (process.client) {
    localStorage.removeItem('banyago-cookie-consent')
    // Force a reload to trigger the banner to appear again
    window.location.reload()
  }
}
</script>
