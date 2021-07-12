import { React, useState } from 'react'
import { Row, Carousel } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'

// Pictures
import CaroPic1 from '../images/event/013.jpg'
import CaroPic2 from '../images/event/003.jpg'
import CaroPic3 from '../images/event/108.jpg'
import CaroPic4 from '../images/event/006.jpg'
import CaroPic5 from '../images/event/109.jpg'
import { ReactComponent as CaroCtrL } from '../images/caroL.svg'
import { ReactComponent as CaroCtrR } from '../images/caroR.svg'

import '../style/EDetailCaro.scss'

function EDetailCaro() {
    const [index, setIndex] = useState(0)
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex)
    }
  return (
    <>
      <Row
        className="d-flex justify-content-center position-relative
          "
      >
        <Carousel
          className="col-9 my-4 e-detail-caro p-0"
          controls={false}
          indicators={false}
          activeIndex={index}
          onSelect={handleSelect}
          slide={true}
        >
          <Carousel.Item>
            <Link to="/event/event-list/detail/23">
              <img
                className="d-block w-100"
                src={CaroPic1}
                alt="First slide"
              />
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link to="/event/event-list/detail/3">
              <img
                className="d-block w-100"
                src={CaroPic2}
                alt="Second slide"
              />
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link to="/event/event-list/detail/26">
              <img
                className="d-block w-100"
                src={CaroPic3}
                alt="Third slide"
              />
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link to="/event/event-list/detail/6">
              <img
                className="d-block w-100"
                src={CaroPic4}
                alt="Second slide"
              />
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link to="/event/event-list/detail/27">
              <img
                className="d-block w-100"
                src={CaroPic5}
                alt="Third slide"
              />
            </Link>
          </Carousel.Item>
        </Carousel>
        <CaroCtrL
          className="e-caro-ctr-l position-absolute"
          onClick={() =>
            index <= 0 ? 0 : setIndex(index - 1)
          }
        />
        <CaroCtrR
          className="e-caro-ctr-r position-absolute"
          onClick={() =>
            index >= 4 ? 4 : setIndex(index + 1)
          }
        />
      </Row>
    </>
  )
}

export default withRouter(EDetailCaro)
