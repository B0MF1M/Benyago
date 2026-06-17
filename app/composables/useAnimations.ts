export const useAnimations = () => {
  const { observeVisibility } = useIntersectionObserver()

  const animateOnScroll = (
    element: HTMLElement | null | undefined,
    animationClass: string = 'animate-fade-in-up',
    delay: number = 0
  ) => {
    if (!element) return

    const trigger = () => {
      setTimeout(() => {
        element.classList.add(animationClass)
        element.classList.remove('opacity-0', 'translate-y-8')
      }, delay)
    }

    // Inicialmente oculto
    element.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700')

    observeVisibility(element, trigger, {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    })
  }

  const staggeredAnimation = (
    elements: NodeListOf<HTMLElement> | HTMLElement[],
    animationClass: string = 'animate-fade-in-up',
    staggerDelay: number = 100
  ) => {
    Array.from(elements).forEach((element, index) => {
      animateOnScroll(element, animationClass, index * staggerDelay)
    })
  }

  const parallaxEffect = (
    element: HTMLElement | null,
    speed: number = 0.5
  ) => {
    if (!element) return

    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const elementTop = element.offsetTop
      const elementHeight = element.offsetHeight
      const windowHeight = window.innerHeight

      // Só aplica parallax quando o elemento está visível
      if (scrolled + windowHeight > elementTop && scrolled < elementTop + elementHeight) {
        const yPos = -(scrolled - elementTop) * speed
        element.style.transform = `translateY(${yPos}px)`
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })
  }

  const typewriterEffect = (
    element: HTMLElement | null,
    text: string,
    speed: number = 50
  ) => {
    if (!element) return

    element.textContent = ''
    let index = 0

    const type = () => {
      if (index < text.length) {
        element.textContent += text.charAt(index)
        index++
        setTimeout(type, speed)
      }
    }

    type()
  }

  return {
    animateOnScroll,
    staggeredAnimation,
    parallaxEffect,
    typewriterEffect
  }
}