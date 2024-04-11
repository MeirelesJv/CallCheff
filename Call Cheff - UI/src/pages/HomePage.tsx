
//Components
import DescritionArea from "../components/descritionArea";
import TitleSection from "../components/titlesection";

import EmblaCarousel from '../components/carousel'
import { EmblaOptionsType } from 'embla-carousel'

import { Footer } from "../components/footer";
import NavBar from "../components/navBar";

// Fotos
import BgFoto from '../assets/Bg-Foto.png'
import FTarabe from '../assets/food/arabe.jpg'
import FTchinese from '../assets/food/chinese.jpg'
import FTfeijoada from '../assets/food/feijoada.png'
import FTitaliana from '../assets/food/italiana.jpg'
import FTjaponese from '../assets/food/japonese.jpg'
import FTmexicana from '../assets/food/mexicana.jpg'

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

export function HomePage() {
  return (<>
    <NavBar />
    <div className='flex bg-cover bg-no-repeat min-h-96 w-100' style={{ backgroundImage: `url(${BgFoto})` }}>
      <div className='flex items-center m-auto h-full w-10/12' >
        <input className='w-80 py-2 px-6 mr-4 rounded-full bg-light-grey' placeholder="Insira seu endereço" />
        <button className='py-2 px-6  rounded-full bg-dark-orange text-light-grey font-semibold'></button>
      </div>
    </div >
    <div className='flex items-center mx-auto flex-col w-10/12 '>
      <div className='border-b-2 border-dark  my-10'>
        <h3 className='text-dark font-semibold' >Experimente novas culinárias no conforto da sua casa</h3>
      </div>
      <EmblaCarousel slides={images} options={OPTIONS} />
    </div>
    <div className='flex justify-center items-center flex-col w-10/12 mx-auto'>
      <div className='border-b-2 border-dark  my-10'>
        <h3 className='text-dark font-semibold' >Como funciona a Call Cheff?</h3>
      </div>
      <DescritionArea />
    </div>
    <Footer />
  </>
  )
}