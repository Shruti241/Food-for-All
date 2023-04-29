import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import meter1 from '../assets/img/Carousel/1.png';
import meter2 from '../assets/img/Carousel/2.png';
import meter3 from '../assets/img/Carousel/3.png';
import meter4 from '../assets/img/Carousel/4.png';
import meter5 from '../assets/img/Carousel/5.png'
import meter6 from '../assets/img/Carousel/6.png'
import meter7 from '../assets/img/Carousel/7.png'
import meter8 from '../assets/img/Carousel/8.png'
import meter9 from '../assets/img/Carousel/9.png'
import meter10 from '../assets/img/Carousel/10.png'
import meter11 from '../assets/img/Carousel/11.png'
import meter12 from '../assets/img/Carousel/12.png'
import meter13 from '../assets/img/Carousel/13.png'
import meter14 from '../assets/img/Carousel/14.png'
import meter15 from '../assets/img/Carousel/15.png'
import meter16 from '../assets/img/Carousel/16.png'

import '../App.css';
import './Pastwork.css'

export const Pastwork = () => {
  return (
    <section className='pastwork' id='pastwork'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center">Past Work</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Carousel className="custom-carousel">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={meter1}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>Annapurna</h3>
                  <p>The Annapurna food drive campaign collects and distributes food items to people in need, including those affected by poverty, natural disasters, and other crises. The campaign collects a variety of food items, including grains, pulses, oil, sugar, and spices.</p>
                  <button className="btn btn-primary">Learn more</button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={meter2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={meter3}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={meter4}
                  alt="Fourth slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={meter5}
                  alt="fifth slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={meter6}
                  alt="sixth slide"
                />
              </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={meter7}
                    alt="seventh slide"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={meter8}
                    alt="eighth slide"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={meter9}
                    alt="ninth slide"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={meter10}
                    alt="tenth slide"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={meter11}
                    alt="eleventh slide"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={meter12}
                    alt="twelfth slide"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={meter13}
                    alt="eleventh slide"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={meter14}
                    alt="eleventh slide"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={meter15}
                    alt="eleventh slide"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={meter16}
                    alt="eleventh slide"
                />
                </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}

