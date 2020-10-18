import imageView from './images_view'

import Orphanage from '../entities/Orphanage'

export default {
  render(orphanage: Orphanage) {
    return {
      id: orphanage.id,
      name: orphanage.name,
      latitude: orphanage.latitude,
      longitude: orphanage.longitude,
      about: orphanage.about,
      instructions: orphanage.instructions,
      open_hours: orphanage.open_hours,
      open_on_weekends: orphanage.open_on_weekends,
      images: imageView.renderMany(orphanage.images)
    }
  },

  renderMany(orphanges: Orphanage[]) {
    return orphanges.map(orphange => this.render(orphange))
  }
}
