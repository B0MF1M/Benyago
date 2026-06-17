import type { ServiceCard, FleetVehicle, ProcessStep } from '~/shared/types'

export const SERVICES: ServiceCard[] = [
  {
    id: 'locacao-veiculos',
    title: 'Locação de Veículos',
    subtitle: 'Flexibilidade Total',
    description: 'Alugue o veículo ideal para sua rotina, viagem, compromisso profissional ou necessidade específica.',
    icon: 'key',
    features: [
      'Veículos para todas as necessidades',
      'Contratos flexíveis por período',
      'Manutenção e seguro inclusos',
      'Atendimento personalizado',
      'Entrega no local desejado'
    ],
    isHighlighted: true
  },
  {
    id: 'locacao-motorista',
    title: 'Locação com Motorista',
    subtitle: 'Conforto e Segurança',
    description: 'Mais conforto, segurança e tranquilidade para você se deslocar sem preocupação.',
    icon: 'user-circle',
    features: [
      'Motoristas experientes e qualificados',
      'Conhecimento das melhores rotas',
      'Pontualidade garantida',
      'Veículos sempre limpos e conservados',
      'Atendimento cortês e profissional'
    ]
  },
  {
    id: 'transporte-eventos',
    title: 'Transporte para Eventos',
    subtitle: 'Logística Personalizada',
    description: 'Atendimento para casamentos, shows, treinamentos, eventos corporativos, autoridades e convidados.',
    icon: 'calendar-days',
    features: [
      'Coordenação de múltiplos veículos',
      'Planejamento de rotas otimizadas',
      'Motoristas uniformizados',
      'Suporte durante todo o evento',
      'Flexibilidade de horários'
    ]
  },
  {
    id: 'transporte-escolar',
    title: 'Transporte Escolar',
    subtitle: 'Segurança em Primeiro Lugar',
    description: 'Serviço com responsabilidade, pontualidade e cuidado para conduzir quem você ama com segurança.',
    icon: 'academic-cap',
    features: [
      'Motoristas especializados',
      'Rotas organizadas e pontuais',
      'Acompanhamento em tempo real',
      'Veículos com equipamentos de segurança',
      'Comunicação constante com pais'
    ]
  },
  {
    id: 'transporte-cargas',
    title: 'Transporte de Cargas',
    subtitle: 'Logística Eficiente',
    description: 'Veículos preparados para empresas que precisam realizar entregas, transportar mercadorias ou movimentar materiais.',
    icon: 'truck',
    features: [
      'Frota diversificada para cargas',
      'Entregas programadas e urgentes',
      'Rastreamento em tempo real',
      'Seguro de carga incluído',
      'Equipe especializada em logística'
    ]
  }
]

export const FLEET: FleetVehicle[] = [
  {
    id: 'onix',
    name: 'Novo Onix',
    category: 'sedan',
    capacity: '5',
    description: 'Ideal para deslocamentos urbanos, viagens, compromissos profissionais e rotinas do dia a dia.',
    features: [
      'Ar condicionado',
      'Direção hidráulica',
      'Combustível flex',
      'Porta-malas espaçoso'
    ]
  },
  {
    id: 'cruze',
    name: 'Cruze',
    category: 'sedan',
    capacity: '5',
    description: 'Uma opção mais confortável para quem busca presença, estabilidade e uma experiência mais premium.',
    features: [
      'Interior premium',
      'Sistema multimídia',
      'Bancos em couro',
      'Controle de estabilidade'
    ]
  },
  {
    id: 'saveiro',
    name: 'Saveiro Robust',
    category: 'van',
    capacity: '2',
    description: 'Perfeita para entregas ágeis, pequenos volumes e transporte prático.',
    features: [
      'Caçamba resistente',
      'Baixo consumo',
      'Fácil manuseio urbano',
      'Capacidade de carga otimizada'
    ]
  },
  {
    id: 'fiorino',
    name: 'Fiorino / Utilitário Leve',
    category: 'van',
    capacity: '2',
    description: 'Ideal para empresas que precisam de agilidade em entregas urbanas e transporte de mercadorias.',
    features: [
      'Espaço de carga amplo',
      'Economia de combustível',
      'Agilidade urbana',
      'Fácil carregamento'
    ]
  },
  {
    id: 'mercedes710',
    name: 'Mercedes 710',
    category: 'truck',
    capacity: '3',
    description: 'Solução robusta para cargas maiores e demandas comerciais mais intensas.',
    features: [
      'Alta capacidade de carga',
      'Motor potente e econômico',
      'Estrutura reforçada',
      'Ideal para médias distâncias'
    ]
  },
  {
    id: 'iveco',
    name: 'Caminhão Iveco',
    category: 'truck',
    capacity: '3',
    description: 'Indicado para empresas que precisam otimizar entregas e garantir que seus produtos cheguem ao destino com segurança.',
    features: [
      'Tecnologia avançada',
      'Sistema de rastreamento',
      'Baixo custo operacional',
      'Manutenção especializada'
    ]
  }
]

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    step: 1,
    title: 'Fale Conosco',
    description: 'Entre em contato pelo WhatsApp e informe o tipo de serviço que você precisa.',
    icon: 'chat-bubble-left-right'
  },
  {
    id: 2,
    step: 2,
    title: 'Explique sua Necessidade',
    description: 'Pode ser locação, motorista, transporte escolar, evento, carga ou contrato empresarial.',
    icon: 'clipboard-document-list'
  },
  {
    id: 3,
    step: 3,
    title: 'Receba uma Proposta',
    description: 'Montamos o orçamento de acordo com o veículo, período, trajeto e tipo de atendimento.',
    icon: 'document-text'
  },
  {
    id: 4,
    step: 4,
    title: 'Conte com a Gente',
    description: 'Nossa equipe realiza o serviço com segurança, pontualidade e compromisso.',
    icon: 'check-circle'
  }
]

export const NAVIGATION_ITEMS = [
  { href: '#inicio', label: 'Início' },
  { href: '#services', label: 'Serviços' },
  { href: '#frota', label: 'Frota' },
  { href: '#contato', label: 'Contato' }
]

export const CONTACT_INFO = {
  phone: '(71) 99340-3630',
  whatsapp: '5571993403630',
  email: 'contato@benyago.com.br',
  instagram: 'benyagolocacao',
  address: 'Salvador, Bahia - Brasil'
}