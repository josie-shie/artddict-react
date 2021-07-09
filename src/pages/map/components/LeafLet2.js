import React from 'react'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { MdLocationCity } from 'react-icons/md'

class LeafLet2 extends React.Component {
  constructor() {
    super()
    this.state = {
      osmMap: '',
      center: [25.072615859459205, 121.52481019741808],
      zoom: 8,
    }
  }

  componentDidMount() {
    //console.log(this)

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
    this.setState({
      osmMap: L.map('osm-map', {
        //初始位置坐標
        center: this.state.center,
        zoom: this.state.zoom,
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
      }),
    })

    // 使用 leaflet-color-markers ( https://github.com/pointhi/leaflet-color-markers ) 當作 marker
    // //?套件 L.MarkerCluster當資料很多的時候只顯示區域總數(TODO)
    // //let markers = new L.MarkerClusterGroup().addTO(osmMap)
  }

  //componentDidUpdate是無法拿到更改過的父層屬性的
  //要用componentWillReceiveProps偵查是否有新的富曾屬性傳入

  componentWillReceiveProps(nextProps) {
    console.log('nextProps.museums', nextProps.museums)

    //flyto
    this.state.osmMap.flyTo(
      [nextProps.museums[0].Px, nextProps.museums[0].Py],
      17
    )

    const greenIcon = new L.Icon({
      iconUrl:
        'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
      shadowUrl:
        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    })

    // L.marker([24.048828481572784, 120.68847639336789], {
    //   icon: greenIcon,
    // })
    //   .addTo(this.state.osmMap)
    //   .bindPopup(`<b>hello</b>`)

    for (let i = 0; nextProps.museums.length > i; i++) {
      L.marker(
        [nextProps.museums[i].Px, nextProps.museums[i].Py],
        {
          icon: greenIcon,
        }
      )
        .addTo(this.state.osmMap)
        .bindPopup(
          `<Link><b>${nextProps.museums[i].musName}</b><br><button>查看活動<button></Link>`
        )
    }
  }

  render() {
    return <div id="osm-map"></div>
  }
}

export default LeafLet2
