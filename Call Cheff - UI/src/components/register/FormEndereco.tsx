import { FormProvider, useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { Title } from "../title/index"
import { Form } from "../form/index"
import { api } from "../../services"
import Cookies from 'js-cookie'
import { Navigate, useNavigate } from "react-router-dom"

//Validação Formulário
const createUserFormAdressInfoSchema = z.object({
  Adress: z.string().nonempty('Insira o endereço.'),
  CEP: z.string().nonempty('O CEP é obrigatório.'),
  Number: z.string().nonempty('O numero é obrigatório.'),
  Notes: z.string(),
  Locale: z.string().nonempty('Casa ou Apartamento?'),
})

type CreateUserData = z.infer<typeof createUserFormAdressInfoSchema>

export function FormEndereco(changeStep: (arg0: number) => any) {

  const navigate = useNavigate();

  const createUserAdressInfoForm = useForm<CreateUserData>({
    resolver: zodResolver(createUserFormAdressInfoSchema)
  })

  const { handleSubmit } = createUserAdressInfoForm;

  //Função que envia os dados para o api de cadastramento. 
  async function createAdressInfoUser(data: CreateUserData) {
    let { email, password, name, lastname, cpf, birthday, tel } = Cookies.get()
    let cep = data.CEP
    let numberhouse = data.Number
    let house = data.Locale
    let addres = data.Adress
    let reference = data.Notes ? data.Notes : null
    const axiosConfig = { headers: { 'content-type': 'application/json' } }
    api.post('/users/create/dados', { email, password, name, lastname, cpf, birthday, tel, cep, numberhouse, house, addres, reference }, axiosConfig)
    return navigate("/cadastro/1")
  }

  return (
    <FormProvider {...createUserAdressInfoForm}>
      <Title.TitleField>
        <Title.Description>
          Endereço
        </Title.Description>
      </Title.TitleField>
      <form onSubmit={handleSubmit(createAdressInfoUser)} className="flex flex-col gap-6">
        <Form.Field >
          <Form.Label>CEP</Form.Label>
          <Form.Input type="text" name="CEP" placeholder="Insira seu CEP" />
          <Form.ErrorMessage field="CEP" />
        </Form.Field>
        <Form.Field>
          <Form.Label>Endereço</Form.Label>
          <Form.Input type="text" name="Adress" placeholder="Insira seu endereço" />
          <Form.ErrorMessage field="Adress" />
        </Form.Field>
        <Form.Field>
          <Form.Label>Tipo do Local</Form.Label>
          <Form.Input type="text" name="Locale" placeholder="Insira o tipo de local (Casa ou Apartamento)" />
          <Form.ErrorMessage field="Locale" />
        </Form.Field>
        <Form.Field>
          <Form.Label>Número</Form.Label>
          <Form.Input type="number" name="Number" placeholder="Insira seu número" />
          <Form.ErrorMessage field="Number" />
        </Form.Field>
        <Form.Field >
          <Form.Label>Complemento</Form.Label>
          <Form.Input type="text" name="Notes" placeholder="Insira um complemento" />
        </Form.Field>
        <Form.Button type="submit" >Concluir</Form.Button>
      </form>
    </FormProvider>
  )
}