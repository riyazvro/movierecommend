// Debug utilities for performance monitoring

export const debugLog = (message, data = null) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[DEBUG] ${message}`, data || '')
  }
}

export const measureTime = (name, fn) => {
  const start = performance.now()
  const result = fn()
  const end = performance.now()
  
  if (process.env.NODE_ENV === 'development') {
    console.log(`[PERF] ${name} took ${(end - start).toFixed(2)}ms`)
  }
  
  return result
}

export const measureAsyncTime = async (name, fn) => {
  const start = performance.now()
  const result = await fn()
  const end = performance.now()
  
  if (process.env.NODE_ENV === 'development') {
    console.log(`[PERF] ${name} took ${(end - start).toFixed(2)}ms`)
  }
  
  return result
}

// Check for common performance issues
export const checkPerformanceIssues = () => {
  if (typeof window !== 'undefined') {
    // Check if too many images are loading
    const images = document.querySelectorAll('img')
    if (images.length > 50) {
      console.warn('[PERF] Too many images loaded:', images.length)
    }
    
    // Check for memory leaks
    if (performance.memory) {
      const memoryInfo = performance.memory
      if (memoryInfo.usedJSHeapSize > 50 * 1024 * 1024) { // 50MB
        console.warn('[PERF] High memory usage:', Math.round(memoryInfo.usedJSHeapSize / 1024 / 1024) + 'MB')
      }
    }
  }
}

// Debounce function to prevent excessive API calls
export const debounce = (func, wait) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Throttle function for scroll events
export const throttle = (func, limit) => {
  let inThrottle
  return function() {
    const args = arguments
    const context = this
    if (!inThrottle) {
      func.apply(context, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

// Monitor API calls
export const monitorApiCall = async (url, options = {}) => {
  const start = performance.now()
  try {
    const response = await fetch(url, options)
    const end = performance.now()
    
    if (process.env.NODE_ENV === 'development') {
      console.log(`[API] ${url} took ${(end - start).toFixed(2)}ms`)
    }
    
    return response
  } catch (error) {
    const end = performance.now()
    console.error(`[API] ${url} failed after ${(end - start).toFixed(2)}ms:`, error)
    throw error
  }
}
