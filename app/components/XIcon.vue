<template>
  <component
    :is="iconComponent"
    :class="[
      'flex-shrink-0',
      sizeClass,
      colorClass
    ]"
    :aria-hidden="!ariaLabel"
    :aria-label="ariaLabel"
  />
</template>

<script setup lang="ts">
import * as HeroIcons from '@heroicons/vue/24/outline'

interface Props {
  name: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  color?: 'current' | 'primary' | 'secondary' | 'accent' | 'muted'
  ariaLabel?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  color: 'current'
})

// Converte kebab-case para PascalCase e adiciona Icon
const iconComponent = computed(() => {
  const pascalCaseName = props.name
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('') + 'Icon'
  
  return HeroIcons[pascalCaseName as keyof typeof HeroIcons] || HeroIcons.QuestionMarkCircleIcon
})

const sizeClass = computed(() => {
  const sizes = {
    xs: 'w-4 h-4',
    sm: 'w-5 h-5', 
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-10 h-10',
    '2xl': 'w-12 h-12'
  }
  return sizes[props.size]
})

const colorClass = computed(() => {
  const colors = {
    current: 'text-current',
    primary: 'text-rose-gold-500',
    secondary: 'text-warm-gray-400',
    accent: 'text-pearl-300',
    muted: 'text-warm-gray-500'
  }
  return colors[props.color]
})
</script>