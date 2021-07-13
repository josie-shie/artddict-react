import React, { useRef } from 'react'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { MdLocationCity } from 'react-icons/md'
import $ from 'jquery'

class LeafLet2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      osmMap: '',
      center: [25.03510864415966, 121.54265681361893],
      zoom: 5,
    }
  }

  componentDidMount() {
    console.log('didMount', this.props)
    console.log('didMount', this.state)

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(
            position.coords.latitude,
            position.coords.longitude
          )
          this.setState({
            ...this.state,
            center: [
              position.coords.latitude,
              position.coords.longitude,
            ],
          })
          console.log(this.state)
        }
      )
    } else {
      return '無法取用您的位置'
    }

    const setmusEvent = this.props.setmusEvent

    //!!將韓式傳進去綁定作用域 (傳入一個函式的函式稱為高階函式)

    const getMusEventServer = async (id, setmusEvent) => {
      //console.log('SQL', this)

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
      //FIXME::無法拿到props
      // this.props.setmusEvent(data)
      setmusEvent(data)
      //console.log("sql",this.props)
    }

    const redIcon = new L.Icon({
      iconUrl:
        'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
      shadowUrl:
        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    })

    // let marker = L.marker(
    //   [25.03510864415966, 121.54265681361893],
    //   {
    //     icon: redIcon,
    //   }
    // )
    //   .addTo(this.state.osmMap)
    //   .bindPopup(
    //     `<div class="popup-card"><b>｜美學無所不在，探索從此刻開始｜</b><br><strong>您的所在位置</strong></div>`
    //   )
    //   .openPopup()

    $('#osm-map').on('click', 'button', () => {
      let id = $('#osm-map button').data('id')
      // let id = 1
      console.log(setmusEvent)
      getMusEventServer(id, setmusEvent)
    })

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
          // L.marker([this.state.center], {
          //   icon: redIcon,
          // })
          //   .addTo(this.state.osmMap)
          //   .bindPopup(
          //     `<div class="popup-card"><b>｜美學無所不在，探索從此刻開始｜</b><br><strong>您的所在位置</strong></div>`
          //   )
          //   .openPopup(),
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

    // this.setState({ id: nextProps.museums.musId })
    // const btnRef = { useRef }

    //flyto
    this.state.osmMap.flyTo(
      [nextProps.museums[0].Px, nextProps.museums[0].Py],
      13
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
          `<b>${nextProps.museums[i].musName}</b><br><b>營業時間：09:00-17:00</b><br><b>休館時間：每週一 休館</b><br><button data-id=${nextProps.museums[i].musId}  class="mt-2 map-card-btn loca-btn" >查看活動`
        )
    }
  }

  render() {
    return <div id="osm-map"></div>
  }
}

export default LeafLet2
