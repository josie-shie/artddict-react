import React, { useEffect } from 'react'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import $ from 'jquery'

const LeafLet = () => {
  //載入地圖圖層 不然會是空白

  let map

  useEffect(() => {
    //L leaflet起手式
    //.setView[經度緯度縮放程度]
    map = L.map('osm-map').setView([-25.363, 131.044], 5)

    L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        attribution:
          '<a href="https://www.openstreetmap.org/">OSM</a>',
        maxZoom: 18,
      }
    ).addTo(map)

    let marker = L.marker([-25.363, 131.044])
    marker.addTo(map)
  }, [])

  return (
    <>
      <div id="osm-map2" />
    </>
  )
}

export default LeafLet
