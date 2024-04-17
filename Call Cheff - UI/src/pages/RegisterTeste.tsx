
  //  const { steps, currentStep, next, back } = UseMultipleForms([<FormEmail />, <FormDadosPessoais />, <FormEndereco />])
  {     /* {steps[currentStep]} */ }
import { FormProvider, useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { Title } from "../components/title/index"
import { useState } from "react"
import { Form } from "../components/form/index"
import { FormEmail } from "../components/register/FormEmail";
import { FormDadosPessoais } from "../components/register/FormDadosPessoais";
import { FormEndereco } from "../components/register/FormEndereco";
import { UseMultipleForms } from "../components/register/useMultipleForms";

export function RegisterTeste() {

  return (
    <div style={{ maxHeight: "660px" }} className="lg:w-1/3 w-full flex flex-col items-center m-auto px-4 py-6 shadow-[0px_7px_20px_20px_#cdcdcd] rounded-lg">
      

    </div >
  )
}

