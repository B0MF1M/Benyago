<template>
  <div :class="cardClasses">
    <div v-if="image" class="overflow-hidden" :class="imageContainerClass">
      <img 
        :src="image" 
        :alt="imageAlt || ''" 
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      >
    </div>
    
    <div :class="contentClasses">
      <div v-if="$slots.header" class="mb-4">
        <slot name="header" />
      </div>
      
      <div v-if="$slots.title" class="mb-3">
        <slot name="title" />
      </div>
      
      <div v-if="$slots.subtitle" class="mb-4">
        <slot name="subtitle" />
      </div>
      
      <div v-if="$slots.default" class="mb-6">
        <slot />
      </div>
      
      <div v-if="$slots.footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'default' | 'glass' | 'premium' | 'minimal'
  hover?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
  image?: string
  imageAlt?: string
  imageHeight?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  hover: true,
  padding: 'lg',
  imageHeight: 'md'
})

const cardClasses = computed(() => {
  const baseClasses = [
    'group rounded-3xl overflow-hidden transition-all duration-300'
  ]

  // Variant classes
  const variantClasses = {
    default: 'bg-warm-gray-800 border border-warm-gray-700',
    glass: 'glass-effect',
    premium: 'executive-card border border-rose-gold-500/10',
    minimal: 'bg-transparent'
  }

  // Hover effects
  const hoverClasses = props.hover ? 'floating-card hover:border-rose-gold-500/30' : ''

  return [
    ...baseClasses,
    variantClasses[props.variant],
    hoverClasses
  ].filter(Boolean).join(' ')
})

const contentClasses = computed(() => {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }
  
  return paddingClasses[props.padding]
})

const imageContainerClass = computed(() => {
  const heightClasses = {
    sm: 'h-32',
    md: 'h-48',
    lg: 'h-64'
  }
  
  return heightClasses[props.imageHeight]
})
</script>