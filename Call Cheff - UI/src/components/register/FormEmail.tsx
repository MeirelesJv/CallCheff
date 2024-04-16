import { FormProvider, useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from "../form/index"
import { useState } from "react"

//Validação Formulário
const createUserFormSchema = z.object({
  email: z.string()
    .nonempty('O e-mail é obrigatório.')
    .email('Formato de e-mail inválido.'),
  password: z.string()
    .min(6, 'A senha precisa ter no mínimo de 6 caracteres.'),
  checkPassword: z.string()
}).refine((data) => data.password === data.checkPassword, {
  message: "As senhas não coincidem.",
  path: ["checkPassword"],
})

type CreateUserData = z.infer<typeof createUserFormSchema>

export function FormEmail() {

  const [output, setOutput] = useState('')

  async function createUser(data: CreateUserData) {
    setOutput(JSON.stringify(data, null, 2))
    return console.log(output)
  }

  const createUserForm = useForm<CreateUserData>({
    resolver: zodResolver(createUserFormSchema)
  })

  const {
    handleSubmit,
    formState: { isSubmitting },
    watch,
    control,
  } = createUserForm;

  return (
    <div style={{ maxHeight: "660px" }} className="lg:w-1/3 w-full flex flex-col items-center m-auto px-4 py-6 shadow-[0px_7px_20px_20px_#cdcdcd] rounded-lg">
      <FormProvider {...createUserForm}>
        <div className='text-center border-b-2 border-dark-orange mb-12'>
          <h3 className='text-dark-orange text-xl font-semibold'>Cadastro</h3>
        </div>
        <form onSubmit={handleSubmit(createUser)} className="flex flex-col gap-6">
          <Form.Field >
            <span className="ml-6 ">Email</span>
            <Form.Input type="email" name="email" placeholder="Insira seu email" />
            <Form.ErrorMessage field="email" />
          </Form.Field>
          <Form.Field >
            <Form.Label>Senha</Form.Label>
            <Form.Input type="password" name="password" placeholder="Insira sua senha" />
          </Form.Field>
          <Form.Field >
            <Form.Label>Confirmar Senha</Form.Label>
            <Form.Input type="password" name="checkPassword" placeholder="Insira sua senha" />
            <Form.ErrorMessage field="password" />
            <Form.ErrorMessage field="checkPassword" />
          </Form.Field>
          <button className='text-center mt-6 py-2 px-6 rounded-full bg-dark-orange text-light-grey font-semibold'>Criar Conta</button>
        </form>
      </FormProvider>
    </div>
  )
}
