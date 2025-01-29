export function scrollToElement(id) {
  if (!id) return

  // 取得目標元素
  const target = document.getElementById(id)
  if (!target) return

  const navbar = document.querySelector('.navbar')
  const navbarHeight = navbar ? navbar.offsetHeight : 0

  const targetPosition =
    target.getBoundingClientRect().top + window.scrollY - navbarHeight - 30

  window.scrollTo({ top: targetPosition, behavior: 'smooth' })
}
