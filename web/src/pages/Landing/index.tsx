import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

import logoImg from '../../images/logo.svg'

import './styles.css'

const Landing: React.FC = () => {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Logo Happy" />

        <main>
          <h1>Leve falicidade para o mundo</h1>
          <p>Visíte orfanatos e mude o dia de muitas crianças</p>
        </main>

        <div className="location">
          <strong>São Paulo</strong>
          <span>Jaraguá</span>
        </div>

        <Link to="/orphanages" className="enter-app">
          <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
        </Link>
      </div>
    </div>
  )
}

export default Landing
