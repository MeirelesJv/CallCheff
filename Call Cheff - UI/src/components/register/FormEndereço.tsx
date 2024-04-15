

export function FormEndereco() {
  return (
    <div style={{ maxHeight: "660px" }} className="lg:w-1/3 w-full flex flex-col items-center overflow-auto m-auto  px-4 py-6 shadow-[0px_7px_20px_20px_#cdcdcd] bg-light-grey rounded-lg">
      <div className='border-b-2 border-dark-orange  mb-12'>
        <h3 className='text-dark-orange text-xl font-semibold'>Endereço</h3>
      </div>
      <form className="flex flex-col gap-6" action="">
        <div className="flex flex-col items-start gap-1">
          <span className="ml-6 text-dark font-semibold ">CEP</span>
          <input className='w-full shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] py-2 px-6 rounded-full text-gray-400 bg-light-grey' placeholder="Insira seu CEP" />
        </div>
        <div className="flex flex-col items-start gap-1">
          <span className="ml-6 text-dark font-semibold">Endereço</span>
          <input className='w-full shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] py-2 px-6  rounded-full text-gray-400 bg-light-grey' placeholder="Insira seu Endereço" />
        </div>
        <div className="flex flex-col gap-1">
          <span className="ml-6 text-dark font-semibold">Número</span>
          <input className='w-full shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] py-2 px-6 mr-4 rounded-full text-gray-400 bg-light-grey' placeholder="Insira seu Número" />
        </div>
        <div className="flex flex-col gap-1">
          <span className="ml-6 text-dark font-semibold">Complemento</span>
          <input className='w-full shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] py-2 px-6 mr-4 rounded-full text-gray-400 bg-light-grey' placeholder="Insira um Complemento" />
        </div>
        <button className='mt-6 py-2 px-6 rounded-full bg-dark-orange text-light-grey font-semibold'>Concluir</button>
      </form>
    </div>

  )
}