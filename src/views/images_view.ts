import Images from '../entities/Images'

export default {
  render(images: Images) {
    return {
      id: images.id,
      url: `http://localhost:3333/uploads/${images.path}`
    }
  },

  renderMany(images: Images[]) {
    return images.map(image => this.render(image))
  }
}
