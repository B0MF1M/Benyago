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
            Termos de Uso
          </h1>
          <p class="text-white/70 text-base md:text-lg leading-relaxed">
            Estes termos estabelecem os direitos, deveres e regras para a utilização do nosso website e contratação dos serviços da Banyago Transporte.
          </p>
          <div class="mt-6 pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-sm text-white/50">
            <span>Última atualização: 15 de Junho de 2026</span>
            <span class="w-1.5 h-1.5 bg-brand-electric rounded-full hidden sm:inline" />
            <span>Versão: 1.1</span>
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
            <h4 class="text-brand-black font-bold text-sm mb-2">Dúvidas com os Termos?</h4>
            <p class="text-xs text-brand-dark/60 leading-relaxed mb-3">
              Precisa de esclarecimentos sobre regras de cancelamento ou prestação?
            </p>
            <a :href="`mailto:${contactEmail}`" class="text-xs font-semibold text-brand-electric hover:underline block">
              {{ contactEmail }}
            </a>
          </div>
        </aside>

        <!-- Terms Content Column -->
        <article class="lg:col-span-8 bg-white border border-secondary-200 rounded-2xl p-6 md:p-10 shadow-sm animate-slide-up animation-delay-100">
          <div class="prose max-w-none text-brand-dark/80 space-y-8">
            
            <p class="text-base md:text-lg leading-relaxed text-brand-dark/70">
              Ao acessar este website ou contratar os serviços oferecidos pela <strong>Banyago Transporte</strong> (aqui denominada "Banyago"), você manifesta sua concordância tácita, integral e irrestrita com os Termos de Uso apresentados a seguir. Se você não concordar com qualquer uma das disposições, pedimos que não navegue neste site e não contrate nossos serviços.
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

            <!-- Footer Legal Note -->
            <div class="bg-brand-light border border-brand-electric/10 rounded-2xl p-6 mt-12">
              <div class="flex gap-4 items-start">
                <div class="p-2.5 bg-brand-electric/10 rounded-xl text-brand-electric flex-shrink-0">
                  <XIcon name="document-text" size="md" />
                </div>
                <div>
                  <h4 class="text-brand-black font-extrabold text-base mb-1">
                    Prevalência Contratual
                  </h4>
                  <p class="text-sm text-brand-dark/60 leading-relaxed">
                    Estes termos constituem o regramento básico de uso. Caso haja a formalização de um contrato de prestação de serviços específico (como nos casos de transporte corporativo continuado ou transporte escolar anual), as cláusulas contratuais específicas prevalecerão sobre este documento em caso de divergência.
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
  title: 'Termos de Uso | Banyago Transporte',
  meta: [
    {
      name: 'description',
      content: 'Consulte os Termos de Uso da Banyago. Veja as diretrizes para locação de veículos, carretos, agendamentos e cancelamentos em Salvador e Bahia.'
    }
  ]
})

const contactEmail = CONTACT_INFO.email

