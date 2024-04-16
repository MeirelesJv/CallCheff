
import { InputHTMLAttributes } from "react"
import { useFormContext } from "react-hook-form"

interface inputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

export function Input(props: inputProps) {
  const { register } = useFormContext()
  return (
    <input id={props.name} {...register(props.name)} {...props}
      className='w-full shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] py-2 px-6 rounded-full bg-light-grey' />

  )
}


