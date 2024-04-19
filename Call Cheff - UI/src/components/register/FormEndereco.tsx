import { FormProvider, useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { Title } from "../title/index"
import { useState } from "react"
import { Form } from "../form/index"


//Validação Formulário
const createUserFormAdressInfoSchema = z.object({
  Endereço: z.string()
    .nonempty('Insira o endereço.'),
  CEP: z.string().nonempty('O CEP é obrigatório.'),
  Número: z.string().nonempty('O numero é obrigatório.'),
  Complemento: z.string()

})

type CreateUserData = z.infer<typeof createUserFormAdressInfoSchema>

export function FormEndereco() {

  const [output, setOutput] = useState('')

  async function createAdressInfoUser(data: CreateUserData) {
    setOutput(JSON.stringify(data, null, 2))
    return console.log(output)
  }

  const createUserAdressInfoForm = useForm<CreateUserData>({
    resolver: zodResolver(createUserFormAdressInfoSchema)
  })

  const {
    handleSubmit,
  } = createUserAdressInfoForm;

  return (
    <FormProvider {...createUserAdressInfoForm}>
      <Title.TitleField>
        <Title.Description>
          Endereço
        </Title.Description>
      </Title.TitleField>

      <form onSubmit={handleSubmit(createAdressInfoUser)} className="flex flex-col gap-6">
        <Form.Field >
          <span className="ml-6 ">CEP</span>
          <Form.Input type="text" name="CEP" placeholder="Insira seu CEP" />
          <Form.ErrorMessage field="CEP" />
        </Form.Field>
        <Form.Field >
          <Form.Label>Endereço</Form.Label>
          <Form.Input type="text" name="Adress" placeholder="Insira seu endereço" />   
          <Form.ErrorMessage field="Adress" />
        </Form.Field>
        <Form.Field >
          <Form.Label>Número</Form.Label>
          <Form.Input type="number" name="Number" placeholder="Insira seu número" />
          <Form.ErrorMessage field="Number" />
        </Form.Field>
        <Form.Field >
          <Form.Label>Complemento</Form.Label>
          <Form.Input type="text" name="notes" placeholder="Insira um complemento" />
        </Form.Field>
        <button type="submit" className='text-center mt-6 py-2 px-6 rounded-full bg-dark-orange text-light-grey font-semibold'>Criar Conta</button>

      </form>
    </FormProvider>
  )
}