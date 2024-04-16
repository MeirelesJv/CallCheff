import { LabelHTMLAttributes } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: string
}

export function Label(props: LabelProps) {
  return (
    <label className="ml-6">{props.children}</label>
  )
}