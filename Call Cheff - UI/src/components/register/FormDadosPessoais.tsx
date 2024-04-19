import { FormProvider, useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { Title } from "../title/index"
import { useState } from "react"
import { Form } from "../form/index"
import { api } from "../../services"

//Validação Formulário
const createUserFormPersonalInfoSchema = z.object({
  Name: z.string()
    .nonempty('O nome é obrigatório.'),
  LastName: z.string()
    .nonempty('O sobrenome é obrigatório.'),
  Cpf: z.string().nonempty('O CPF é obrigatório.')
  // .refine((value) => /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test(value), {
  //   message: "CPF inválido."
  // })
  ,
  CellPhone: z.string().nonempty('O CPF é obrigatório.')
    .refine((value) => /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/.test(value), {
      message: "Número de telefone inválido."
    })
  ,
  DateBirth: z.string().transform((str) => new Date(str))
    .refine((date: Date) => {
      let today = new Date();
      let age = today.getFullYear() - date.getFullYear();
      let month = today.getMonth() - date.getMonth();

      if (month < 0 || (month === 0 && today.getDate() < date.getDate())) {
        age--;
      }
      return age >= 18;
    }, {
      message: "Você deve ter pelo menos 18 anos de idade."
    })
})

type CreateUserData = z.infer<typeof createUserFormPersonalInfoSchema>


export function FormDadosPessoais({ changeStep /* Descobrir como arrumar a Tipagem */ }) {

  async function createPersonalInfoUser(data: CreateUserData) {
    let name = data.Name
    let lastname = data.LastName
    let cpf = '03832591850'
    let birthday = data.DateBirth
    let tel = data.CellPhone
    // let cep= '05136350'
    // let numberhouse= '25'
    // let house= 'Casa'
    // let reference= 'Casa'
    // let addres= 'Rua Tal'
    const axiosConfig = { headers: { 'content-type': 'application/json' } }
    await api.post('/users/create/dados', { name, lastname, cpf, birthday, tel }, axiosConfig)
    return changeStep(2)
  }

  const createUserPersonalInfoForm = useForm<CreateUserData>({
    resolver: zodResolver(createUserFormPersonalInfoSchema)
  })

  const {
    handleSubmit,
  } = createUserPersonalInfoForm;

  return (
    <FormProvider  {...createUserPersonalInfoForm}>
      <Title.TitleField>
        <Title.Description>
          Dados Pessoais
        </Title.Description>
      </Title.TitleField>
      <form onSubmit={handleSubmit(createPersonalInfoUser)} className="flex flex-col gap-6">
        <Form.Field >
          <span className="ml-6 ">Nome</span>
          <Form.Input type="text" name="Name" placeholder="Insira seu nome" />
          <Form.ErrorMessage field="Name" />
        </Form.Field>
        <Form.Field >
          <Form.Label>Sobrenome</Form.Label>
          <Form.Input type="text" name="LastName" placeholder="Insira seu sobrenome" />
          <Form.ErrorMessage field="LastName" />
        </Form.Field>
        <Form.Field >
          <Form.Label>CPF</Form.Label>
          <Form.Input type="text" name="Cpf" placeholder="Insira seu CPF" />
          <Form.ErrorMessage field="Cpf" />
        </Form.Field>
        <Form.Field >
          <Form.Label>Data de Nascimento</Form.Label>
          <Form.Input type="date" name="DateBirth" />
          <Form.ErrorMessage field="DateBirth" />
        </Form.Field>
        <Form.Field >
          <Form.Label>Telefone</Form.Label>
          <Form.Input type="number" name="CellPhone" placeholder="Insira seu telefone/celular" />
          <Form.ErrorMessage field="CellPhone" />
        </Form.Field>
        <button type="submit" className='text-center mt-6 py-2 px-6 rounded-full bg-dark-orange text-light-grey font-semibold'>Criar Conta</button>
      </form>
    </FormProvider>
  )
}
