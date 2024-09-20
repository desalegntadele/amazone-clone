import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import {images} from './images/data'
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import classes from './Carousel.module.css'

function CarouselEffect() {
  return (
    <>
      <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showIndicators={false}   
      showThumbs={false}
   >
     { 
     images.map((imgitemlinks)=>{
      return <img src={imgitemlinks}/>
     })
     }
      </Carousel>
      <div className={classes.betity_img}></div>
    </>
  )
}

export default CarouselEffect