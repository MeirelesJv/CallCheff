import { FormProvider, useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { Title } from "../title/index"
import { Form } from "../form/index"
import Cookies from 'js-cookie'

//Validação Formulário
const createUserFormPersonalInfoSchema = z.object({
  Name: z.string()
    .nonempty('O nome é obrigatório.'),
  LastName: z.string()
    .nonempty('O sobrenome é obrigatório.'),
  Cpf: z.string().nonempty('O CPF é obrigatório.'),
  CellPhone: z.string().nonempty('O CPF é obrigatório.')
    .refine((value) => /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/.test(value), {
      message: "Número de telefone inválido."
    })
  ,
  DateBirth: z.string().date()
  // .refine((date: Date) => {
  //   let today = new Date();
  //   let age = today.getFullYear() - date.getFullYear();
  //   let month = today.getMonth() - date.getMonth();

  //   if (month < 0 || (month === 0 && today.getDate() < date.getDate())) {
  //     age--;
  //   }
  //   return age >= 18;
  // }, {
  //   message: "Você deve ter pelo menos 18 anos de idade."
  // })
})

type CreateUserData = z.infer<typeof createUserFormPersonalInfoSchema>

export function FormDadosPessoais({ changeStep /* Descobrir como arrumar a Tipagem */ }) {

  //Função que enviar os dados para os cookies e avança para próxima pagina. 
  async function createPersonalInfoUser(data: CreateUserData) {

    //Seta o tempo de expiração dos cookies armanezados
    let inFifteenMinutes = new Date(new Date().getTime() + 15 * 60 * 1000);
    { expires: inFifteenMinutes }
    Cookies.set('name', data.Name, { expires: inFifteenMinutes })
    Cookies.set('lastname', data.LastName, { expires: inFifteenMinutes })
    Cookies.set('cpf', data.Cpf, { expires: inFifteenMinutes })
    Cookies.set('birthday', data.DateBirth, { expires: inFifteenMinutes })
    Cookies.set('tel', data.CellPhone, { expires: inFifteenMinutes })
    return changeStep(2)
  }

  //Define o formulário padrão 
  const createUserPersonalInfoForm = useForm<CreateUserData>({
    resolver: zodResolver(createUserFormPersonalInfoSchema)
  })

  const { handleSubmit } = createUserPersonalInfoForm;

  return (
    <FormProvider  {...createUserPersonalInfoForm}>
      <Title.TitleField>
        <Title.Description>
          Dados Pessoais
        </Title.Description>
      </Title.TitleField>
      <form onSubmit={handleSubmit(createPersonalInfoUser)} className="flex flex-col gap-6">
        <Form.Field >
          <Form.Label>Nome</Form.Label>
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
        <Form.Button type="submit" >Avançar</Form.Button>
      </form>
    </FormProvider>
  )
}
