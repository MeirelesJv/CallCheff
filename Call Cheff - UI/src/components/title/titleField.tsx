import { HTMLAttributes } from "react";

interface TitleFieldProps extends HTMLAttributes<HTMLDivElement> { }

export function TitleField(props: TitleFieldProps) {
  return (
    <div className='border-b-2 border-dark-orange  mb-12' {...props} />
  )
}
