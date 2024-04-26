interface TitleSectionProps {
  children:string,
}

export default function TitleSection({children}:TitleSectionProps) {
  return (
  <div className='border-b-2 border-dark  my-10'>
    <h3 className='text-dark font-semibold' >{children}</h3>
  </div>
  )
}