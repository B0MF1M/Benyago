import { CONTACT_INFO } from '~/utils/constants'

interface ContactFormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

interface FormState {
  isSubmitting: boolean
  isSuccess: boolean
  error: string | null
}

export const useContactForm = () => {
  const formData = ref<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const formState = ref<FormState>({
    isSubmitting: false,
    isSuccess: false,
    error: null
  })

  const resetForm = () => {
    formData.value = {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    }
    formState.value = {
      isSubmitting: false,
      isSuccess: false,
      error: null
    }
  }

  const validateForm = (): boolean => {
    const { name, email, phone } = formData.value

    if (!name.trim()) {
      formState.value.error = 'Nome é obrigatório'
      return false
    }

    if (!email.trim()) {
      formState.value.error = 'E-mail é obrigatório'
      return false
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      formState.value.error = 'E-mail inválido'
      return false
    }

    if (!phone.trim()) {
      formState.value.error = 'Telefone é obrigatório'
      return false
    }

    const phoneRegex = /^[\d\s\-\(\)\+]{10,}$/
    if (!phoneRegex.test(phone.replace(/\D/g, ''))) {
      formState.value.error = 'Telefone inválido'
      return false
    }

    formState.value.error = null
    return true
  }

  const submitForm = async (): Promise<boolean> => {
    if (!validateForm()) return false

    formState.value.isSubmitting = true
    formState.value.error = null

    try {
      // Simula envio da API
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Aqui seria a chamada real para a API
      // const response = await $fetch('/api/contact', {
      //   method: 'POST',
      //   body: formData.value
      // })

      formState.value.isSuccess = true
      return true
    } catch (error) {
      formState.value.error = 'Erro ao enviar mensagem. Tente novamente.'
      return false
    } finally {
      formState.value.isSubmitting = false
    }
  }

  const openWhatsApp = (message?: string | Event) => {
    const phone = CONTACT_INFO.whatsapp // Número do WhatsApp
    const defaultMessage = `Olá! Gostaria de solicitar um orçamento para transporte executivo.`
    const textMsg = typeof message === 'string' ? message : defaultMessage
    const text = encodeURIComponent(textMsg)
    const url = `https://wa.me/${phone}?text=${text}`
    window.open(url, '_blank')
  }

  return {
    formData: readonly(formData),
    formState: readonly(formState),
    resetForm,
    submitForm,
    openWhatsApp
  }
}