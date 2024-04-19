import { InputHTMLAttributes } from "react";
import { useFormContext, FormProvider, useForm } from 'react-hook-form'

interface InputRadioProps extends InputHTMLAttributes<HTMLInputElement> {
  option: string,
  name:string
}


export function InputRadio(props: InputRadioProps) {
  const { register } = useFormContext()
  return (
    <>
      <input type="radio" {...register(props.name)} id={props.option} name={props.name} value={props.option} />
      <label htmlFor={props.name}>{props.option}</label>
    </>
  )
}


