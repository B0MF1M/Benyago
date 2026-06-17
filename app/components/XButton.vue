<template>
  <component
    :is="tag"
    :href="href"
    :to="to"
    :type="type"
    :disabled="disabled"
    :class="buttonClasses"
    @click="handleClick"
  >
    <XIcon 
      v-if="iconLeft && !loading" 
      :name="iconLeft" 
      :size="iconSize" 
    />
    
    <span v-if="loading" class="animate-spin">
      <XIcon name="arrow-path" :size="iconSize" />
    </span>
    
    <span :class="{ 'opacity-0': loading }">
      <slot />
    </span>
    
    <XIcon 
      v-if="iconRight && !loading" 
      :name="iconRight" 
      :size="iconSize" 
    />
  </component>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'accent'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  href?: string
  to?: string
  type?: 'button' | 'submit' | 'reset'
  iconLeft?: string
  iconRight?: string
  fullWidth?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
  disabled: false,
  loading: false,
  fullWidth: false
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const tag = computed(() => {
  if (props.href) return 'a'
  if (props.to) return 'NuxtLink'
  return 'button'
})

const iconSize = computed(() => {
  const sizes = {
    sm: 'sm',
    md: 'sm', 
    lg: 'md'
  }
  return sizes[props.size] as 'sm' | 'md' | 'lg'
})

const buttonClasses = computed(() => [
  'btn-pro',
  {
    'btn-primary': props.variant === 'primary',
    'btn-secondary': props.variant === 'secondary',
    'btn-accent': props.variant === 'accent',
    'btn-outline': props.variant === 'outline',
    'btn-ghost': props.variant === 'ghost',
    'opacity-50 cursor-not-allowed': props.disabled || props.loading,
    'w-full': props.fullWidth,
    'px-3 py-2 text-sm': props.size === 'sm',
    'px-4 py-2.5 text-sm': props.size === 'md',
    'px-6 py-3 text-base': props.size === 'lg'
  }
])

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>