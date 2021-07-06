import React from 'react'
import L from 'leaflet'


class LeafLet2 extends React.Component {
  componentDidMount() {
    // create map
    this.map = L.map('osm-map', {
      //初始位置坐標
      center: [25.0724118, 121.5226215],
      zoom: 16,
      layers: [
        L.tileLayer(
          'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
          {
            //呼叫地圖圖層 不然會顯示空白
            attribution:
              '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
          }
        ),
      ],
    })
  }
  render() {
    return (
      
        <div id="osm-map"></div>
      
    )
  }
}

export default LeafLet2
