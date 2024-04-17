import { FormEmail } from "../components/register/FormEmail";
import { FormDadosPessoais } from "../components/register/FormDadosPessoais";
import { FormEndereco } from "../components/register/FormEndereco";
import { UseMultipleForms } from "../components/register/useMultipleForms";


export function RegisterPage() {

  const { steps, currentStep, next, back } = UseMultipleForms([<FormEmail />, <FormDadosPessoais />, <FormEndereco />])
  return (
    <div style={{ maxHeight: "660px" }} className="lg:w-1/3 w-full flex flex-col items-center m-auto px-4 py-6 shadow-[0px_7px_20px_20px_#cdcdcd] rounded-lg">
      {steps[currentStep]}
      <button type="submit" className='text-center mt-6 py-2 px-6 rounded-full bg-dark-orange text-light-grey font-semibold'>Criar Conta</button>

    </div>
  )
}

