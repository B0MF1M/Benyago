<template>
  <NuxtLink to="/" class="flex items-center group">
    <img
      :src="logoSrc"
      alt="Banyago Transporte e Locação"
      :style="imgStyle"
      class="transition-transform duration-300 group-hover:scale-105"
    />
  </NuxtLink>
</template>

<script setup lang="ts">


interface Props {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'light' | 'dark' | 'color'
  showText?: boolean
  showTagline?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  variant: 'color',
  showText: true,
  showTagline: false
})

const logoSrc = '/images/logo-v3.jpg'

const heightMap: Record<string, string> = {
  sm: '40px',
  md: '48px',
  lg: '56px',
  xl: '64px',
}

const imgStyle = computed(() => ({
  height: heightMap[props.size] ?? '48px',
  width: 'auto',
  display: 'block',
}))
</script>