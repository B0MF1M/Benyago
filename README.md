# Benyago - Landing Page Premium

Landing page premium para a Benyago, empresa de transporte executivo de alto padrão em Salvador/BA.

## 🎯 Objetivo

Criar uma presença digital que reflita a excelência e sofisticação dos serviços da Benyago, com foco em conversão e experiência premium do usuário.

## 🚀 Tecnologias

- **Nuxt 4** - Framework Vue.js com SSR/SSG
- **TypeScript** - Tipagem estática para maior confiabilidade
- **Tailwind CSS** - Framework CSS utilitário para design system consistente
- **Headless UI** - Componentes acessíveis e sem estilo
- **Vue 3 Composition API** - Reatividade moderna e performance otimizada

## 🎨 Design System

### Paleta de Cores
- **Obsidian** (950-50): Base escura premium
- **Platinum** (950-50): Textos e elementos neutros
- **Electric Green** (950-50): Cor primária (ação e destaque)
- **Amber Glow** (950-50): Cor secundária (sofisticação)

### Tipografia
- **Display**: Playfair Display (títulos e headings)
- **Sans**: Inter (textos e UI)
- **Mono**: Space Grotesk (detalhes técnicos)

### Componentes Base
- `XIcon` - Sistema de ícones unificado
- `XButton` - Botões com estados e variantes
- `XContainer` - Wrapper responsivo consistente
- `XCard` - Cards modulares com efeitos glass

## 📱 Experiência do Usuário

### Microinterações
- Animações suaves de entrada (fade, slide, scale)
- Efeitos hover sofisticados
- Transições entre estados
- Parallax sutil em backgrounds

### Responsividade
- Mobile-first design
- Breakpoints otimizados para executivos
- Touch-friendly em dispositivos móveis
- Testes em dispositivos reais

### Performance
- Lazy loading de imagens
- Code splitting automático
- Otimização de fonts
- Compressão de assets

## 🔧 Estrutura do Projeto

```
app/
├── components/          # Componentes reutilizáveis
│   ├── X*.vue          # Sistema de design base
│   ├── The*.vue        # Componentes de layout
│   └── Section*.vue    # Seções da landing page
├── composables/        # Lógica reativa reutilizável
├── layouts/            # Layouts da aplicação
├── pages/             # Páginas e rotas
└── utils/             # Utilitários e constantes
shared/
└── types/             # Tipos TypeScript globais
```

## 🚀 Como Executar

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview

# Verificação de tipos
npm run type-check

# Lint do código
npm run lint
```

## 📊 Métricas de Conversão

### CTAs Principais
1. **WhatsApp Business** - Contato direto e imediato
2. **Formulário de Orçamento** - Lead qualificado
3. **Ligação Direta** - Urgência e confiança

### Pontos de Conversão
- Hero section (acima da dobra)
- Final de cada seção de serviço
- Processo simplificado
- Múltiplos pontos de contato

## 🎯 SEO e Performance

### Otimizações Técnicas
- Meta tags dinâmicas
- Schema.org structured data
- Sitemap automático
- Open Graph + Twitter Cards
- Canonical URLs

### Core Web Vitals
- LCP < 2.5s (otimização de imagens)
- FID < 100ms (código otimizado)
- CLS < 0.1 (layout estável)

## 📞 Integração WhatsApp

Sistema integrado de contato via WhatsApp Business:
- Mensagens pré-formatadas por contexto
- Rastreamento de origem do lead
- Botão flutuante fixo
- CTAs contextuais em cada seção

## 🔒 Compliance e Segurança

- LGPD compliance
- Política de privacidade
- Termos de uso
- Dados sensíveis em variáveis de ambiente
- Validação client-side e server-side

## 🚀 Deploy e Hospedagem

### Recomendações
- **Vercel** ou **Netlify** para deploy automatizado
- **Cloudflare** para CDN e performance
- **Domínio próprio** com SSL
- **Analytics** e **Hotjar** para métricas

### Variáveis de Ambiente
```bash
NUXT_PUBLIC_WHATSAPP_NUMBER=5571999999999
NUXT_PUBLIC_PHONE_NUMBER=+55 (71) 99999-9999
NUXT_PUBLIC_EMAIL=contato@benyago.com.br
NUXT_PUBLIC_ANALYTICS_ID=GA_MEASUREMENT_ID
```

## 📈 Próximos Passos

1. **Integração de Analytics** (GA4, Hotjar)
2. **Sistema de CRM** (leads do formulário)
3. **Chat integrado** (Zendesk, Intercom)
4. **Blog corporativo** (/blog)
5. **Área do cliente** (acompanhamento de viagens)
6. **Multilíngua** (EN, ES para turismo)

## 🤝 Contribuição

Este projeto segue as melhores práticas de desenvolvimento:
- Commits convencionais
- TypeScript strict mode
- ESLint + Prettier
- Testes unitários (Vitest)
- Code review obrigatório

---

**Benyago** - Redefinindo o transporte executivo em Salvador