<template>
  <section id="contato" class="py-20 lg:py-24 bg-white">
    <div class="container-pro">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-14">
          <span class="text-xs font-semibold uppercase tracking-[0.2em] text-brand-electric inline-block mb-4">
            Contato
          </span>
          <h2 class="text-3xl lg:text-4xl font-extrabold text-brand-black leading-tight mb-4">
            Entre em <span class="text-gradient-brand">Contato</span>
          </h2>
          <p class="text-brand-dark/60 text-lg max-w-2xl mx-auto">
            Conte-nos sobre sua necessidade e receba um orçamento personalizado
          </p>
        </div>

        <div class="bg-brand-light rounded-3xl p-8 lg:p-12 border border-secondary-200 shadow-sm relative overflow-hidden">
          <div class="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-brand-electric/[0.04] to-transparent rounded-full -translate-y-32 translate-x-32 pointer-events-none" />

          <form @submit.prevent="sendToWhatsApp" class="relative space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div class="space-y-2">
                <label for="nome" class="block text-sm font-bold text-brand-black">Nome Completo *</label>
                <input id="nome" v-model="form.nome" type="text" required
                  class="input-pro"
                  placeholder="Seu nome completo" />
              </div>
              <div class="space-y-2">
                <label for="telefone" class="block text-sm font-bold text-brand-black">WhatsApp *</label>
                <input id="telefone" v-model="form.telefone" type="tel" required
                  class="input-pro"
                  placeholder="(71) 99999-9999" />
              </div>
            </div>

            <div class="space-y-2">
              <label for="servico" class="block text-sm font-bold text-brand-black">Tipo de Serviço *</label>
              <select id="servico" v-model="form.servico" required class="select-pro">
                <option value="">Selecione o serviço desejado</option>
                <option value="Locação de Veículos">Locação de Veículos</option>
                <option value="Locação com Motorista">Locação com Motorista</option>
                <option value="Transporte para Eventos">Transporte para Eventos</option>
                <option value="Transporte Escolar">Transporte Escolar</option>
                <option value="Transporte de Cargas">Transporte de Cargas</option>
                <option value="Plano Empresarial">Plano Empresarial</option>
              </select>
            </div>

            <div class="space-y-2">
              <label for="detalhes" class="block text-sm font-bold text-brand-black">Detalhes da Necessidade *</label>
              <textarea id="detalhes" v-model="form.detalhes" required rows="4"
                class="textarea-pro"
                placeholder="Descreva sua necessidade: quando precisa, quantas pessoas, destino, frequência..."
              />
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <div class="space-y-2">
                <label for="data" class="block text-sm font-bold text-brand-black">Data Desejada</label>
                <input id="data" v-model="form.data" type="date" class="input-pro" />
              </div>
              <div class="space-y-2">
                <label for="urgencia" class="block text-sm font-bold text-brand-black">Urgência</label>
                <select id="urgencia" v-model="form.urgencia" class="select-pro">
                  <option value="Normal">Normal (até 48h)</option>
                  <option value="Urgente">Urgente (até 24h)</option>
                  <option value="Muito Urgente">Muito Urgente (hoje)</option>
                </select>
              </div>
            </div>

            <div class="pt-4">
              <XButton type="submit" size="lg" full-width
                class="!bg-brand-electric !border-brand-electric !text-white hover:!shadow-lg hover:!shadow-brand-electric/25 !transition-all !duration-300 !rounded-xl !font-bold !py-4"
              >
                Enviar Mensagem
              </XButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CONTACT_INFO } from '~/utils/constants'

const contactInfo = CONTACT_INFO

const form = ref({
  nome: '',
  telefone: '',
  servico: '',
  detalhes: '',
  data: '',
  urgencia: 'Normal'
})

const sendToWhatsApp = () => {
  if (!form.value.nome || !form.value.telefone || !form.value.servico || !form.value.detalhes) {
    alert('Por favor, preencha todos os campos obrigatórios.')
    return
  }

  const telefoneClean = form.value.telefone.replace(/\D/g, '')
  if (telefoneClean.length < 10) {
    alert('Por favor, insira um número de telefone válido.')
    return
  }

  let mensagem = `*Solicitação de Orçamento - Banyago Transporte*\n\n`
  mensagem += `*Nome:* ${form.value.nome}\n`
  mensagem += `*WhatsApp:* ${form.value.telefone}\n`
  mensagem += `*Serviço:* ${form.value.servico}\n`

  if (form.value.data) {
    const date = new Date(form.value.data + 'T00:00:00')
    mensagem += `*Data Desejada:* ${date.toLocaleDateString('pt-BR')}\n`
  }

  mensagem += `*Urgência:* ${form.value.urgencia}\n\n`
  mensagem += `*Detalhes:*\n${form.value.detalhes}\n\n`
  mensagem += `---\nAguardo retorno com o orçamento.`

  const whatsappUrl = `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(mensagem)}`
  window.open(whatsappUrl, '_blank')

  alert('Mensagem preparada! Você será redirecionado para o WhatsApp.')

  form.value = { nome: '', telefone: '', servico: '', detalhes: '', data: '', urgencia: 'Normal' }
}
</script>
