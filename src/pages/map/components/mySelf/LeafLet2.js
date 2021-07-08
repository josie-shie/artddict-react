import React from 'react'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { MdLocationCity } from 'react-icons/md'

class LeafLet2 extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    console.log(this)
    // //? 測試的資料
    // const data = [
    //   {
    //     name: '夢時代購物中心',
    //     lat: '22.595153',
    //     lng: '120.306923',
    //   },
    //   {
    //     name: '漢神百貨',
    //     lat: '22.61942',
    //     lng: '120.296386',
    //   },
    //   {
    //     name: '漢神巨蛋',
    //     lat: '22.669603',
    //     lng: '120.302288',
    //   },
    //   {
    //     name: '大統百貨',
    //     lat: '22.630748',
    //     lng: '120.318033',
    //   },
    // ]

    // create map
    const osmMap = L.map('osm-map', {
      //初始位置坐標
      center: [25.072615859459205, 121.52481019741808], //[Px, Py]
      zoom: 8,
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
    // //?套件 L.MarkerCluster當資料很多的時候只顯示區域總數(TODO)
    // //let markers = new L.MarkerClusterGroup().addTO(osmMap)

    // let markers = new L.MarkerClusterGroup().addTO(osmMap)

    // for (let i = 0; data.length > i; i++) {
    //   L.marker([data[i].lat, data[i].lng], {
    //     icon: greenIcon,
    //   })

    //     .addTo(osmMap)
    //     .bindPopup(`<b>${data[i].name}</b>`)
    //   // console.log(data);
    // }

    // for (let i = 0; museums.length > i; i++) {
    //   L.marker([museums[i].Px, museums[i].Py], {
    //     icon: greenIcon,
    //   })

    //     .addTo(osmMap)
    //     .bindPopup(`<b>${museums[i].musName}</b>`)
    //   // console.log(data);
    // }
  }

  compontentDidUpdate(prevProps, prevState) {
    console.log(this.props.museums)

    let museums = this.props.museums

    const osmMap = L.map('osm-map', {
      //初始位置坐標
      center: [museums[0].Px, museums[0].Py], //[Px, Py]
      zoom: 12,
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
    const greenIcon = new L.Icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
    const yellowIcon = new L.Icon({
      iconUrl:
        'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
      shadowUrl:
        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    })

    // for (let i = 0; museums.length > i; i++) {
    //   L.marker([museums[i].Px, museums[i].Py], {
    //     icon: greenIcon,
    //   })

    //     .addTo(osmMap)
    //     .bindPopup(`<b>${museums[i].musName}</b>`)
    // }
  }

  //test
    const marker = L.marker(
      [25.072615859459205, 121.52481019741808],
      {
        icon: greenIcon,
      }
    ).addTo(osmMap)

    const marker2 = L.marker(
      [24.072615859459205, 121.52481019741808],
      {
        icon: yellowIcon,
      }
    ).addTo(osmMap)

    marker
      .bindPopup('<b>Hello world!</b><br>I am a popup.')
      .openPopup()

    marker2
      .bindPopup('<b>Hello world!</b><br>I am a popup.')
      .openPopup()
  }

  render() {
    return <div id="osm-map"></div>
  }
}

export default LeafLet2
