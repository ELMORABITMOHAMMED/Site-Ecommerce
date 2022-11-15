import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import image from "../../assets/images/pexels-ylanite-koppens-934070.jpg"
import image1 from "../../assets/images/pexels-iram-shehzad-9780700.jpg"
import image2 from "../../assets/images/pexels-lumn-322207.jpg"
import './Slide.css'

const Slide = () => {

  return (
    <Carousel className='slider'>
      <Carousel.Item className='slider'>
        <img
          className="d-block w-100"
          src={image}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption >
      </Carousel.Item>
      <Carousel.Item className='slider'>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='slider'>
        <img
          className="d-block w-100"
          src={image1}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slide