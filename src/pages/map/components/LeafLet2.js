import React, { useRef } from 'react'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { MdLocationCity } from 'react-icons/md'
import $ from 'jquery'

class LeafLet2 extends React.Component {
  constructor() {
    super()
    this.state = {
      osmMap: '',
      center: [25.072615859459205, 121.52481019741808],
      zoom: 8,
      id: '',
    }
    //TODO:this.setmusEvent拿不到
    // this.setmusEvent = this.setmusEvent.bind(this)
  }

  componentDidMount(props) {

    //console.log(this)

    $('#osm-map').on('click', 'button', function () {
      let id = $('#osm-map button').data('id')
      // let id = 1
      getMusEventServer(id)
    })

    async function getMusEventServer(id) {

      const url = `http://localhost:6005/map/musEvent?idMuseum=${id}`

      // 注意header資料格式要設定，伺服器才知道是json格式
      const request = new Request(url, {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'appliaction/json',
        }),
      })

      const response = await fetch(request)
      const data = await response.json()
      // 設定資料
      //TODO:無法拿到props
      this.props.setmusEvent(data)
      // console.log(data)
    }

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
        id: '',
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

    // this.setState({ id: nextProps.museums.musId })
    // const btnRef = { useRef }

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
          `<b>${nextProps.museums[i].musName}</b><br><b>營業時間：09:00-17:00</b><br><b>休館時間：每週一 休管</b><br><button data-id=${nextProps.museums[i].musId}  class="mt-2 map-card-btn loca-btn" >查看活動`
        )
    }
  }

  render() {
    return <div id="osm-map"></div>
  }
}

export default LeafLet2
