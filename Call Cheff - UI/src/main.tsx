
import React from 'react'
import ReactDOM from 'react-dom/client'

//Styles
import './styles/global.css'

//Components
import  EmblaCarousel from './components/carousel'
import { EmblaOptionsType } from 'embla-carousel'

// Fotos
import Logo from './assets/svg/Logo.svg'
import BgFoto from './assets/Bg-Foto.png'

import FTarabe from './assets/food/arabe.jpg'
import FTchinese from './assets/food/chinese.jpg'
import FTfeijoada from './assets/food/feijoada.png'
import FTitaliana from './assets/food/italiana.jpg'
import FTjaponese from './assets/food/japonese.jpg'
import FTmexicana from './assets/food/mexicana.jpg'


 const images = [
  FTarabe,
  FTchinese,
  FTfeijoada,
  FTitaliana,
  FTjaponese,
  FTmexicana
]
const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = images.length

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='flex flex-col'  >
      {/* <nav className='flex items-center justify-between w-10/12 mx-auto py-4 '>
        <div className='flex items-center'>
          <img className='mr-4' src={Logo} alt="" />
          <h1 className=' sm:visible invisible '> <a className='font-semibold text-dark' href="#">Call Cheff</a>  </h1>
        </div>
        <div className='flex gap-4 items-center sm:visible invisible'>
          <a className='font-semibold text-dark-orange' href="">Criar Conta</a>
          <button className='font-semibold text-light-grey bg-dark-orange py-2 px-4 rounded-full'>Entrar</button>
        </div>
      </nav> */}

      {/* <div className='flex bg-cover bg-no-repeat min-h-96 w-100' style={{ backgroundImage: `url(${BgFoto})` }}>

        <div className='flex items-center m-auto h-full w-10/12' >
          <input className='w-80 py-2 px-6 mr-4 rounded-full bg-light-grey text-medium-grey' type="text" placeholder='Insira seu endereço' name="pesquisaEndereço" id="pesquisaEndereço" />
          <button className=' py-2 px-6  rounded-full bg-dark-orange text-light-grey font-semibold'>Pesquisar</button>
        </div>
      </div > */}
      <div className='flex items-center mx-auto flex-col w-10/12 '>
        <div className='border-b-2 border-solid border-dark my-10'>
          <h3 className='text-dark font-semibold'>Experimente novas culinárias no conforto da sua casa</h3>
        </div>
    <EmblaCarousel slides={images}  options={OPTIONS}/>
        
          
      </div>
      {/*
      <div>
        <h3>Como funciona a Call Cheff?</h3>
        <div>
          <div>
            <img src="" alt="" />
            <h4>Em Sua Casa</h4>
            <p>Descubra sabores inovadores no conforto do seu lar com o serviço de Chef em Casa, onde chefs experientes preparam pratos gourmet personalizados diretamente na sua cozinha.</p>
          </div>
          <div>
            <img src="" alt="" />
            <h4>Sua Escolha</h4>
            <p>Descubra uma diversidade de pratos exóticos e saborosos em nosso site, trazendo os gostos de diversas partes do mundo para sua refeição.</p>
          </div>
          <div>
            <img src="" alt="" />
            <h4>Cozinheiros Especializados</h4>
            <p>Explore uma variedade de pratos exóticos e saborosos em nosso site, trazendo sabores de várias partes do mundo para a sua refeição.</p>
          </div>
        </div>
      </div> 
      
      {*/}
    </div>
  </React.StrictMode>
)
