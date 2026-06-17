export const useIntersectionObserver = () => {
  const observer = ref<IntersectionObserver | null>(null)
  const isSupported = typeof window !== 'undefined' && 'IntersectionObserver' in window

  const observe = (
    element: Element,
    callback: IntersectionObserverCallback,
    options: IntersectionObserverInit = {}
  ) => {
    if (!isSupported || !element) return

    const defaultOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
      ...options
    }

    observer.value = new IntersectionObserver(callback, defaultOptions)
    observer.value.observe(element)
  }

  const unobserve = (element: Element) => {
    if (observer.value && element) {
      observer.value.unobserve(element)
    }
  }

  const disconnect = () => {
    if (observer.value) {
      observer.value.disconnect()
      observer.value = null
    }
  }

  const observeVisibility = (
    element: Element,
    onVisible: () => void,
    options: IntersectionObserverInit = {}
  ) => {
    observe(
      element,
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onVisible()
            unobserve(entry.target)
          }
        })
      },
      options
    )
  }

  onUnmounted(() => {
    disconnect()
  })

  return {
    observe,
    unobserve,
    disconnect,
    observeVisibility,
    isSupported
  }
}