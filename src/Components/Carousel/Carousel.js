import React, { useState } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'





export default function Carousel() {
  const customeSlider = React.createRef();
  const gotoNext = () => {
    customeSlider.current.slickNext()
  }

  const gotoPrev = () => {
    customeSlider.current.slickPrev()
  }
    const sliderSettings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        dots: false,
        
      }


    const hotelCards = [
      {
        imageSrc:
          'https://images.unsplash.com/photo-1559508551-44bff1de756b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
        title: 'Studio Room',
        description: 'Lorem ipsum dolor sit amet, consectur dolori',
        pricingText: 'USD 50/Day',
        features: ['Free Wifi', 'Free breakfast'],
      },
      {
        imageSrc:
          'https://images.unsplash.com/photo-1616940844649-535215ae4eb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        title: 'Deluxe Room',
        description: 'Lorem ipsum dolor sit amet, consectur dolori',
        pricingText: 'USD 80/Day',
        features: ['Free Wifi', 'Free breakfast'],
      },
      {
        imageSrc:
          'https://images.unsplash.com/photo-1599619351208-3e6c839d6828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
        title: 'King Deluxe Room',
        description: 'Lorem ipsum dolor sit amet, consectur dolori',
        pricingText: 'USD 150/Day',
        features: ['Free Wifi', 'Free breakfast'],
      },
      {
        imageSrc:
          'https://images.unsplash.com/photo-1461092746677-7b4afb1178f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        title: 'Royal Suite',
        description: 'Lorem ipsum dolor sit amet, consectur dolori',
        pricingText: 'USD 299/Day',
        features: ['Free Wifi', 'Free breakfast'],
      },
    ]
    
    return (
       <div className='content'>
         <div className="carusel-button-container">

          <button onClick={()=>gotoPrev()} className="carusel-button-container-left">←</button>
          <button onClick={()=>gotoNext()} className="carusel-button-container-right">→</button>
          </div>
      <Slider {...sliderSettings} arrows={false} ref={customeSlider}>
        {hotelCards.map((card, index) => (
          <div key={index}>
            
            <img alt={card.title} src={card.imageSrc} width="100" height="100" />
            <h4>{card.title}</h4>
            <br/>
            <p>{card.description}</p>
            
            
          </div>
        ))}
        
      </Slider>
      
    </div>


    )
  }