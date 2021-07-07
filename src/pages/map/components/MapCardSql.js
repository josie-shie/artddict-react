import { React, useEffect, useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import '../map.scss'

import { RiArrowRightUpLine } from 'react-icons/ri'

const MapCardSql = (props) => {
  const [city, setCity] = props
  const [museums, setMuseums] = useState([])
  //const [dataLoading, setDataLoading] = useState(false)

  // 連接的伺服器資料網址
  async function getMuseumServer() {
    const url = 'http://localhost:6005/map'

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
    setMuseums(data)
  }

  async function getMusQueryServer() {
    const url = `http://localhost:6005/map?cityId=${city}`
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
    setMuseums(data)
    // 設定資料
  }

  useEffect(() => {
    getMuseumServer()
  }, [])

  const museumDisplay = museums.map((mus) => {
    return (
      <>
        <div className="map-card pb-3 mb-3">
          <Link key={mus.id}>
            <img
              className="w-100"
              src={`http://localhost:6005/museumpics/mus/${mus.musImg}`}
              alt=""
            />
          </Link>
          <div className="d-flex justify-content-between">
            <div className="col-9 pl-0">
              <strong>{mus.musName}</strong>
              <p>地點：{mus.musCity}</p>
              <p>時間：09:00-17:00</p>
            </div>
            <div className="map-card-btn text-center">
              <Link to="/map/museum:sid">
                <button className="px-2 pt-3">
                  更多活動
                  <RiArrowRightUpLine />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </>
    )
  })
  return <div>{museumDisplay}</div>
}

export default withRouter(MapCardSql)
