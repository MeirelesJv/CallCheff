import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";

import { Title } from "../../components/title";
import { Form } from "../../components/form/index";

//Validação Formulário
const createUserFormPersonalInfoSchema = z.object({
  Name: z.string().nonempty("O nome é obrigatório."),
  LastName: z.string().nonempty("O sobrenome é obrigatório."),
  Id: z.string().nonempty("Número de identificação necessário"),
  CellPhone: z
    .string()
    .nonempty("O CPF é obrigatório.")
    .refine(
      (value) =>
        /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/.test(
          value
        ),
      {
        message: "Número de telefone inválido.",
      }
    ),
  DateBirth: z.string().date(),
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
});

type CreateUserData = z.infer<typeof createUserFormPersonalInfoSchema>;

export function FormPersonalInfo() {
  const params = useParams();
  const { params: typeUser } = params;

  const navigate = useNavigate();

  //Função que enviar os dados para os cookies e avança para próxima pagina.
  async function createPersonalInfoUser(data: CreateUserData) {
    //Seta o tempo de expiração dos cookies armanezados
    const inFifteenMinutes = new Date(new Date().getTime() + 15 * 60 * 1000);
    {
      inFifteenMinutes;
    }
    Cookies.set("Name", data.Name, { expires: inFifteenMinutes });
    Cookies.set("lastName", data.LastName, { expires: inFifteenMinutes });
    Cookies.set("Id", data.Id, { expires: inFifteenMinutes });
    Cookies.set("Birthday", data.DateBirth, { expires: inFifteenMinutes });
    Cookies.set("Tel", data.CellPhone, { expires: inFifteenMinutes });

    return navigate(`/register/${typeUser}/3`);
  }

  //Define o formulário padrão
  const createUserPersonalInfoForm = useForm<CreateUserData>({
    resolver: zodResolver(createUserFormPersonalInfoSchema),
  });

  const { handleSubmit } = createUserPersonalInfoForm;

  return (
    <div
      style={{ maxHeight: "660px" }}
      className="lg:w-1/3 w-full flex flex-col items-center m-auto px-4 py-6 shadow-[0px_7px_20px_20px_#cdcdcd] rounded-lg"
    >
      <FormProvider {...createUserPersonalInfoForm}>
        <Title.TitleField>
          <Title.Description>Dados Pessoais</Title.Description>
        </Title.TitleField>
        <form
          onSubmit={handleSubmit(createPersonalInfoUser)}
          className="flex flex-col gap-6"
        >
          <Form.Field>
            <Form.Label>Nome</Form.Label>
            <Form.Input type="text" name="Name" placeholder="Insira seu nome" />
            <Form.ErrorMessage field="Name" />
          </Form.Field>
          <Form.Field>
            <Form.Label>Sobrenome</Form.Label>
            <Form.Input
              type="text"
              name="LastName"
              placeholder="Insira seu sobrenome"
            />
            <Form.ErrorMessage field="LastName" />
          </Form.Field>
          <Form.Field>
            <Form.Label>{typeUser == "user" ? "CPF" : "CNPJ"}</Form.Label>
            <Form.Input
              type="text"
              name="Id"
              placeholder={
                typeUser == "user" ? "Insira seu CPF" : "Insira seu CNPJ"
              }
            />
            <Form.ErrorMessage field="Id" />
          </Form.Field>
          <Form.Field>
            <Form.Label>Data de Nascimento</Form.Label>
            <Form.Input type="date" name="DateBirth" />
            <Form.ErrorMessage field="DateBirth" />
          </Form.Field>
          <Form.Field>
            <Form.Label>Telefone</Form.Label>
            <Form.Input
              type="number"
              name="CellPhone"
              placeholder="Insira seu telefone/celular"
            />
            <Form.ErrorMessage field="CellPhone" />
          </Form.Field>
          <Form.Button type="submit">Avançar</Form.Button>
        </form>
      </FormProvider>
    </div>
  );
}
