import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?:string
}

export function Button(props: ButtonProps) {
  return(
    <button className='text-center mt-6 py-2 px-6 rounded-full bg-dark-orange text-light-grey font-semibold'> {props.children} </ button>     
  )
}