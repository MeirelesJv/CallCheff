
import React from 'react'
import ReactDOM from 'react-dom/client'

//Styles
import './styles/global.css'

//Components
import EmblaCarousel from './components/carousel'
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

import NavBar from './components/navBar'
import Button from './components/button'
import InputSearch from './components/input'
import TitleSection from './components/titlesection'
import DescritionArea from './components/descritionArea'
import { Footer } from './components/footer'


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

      <NavBar />

      <div className='flex bg-cover bg-no-repeat min-h-96 w-100' style={{ backgroundImage: `url(${BgFoto})` }}>
        <div className='flex items-center m-auto h-full w-10/12' >
          <InputSearch placeholder='Insira seu endereço' name='pesquisaEndereço' id='pesquisaEndereço' type='text' />
          <Button>Pesquisar</Button>
        </div>
      </div >

      <div className='flex items-center mx-auto flex-col w-10/12 '>
        <TitleSection>Experimente novas culinárias no conforto da sua casa</TitleSection>
        <EmblaCarousel slides={images} options={OPTIONS} />
      </div>

      <div className='flex justify-center items-center flex-col w-10/12 mx-auto'>
        <TitleSection>Como funciona a Call Cheff?</TitleSection>
        <DescritionArea />
      </div>

      <Footer />
      
    </div>
  </React.StrictMode>
)
