import { ref } from 'vue'

const isLoading = ref(false)

export function useLoading() {
  const setLoading = (value) => {
    isLoading.value = value
  }

  return {
    isLoading,
    setLoading
  }
}
