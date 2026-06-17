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
            Política de Privacidade
          </h1>
          <p class="text-white/70 text-base md:text-lg leading-relaxed">
            Esta política descreve como a Banyago Transporte coleta, usa e protege seus dados pessoais de acordo com a Lei Geral de Proteção de Dados (LGPD).
          </p>
          <div class="mt-6 pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-sm text-white/50">
            <span>Última atualização: 15 de Junho de 2026</span>
            <span class="w-1.5 h-1.5 bg-brand-electric rounded-full hidden sm:inline" />
            <span>Versão: 1.2</span>
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
            <h4 class="text-brand-black font-bold text-sm mb-2">Dúvidas sobre Privacidade?</h4>
            <p class="text-xs text-brand-dark/60 leading-relaxed mb-3">
              Entre em contato direto com o nosso Encarregado de Proteção de Dados (DPO).
            </p>
            <a :href="`mailto:${contactEmail}`" class="text-xs font-semibold text-brand-electric hover:underline block">
              {{ contactEmail }}
            </a>
          </div>
        </aside>

        <!-- Privacy Content Column -->
        <article class="lg:col-span-8 bg-white border border-secondary-200 rounded-2xl p-6 md:p-10 shadow-sm animate-slide-up animation-delay-100">
          <div class="prose max-w-none text-brand-dark/80 space-y-8">
            
            <p class="text-base md:text-lg leading-relaxed text-brand-dark/70">
              Na <strong>Banyago Transporte</strong> (doravante referida apenas como "Banyago" ou "nós"), a privacidade e a segurança dos dados pessoais de nossos clientes e visitantes são prioridades inalienáveis. Comprometemo-nos a gerenciar suas informações com total transparência, respeito e em conformidade estrita com a Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018).
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

            <!-- Footer Compliance Note -->
            <div class="bg-brand-light border border-brand-electric/10 rounded-2xl p-6 mt-12">
              <div class="flex gap-4 items-start">
                <div class="p-2.5 bg-brand-electric/10 rounded-xl text-brand-electric flex-shrink-0">
                  <XIcon name="shield-check" size="md" />
                </div>
                <div>
                  <h4 class="text-brand-black font-extrabold text-base mb-1">
                    Conformidade e Compromisso
                  </h4>
                  <p class="text-sm text-brand-dark/60 leading-relaxed">
                    Esta Política de Privacidade é revisada semestralmente para garantir alinhamento com as determinações da Autoridade Nacional de Proteção de Dados (ANPD) e mudanças legislativas brasileiras.
                  </p>
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
  title: 'Política de Privacidade | Banyago Transporte',
  meta: [
    {
      name: 'description',
      content: 'Leia a política de privacidade da Banyago. Conheça como protegemos seus dados pessoais de acordo com a LGPD no transporte e locação em Salvador.'
    }
  ]
})

const contactEmail = CONTACT_INFO.email

