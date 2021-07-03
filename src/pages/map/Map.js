import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../pics/logo-bk.svg'
import './map.css'
import LeafLet from './components/LeafLet'
import MarqueeMap from './components/MarqueeMap'

const Map = () => {
  return (
    <>
      <div className="map-area index-web-padding">
        <Logo className="map-logo" />
        <MarqueeMap/>
        <div className="d-flex">
          <LeafLet className="col-8"/>
          <div className="col-4">
          <div></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Map