const sections = [
  {
    title: 'Objeto dos Serviços',
    content: `
      <p>A Banyago disponibiliza serviços de transporte executivo, transporte escolar, locação de veículos (com ou sem motorista), fretamento, carretos e transporte de cargas em geral, operando principalmente na Região Metropolitana de Salvador/BA.</p>
      <p class="mt-2">O website tem caráter informativo e serve para captação de leads e geração de propostas comerciais preliminares. O envio de um formulário de contato não constitui reserva automática ou contratação obrigatória do serviço.</p>
    `
  },
  {
    title: 'Cadastro e Solicitação de Orçamentos',
    content: `
      <p>Ao solicitar cotações através do nosso site, você garante que:</p>
      <ul class="list-disc pl-5 mt-2 space-y-1.5">
        <li>As informações fornecidas (nome, telefone, trajeto, datas e dados de carga) são verídicas, completas e atualizadas.</li>
        <li>Não utilizará dados de terceiros ou falsos para obter cotações simuladas.</li>
        <li>É maior de 18 anos de idade e possui capacidade jurídica para contratar serviços.</li>
      </ul>
    `
  },
  {
    title: 'Condições de Agendamento, Pagamento e Cancelamento',
    content: `
      <p><strong>Agendamento:</strong> A confirmação de qualquer serviço dar-se-á exclusivamente via e-mail formalizado ou comunicação via WhatsApp corporativo oficial da Banyago, após validação de disponibilidade de frota e equipe.</p>
      <p class="mt-2"><strong>Pagamento:</strong> Os valores, formas de pagamento (PIX, transferência, cartão ou faturamento) e eventuais depósitos de garantia serão discriminados na proposta formal e deverão ser cumpridos conforme acordado.</p>
      <p class="mt-2"><strong>Regras de Cancelamento:</strong></p>
      <ul class="list-disc pl-5 mt-1 space-y-1">
        <li>Cancelamentos de frete/carreto efetuados com menos de 24 horas de antecedência do horário agendado podem sofrer cobrança de taxa de cancelamento de até 30% do valor orçado.</li>
        <li>Cancelamentos de locação de van ou veículos corporativos com menos de 48 horas de antecedência podem ensejar retenção do sinal de garantia.</li>
      </ul>
    `
  },
  {
    title: 'Diretrizes de Conduta no Uso do Transporte',
    content: `
      <p>Para a segurança de todos, os passageiros e contratantes obrigam-se a:</p>
      <ul class="list-disc pl-5 mt-2 space-y-1.5">
        <li>Respeitar a lotação máxima permitida por lei do veículo disponibilizado.</li>
        <li>Não transportar substâncias ilegais, explosivos, inflamáveis ou materiais perigosos sem autorização expressa e documentada.</li>
        <li>Usar o cinto de segurança durante todo o trajeto, conforme exigido pelas leis de trânsito brasileiras (CTB).</li>
        <li>Zelar pela conservação do veículo contratado. Danos intencionais ou por negligência grave cometidos pelos passageiros serão integralmente faturados ao contratante.</li>
      </ul>
    `
  },
  {
    title: 'Limitações de Responsabilidade e Casos Fortuitos',
    content: `
      <p>A Banyago esforça-se para garantir máxima pontualidade e excelência logística. Contudo, não seremos responsabilizados por atrasos, desvios de rota ou impossibilidade de execução de serviços decorrentes de:</p>
      <ul class="list-disc pl-5 mt-2 space-y-1.5">
        <li>Casos fortuitos ou de força maior (ex: enchentes, acidentes graves na via, congestionamentos imprevisíveis, manifestações populares, greves gerais ou panes mecânicas imprevisíveis de última hora).</li>
        <li>Atrasos decorrentes de atraso do próprio passageiro ou contratante na coleta.</li>
        <li>Problemas de trânsito em Salvador e regiões metropolitanas que fujam de qualquer planejamento prévio de rota.</li>
      </ul>
      <p class="mt-2">Em caso de falha mecânica inesperada durante a execução do serviço, a Banyago compromete-se a fornecer um veículo substituto no menor tempo possível.</p>
    `
  },
  {
    title: 'Propriedade Intelectual',
    content: `
      <p>Todo o conteúdo deste website, incluindo logotipos, textos, imagens, ilustrações, códigos-fonte, layout e design gráfico, é de propriedade exclusiva da Banyago Transporte ou foi licenciado para esta. É estritamente proibida a cópia, reprodução ou distribuição do conteúdo para fins comerciais sem autorização expressa por escrito.</p>
    `
  },
  {
    title: 'Legislação e Foro Aplicável',
    content: `
      <p>Estes termos são regidos e interpretados de acordo com a legislação da República Federativa do Brasil.</p>
      <p class="mt-2">Para dirimir eventuais controvérsias decorrentes da utilização deste site ou da contratação dos serviços da Banyago, as partes elegem o Foro da Comarca de <strong>Salvador, Bahia</strong>, com exclusão de qualquer outro, por mais privilegiado que seja.</p>
    `
  }
]
</script>
