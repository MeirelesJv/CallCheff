import React from 'react'
import ReactDOM from 'react-dom/client'

//Styles
import './styles/global.css'

import {router} from './router'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='flex flex-col min-h-screen bg-light-grey'  >
      <RouterProvider  router={router} />  
    </div>
  </React.StrictMode>
)
