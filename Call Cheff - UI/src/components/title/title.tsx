import { Children, HtmlHTMLAttributes } from "react";

interface DescriptionProps extends HtmlHTMLAttributes<HTMLTitleElement> {
  children: string
}

export function Description(props: DescriptionProps) {
  return (<h3 className='text-dark-orange text-xl font-semibold'>{props.children}</h3>)

}