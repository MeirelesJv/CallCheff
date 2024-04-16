import { HTMLAttributes } from "react";

interface FieldProps extends HTMLAttributes<HTMLDivElement> {}

export function Field(props: FieldProps) {
  return (
    <div className="flex flex-col items-start gap-1" {...props} />
  )
}