const sections = [
  {
    title: 'Dados Pessoais Coletados',
    content: `
      <p>Coletamos apenas as informações estritamente necessárias para fornecer nossos serviços de orçamento e agendamento de transportes. Os dados coletados através de nossos formulários e interações incluem:</p>
      <ul class="list-disc pl-5 mt-2 space-y-1.5">
        <li><strong>Informações de Identificação:</strong> Nome completo.</li>
        <li><strong>Informações de Contato:</strong> Número de telefone celular (WhatsApp) e endereço de e-mail.</li>
        <li><strong>Informações do Serviço Solicitado:</strong> Endereço de origem, endereço de destino, data, horário, número de passageiros (para locação ou transporte escolar) ou tipo e dimensão das mercadorias (para transporte de cargas/carretos).</li>
      </ul>
      <p class="mt-2">Não coletamos dados pessoais sensíveis (como origem racial, opiniões políticas ou dados de saúde) através de nosso website.</p>
    `
  },
  {
    title: 'Como e Para Que Usamos seus Dados',
    content: `
      <p>A Banyago trata os seus dados pessoais com base em bases legais bem definidas pela LGPD, principalmente para a execução de contrato ou procedimentos preliminares a pedido do titular. As finalidades incluem:</p>
      <ul class="list-disc pl-5 mt-2 space-y-1.5">
        <li>Elaboração de propostas comerciais e orçamentos de transporte customizados.</li>
        <li>Contato direto via WhatsApp ou ligação telefônica para validar detalhes da rota, prazos ou cargas.</li>
        <li>Envio de confirmações de agendamento e informações sobre a equipe encarregada de realizar o seu transporte.</li>
        <li>Emissão de notas fiscais, recibos e demais documentos fiscais ou legais exigidos pelas autoridades de trânsito e fazendárias.</li>
      </ul>
    `
  },
  {
    title: 'Segurança e Armazenamento dos Dados',
    content: `
      <p>Implementamos medidas físicas, eletrônicas e gerenciais rígidas de segurança para resguardar a integridade, confidencialidade e disponibilidade dos seus dados. Entre os controles aplicados, destacam-se:</p>
      <ul class="list-disc pl-5 mt-2 space-y-1.5">
        <li>Transmissão de dados via protocolo seguro HTTPS (criptografia SSL/TLS).</li>
        <li>Acesso restrito às informações apenas por funcionários ou motoristas devidamente credenciados e essenciais para a execução do serviço.</li>
        <li>Armazenamento de dados em servidores protegidos contra invasões cibernéticas e monitorados ativamente.</li>
      </ul>
    `
  },
  {
    title: 'Compartilhamento de Informações',
    content: `
      <p><strong>Não vendemos, alugamos ou comercializamos seus dados pessoais sob nenhuma hipótese.</strong></p>
      <p class="mt-2">O compartilhamento de seus dados pessoais ocorre única e exclusivamente nas seguintes condições:</p>
      <ul class="list-disc pl-5 mt-2 space-y-1.5">
        <li>Com os motoristas encarregados da execução da sua viagem ou transporte de cargas (compartilhamos somente os dados essenciais para o transporte, como nome do cliente, local de coleta/entrega e número de contato).</li>
        <li>Com plataformas integradoras de faturamento e contabilidade para geração de documentação fiscal regulamentar.</li>
        <li>Para o cumprimento de obrigação legal ou regulatória (como órgãos de fiscalização de trânsito, ANTT, polícia rodoviária ou decisões judiciais).</li>
      </ul>
    `
  },
  {
    title: 'Seus Direitos como Titular dos Dados',
    content: `
      <p>Em conformidade com o artigo 18 da LGPD, você possui plenos direitos sobre os seus dados pessoais armazenados pela Banyago. A qualquer momento, você pode nos solicitar:</p>
      <ul class="list-disc pl-5 mt-2 space-y-1.5">
        <li>Confirmação da existência de tratamento e acesso aos dados armazenados.</li>
        <li>Correção de informações incompletas, inexatas ou desatualizadas.</li>
        <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade.</li>
        <li>Revogação do consentimento concedido anteriormente para envio de comunicações promocionais ou contatos operacionais.</li>
      </ul>
      <p class="mt-2">Para exercer qualquer um dos seus direitos, basta entrar em contato com nossa equipe pelo e-mail <strong>${contactEmail}</strong>. Avaliaremos e responderemos à sua demanda de forma gratuita em até 15 dias úteis.</p>
    `
  },
  {
    title: 'Uso de Cookies',
    content: `
      <p>Utilizamos cookies essenciais para otimizar sua navegação e analisar estatísticas agregadas de visitas. O uso de cookies nos permite fornecer funcionalidades básicas de segurança e facilidade de carregamento de páginas.</p>
      <p class="mt-2">Você pode ajustar as configurações do seu navegador para bloquear ou alertar sobre cookies, mas lembre-se de que algumas partes da página podem não funcionar perfeitamente sem eles. Para mais detalhes, consulte nossa página específica sobre Cookies.</p>
    `
  },
  {
    title: 'Retenção dos Dados Pessoais',
    content: `
      <p>Mantemos seus dados pessoais em nossos sistemas pelo período necessário para cumprir as finalidades descritas nesta política:</p>
      <ul class="list-disc pl-5 mt-2 space-y-1.5">
        <li>Dados de orçamentos não contratados são excluídos após 6 meses.</li>
        <li>Dados vinculados a contratos ativos de transporte ou locações são armazenados por até 5 anos após a finalização do serviço, conforme prazo prescricional legal para obrigações tributárias e fiscais brasileiras.</li>
      </ul>
    `
  }
]
</script>
