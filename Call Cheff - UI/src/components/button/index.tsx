import React, { ButtonHTMLAttributes, Children, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children:ReactNode
}

function Button({children}:ButtonProps) {
  return (
  <button  className='py-2 px-6  rounded-full bg-dark-orange text-light-grey font-semibold'>
    {children}
  </button>
)}

export default Button;