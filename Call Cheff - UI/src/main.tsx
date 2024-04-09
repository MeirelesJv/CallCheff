
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
import iconHome from './assets/svg/homeIcon.svg'
import iconChef from './assets/svg/chefIcon.svg'
import iconFood from './assets/svg/foodIcon.svg'
import NavBar from './components/navBar'


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
          <input className='w-80 py-2 px-6 mr-4 rounded-full bg-light-grey ' type="text" placeholder='Insira seu endereço' name="pesquisaEndereço" id="pesquisaEndereço" />
          <button className=' py-2 px-6  rounded-full bg-dark-orange text-light-grey font-semibold'>Pesquisar</button>
        </div>
      </div >
      <div className='flex items-center mx-auto flex-col w-10/12 '>
        <div className='border-b-2 border-solid border-dark my-10'>
          <h3 className='text-dark font-semibold'>Experimente novas culinárias no conforto da sua casa</h3>
      </div>
        <EmblaCarousel slides={images} options={OPTIONS} />


      </div>
      <div className='flex justify-center items-center flex-col w-10/12 mx-auto'>
        <div className='border-b-2 border-dark  my-10'>
          <h3 className='text-dark font-semibold' >Como funciona a Call Cheff?</h3>
        </div>
        <div className='flex justify-between  w-full '>
          <div className='flex items-center flex-col max-w-64 gap-4 px-4'>
            <img src={iconHome} alt="" />
            <h4 className='text-dark font-semibold font-md'>Em Sua Casa</h4>
            <p className='text-dark text-justify text-sm'>Descubra sabores inovadores no conforto do seu lar com o serviço de Chef em Casa, onde chefs experientes preparam pratos gourmet personalizados diretamente na sua cozinha.</p>
          </div>
          <div className='flex items-center flex-col max-w-64 gap-4 px-4'>
            <img src={iconFood} alt="" />
            <h4 className='text-dark font-semibold font-md'>Sua Escolha</h4>
            <p className='text-dark text-justify text-sm'>Descubra uma diversidade de pratos exóticos e saborosos em nosso site, trazendo os gostos de diversas partes do mundo para sua refeição.</p>
          </div >
          <div className='flex items-center flex-col max-w-64 gap-4 px-4'>
            <img src={iconChef} alt="" />
            <h4 className='text-center px-2 text-dark font-semibold font-md text-wrap'>Cozinheiros Especializados</h4>
            <p className='text-dark text-justify text-sm'>Explore uma variedade de pratos exóticos e saborosos em nosso site, trazendo sabores de várias partes do mundo para a sua refeição.</p>
          </div>
        </div>
      </div>



      <footer className="bg-white rounded-lg shadow mt-10 mb-6 mx-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://github.com/MeirelesJv/CallCheff" className="hover:underline">Call Chef</a>. All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">About</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
      </footer>



    </div>
  </React.StrictMode>
)
