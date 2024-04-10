import { InputHTMLAttributes } from "react";

interface InputSearchProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string,
  type?:string,
  name?:string,
  id?:string
}

function InputSearch({placeholder, type, name, id}:InputSearchProps){
  return(
    <input className='w-80 py-2 px-6 mr-4 rounded-full bg-light-grey' type={type} placeholder={placeholder} name={name} id={id}/>
  )
}

export default InputSearch;