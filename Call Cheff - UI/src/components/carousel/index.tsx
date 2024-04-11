import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'

import useEmblaCarousel from 'embla-carousel-react'
import './carousel.css'
import Autoplay from 'embla-carousel-autoplay'

type PropType = {
  slides: string[]
  options?: EmblaOptionsType
  
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 5000 })
  ])
  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
        {slides.map((src,index) => (
            <div className="embla__slide bg-white" key={index}>
              <img className='embla__item' key={index} src={src} alt="" />
              <div className='embla__item text-dark font-semibold'>Descrição</div>
              
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default EmblaCarousel