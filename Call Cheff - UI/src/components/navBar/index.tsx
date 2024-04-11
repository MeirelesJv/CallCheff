
import React from 'react';
import Logo from '../../assets/svg/Logo.svg'

const NavBar = () => {
  return (
    <nav className='flex items-center justify-between w-10/12 mx-auto py-4 '>
      <div className='flex items-center'>
        <img className='mr-4' src={Logo} alt="" />
        <h1 className=' sm:visible invisible '>
          <a className='font-semibold text-dark' href="#">Call Cheff</a>
        </h1>
      </div>
      <div className='flex gap-4 items-center sm:visible invisible'>
        <a className='font-semibold text-dark-orange' href="">Criar Conta</a>
        <button className='py-2 px-6  rounded-full bg-dark-orange text-light-grey font-semibold'>
          Entrar
        </button>
      </div>
    </nav>
  )

}

export default NavBar;