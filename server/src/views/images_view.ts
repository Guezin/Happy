import Images from '../entities/Images'

export default {
  render(images: Images) {
    return {
      id: images.id,
      url: `http://192.168.0.4:3333/uploads/${images.path}`
    }
  },

  renderMany(images: Images[]) {
    return images.map(image => this.render(image))
  }
}
