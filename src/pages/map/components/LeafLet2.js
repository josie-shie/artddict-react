import React from 'react'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { MdLocationCity } from 'react-icons/md'

class LeafLet2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Px:this.props.Px,
      Px:this.props.Px
    }
  }

  //撈出城市的id
  // async function getMusByQuerySQL() {
  //   // e.preventDefault();
  //   const url = `http://localhost:6005/map?city=${city}`
  //   // 注意header資料格式要設定，伺服器才知道是json格式
  //   const request = new Request(url, {
  //     method: 'GET',
  //     headers: new Headers({
  //       Accept: 'application/json',
  //       'Content-Type': 'appliaction/json',
  //     }),
  //   })

  //   const response = await fetch(request)
  //   const data = await response.json()
  //   setMuseums(data)
  //   // 設定資料
  // }

  componentDidMount() {
    // create map
    const osmMap = L.map('osm-map', {
      //初始位置坐標
      center: [25.072615859459205, 121.52481019741808],//[Px, Py]
      zoom: 16,
      layers: [
        L.tileLayer(
          'https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}',
          {
            attribution:
              'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            subdomains: 'abcd',
            minZoom: 0,
            maxZoom: 20,
            ext: 'png',
          }
        ),
      ],
    })

    // 使用 leaflet-color-markers ( https://github.com/pointhi/leaflet-color-markers ) 當作 marker
    const musIcon = new L.Icon({
      iconUrl:
        'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
      shadowUrl:
        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    })

    const marker = L.marker(
      [25.072615859459205, 121.52481019741808],
      {
        icon: musIcon,
      }
    ).addTo(osmMap)

    marker
      .bindPopup('<b>Hello world!</b><br>I am a popup.')
      .openPopup()

    L.circle([25.072615859459205, 121.52481019741808], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 10,
    }).addTo(osmMap)
  }

  render() {
    return <div id="osm-map"></div>
  }
}

export default LeafLet2
