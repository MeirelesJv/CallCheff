import { FormEmail } from "../components/register/FormEmail";
import { FormDadosPessoais } from "../components/register/FormDadosPessoais";
import { FormEndereco } from "../components/register/FormEndereco";
import { UseMultipleForms } from "../components/register/useMultipleForms";
import { useState } from "react";

export function RegisterPage() {

  const [stepChildren,setStepChildren] = useState(0)

  function changeStep(value: number){
    return setStepChildren(value)
  }

  const { steps, currentStep, next, back } = UseMultipleForms([<FormEmail changeStep={changeStep} />, <FormDadosPessoais changeStep={changeStep} />, <FormEndereco />])
  return (
    <div style={{ maxHeight: "660px" }} className="lg:w-1/3 w-full flex flex-col items-center m-auto px-4 py-6 shadow-[0px_7px_20px_20px_#cdcdcd] rounded-lg">
      {steps[stepChildren]}
    </div>
  )
}

