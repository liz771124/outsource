const images = import.meta.glob('/src/assets/img/sponsor/*.{png,jpg,jpeg,svg,gif}', { eager: true })
const sponsors = {}
Object.entries(images).forEach(([path, module]) => {
  const fileName = path.split('/').pop().split('.')[0]
  sponsors[fileName] = module.default || module
})

export default sponsors
