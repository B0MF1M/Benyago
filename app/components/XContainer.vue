<template>
  <div :class="containerClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  padding?: boolean
  center?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'lg',
  padding: true,
  center: true
})

const containerClasses = computed(() => {
  const baseClasses = ['w-full']
  
  // Size classes - Professional system
  const sizeClasses = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl', 
    lg: 'max-w-7xl',
    xl: 'max-w-screen-xl',
    full: 'max-w-none'
  }

  const classes = [
    ...baseClasses,
    sizeClasses[props.size]
  ]

  if (props.center) {
    classes.push('mx-auto')
  }

  if (props.padding) {
    classes.push('px-6', 'lg:px-8')
  }

  return classes.join(' ')
})
</script>