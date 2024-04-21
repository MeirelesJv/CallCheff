import { FormProvider, useForm } from "react-hook-form"
import { api } from "../../services"
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { Title } from "../title/index"
import { Form } from "../form/index"
import Cookies from 'js-cookie'



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

export function FormEmail({ changeStep /* Descobrir como arrumar a Tipagem */ }) {
  const createUserForm = useForm<CreateUserData>({ resolver: zodResolver(createUserFormSchema) })
  const { handleSubmit, } = createUserForm;

  

  async function createUserEmailForm(data: CreateUserData) {
    let inFifteenMinutes = new Date(new Date().getTime() + 15 * 60 * 1000);
    Cookies.set('email', data.email, {expires: inFifteenMinutes})
    Cookies.set('password', data.password,  {expires: inFifteenMinutes})
    return changeStep(1)
  }

  return (
    <FormProvider  {...createUserForm}>
      <Title.TitleField>
        <Title.Description>
          Cadastro
        </Title.Description>
      </Title.TitleField>
      <form onSubmit={handleSubmit(createUserEmailForm)} className="flex flex-col gap-6">
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
        <button type="submit" className='text-center mt-6 py-2 px-6 rounded-full bg-dark-orange text-light-grey font-semibold'>Criar Conta</button>
      </form>
    </FormProvider>
  )
}
