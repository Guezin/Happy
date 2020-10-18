import React, { useState, FormEvent, ChangeEvent } from 'react'
import { useHistory } from 'react-router-dom'
import { Map, Marker, TileLayer } from 'react-leaflet'
import { LeafletMouseEvent } from 'leaflet'
import { FiPlus } from 'react-icons/fi'

import api from '../../services/api'

import Sidebar from '../../components/Sidebar'

import mapIcon from '../../utils/mapIcon'

import './styles.css'

export default function CreateOrphanage() {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 })
  const [name, setName] = useState('')
  const [about, setAbout] = useState('')
  const [instructions, setInstructions] = useState('')
  const [open_hours, setOpengHours] = useState('')
  const [open_on_weekends, setOpenOnWeekends] = useState(true)
  const [images, setImages] = useState<File[]>([])
  const [previewImages, setPreviewImages] = useState<string[]>([])

  const history = useHistory()

  const handleMapClick = (event: LeafletMouseEvent) => {
    const { lat, lng } = event.latlng

    setPosition({
      latitude: lat,
      longitude: lng
    })
  }

  const handleSelectImages = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return
    }

    const seletectedImages = Array.from(event.target.files)

    setImages(seletectedImages)

    const seletectedImagesPreview = seletectedImages.map(image => {
      return URL.createObjectURL(image)
    })

    setPreviewImages(seletectedImagesPreview)
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    const { latitude, longitude } = position

    const data = new FormData()
    data.append('teste', 'ola')
    data.append('name', name)
    data.append('about', about)
    data.append('latitude', String(latitude))
    data.append('longitude', String(longitude))
    data.append('instructions', instructions)
    data.append('open_hours', open_hours)
    data.append('open_on_weekends', String(open_on_weekends))

    images.forEach(image => data.append('images', image))

    await api.post('/orphanages', data)

    alert('Cadastro realizado com sucesso!')

    history.push('/orphanages')
  }

  return (
    <div id="page-create-orphanage">
      <Sidebar />

      <main>
        <form className="create-orphanage-form" onSubmit={handleSubmit}>
          <fieldset>
            <legend>Dados</legend>

            <Map
              center={[-23.4484407, -46.7297209]}
              style={{ width: '100%', height: 280 }}
              zoom={15}
              onclick={handleMapClick}
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />

              {position.latitude !== 0 && (
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[position.latitude, position.longitude]}
                />
              )}
            </Map>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                value={name}
                onChange={event => setName(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="about">
                Sobre <span>Máximo de 300 caracteres</span>
              </label>
              <textarea
                id="name"
                maxLength={300}
                value={about}
                onChange={event => setAbout(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="images-container">
                {previewImages.map(image => {
                  return <img key={image} src={image} alt={name} />
                })}

                <label htmlFor="image-array" className="new-image">
                  <FiPlus size={24} color="#15b6d6" />
                </label>

                <input
                  type="file"
                  id="image-array"
                  multiple
                  onChange={handleSelectImages}
                />
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea
                id="instructions"
                value={instructions}
                onChange={event => setInstructions(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="open_hours">Horário de funcionamento</label>
              <input
                id="open_hours"
                value={open_hours}
                onChange={event => setOpengHours(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button
                  type="button"
                  className={open_on_weekends ? 'active' : ''}
                  onClick={() => setOpenOnWeekends(true)}
                >
                  Sim
                </button>
                <button
                  type="button"
                  className={!open_on_weekends ? 'active' : ''}
                  onClick={() => setOpenOnWeekends(false)}
                >
                  Não
                </button>
              </div>
            </div>
          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>
      </main>
    </div>
  )
}

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
