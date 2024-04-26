import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";

import { Title } from "../../components/title";
import { Form } from "../../components/form/index";

//Validação Formulário
const createUserFormSchema = z
  .object({
    email: z
      .string()
      .nonempty("O e-mail é obrigatório.")
      .email("Formato de e-mail inválido."),
    password: z
      .string()
      .min(6, "A senha precisa ter no mínimo de 6 caracteres."),
    checkPassword: z.string(),
  })
  .refine((data) => data.password === data.checkPassword, {
    message: "As senhas não coincidem.",
    path: ["checkPassword"],
  });

type CreateUserData = z.infer<typeof createUserFormSchema>;

export function FormEmail() {
  const params = useParams();
  const { params: typeUser } = params;

  const navigate = useNavigate();

  const createUserForm = useForm<CreateUserData>({
    resolver: zodResolver(createUserFormSchema),
  });
  const { handleSubmit } = createUserForm;

  //Função que enviar os dados para os cookies e avança para próxima pagina.
  async function createUserEmailForm(data: CreateUserData) {
    const inFifteenMinutes = new Date(new Date().getTime() + 15 * 60 * 1000);
    Cookies.set("Email", data.email, { expires: inFifteenMinutes });
    Cookies.set("Password", data.password, { expires: inFifteenMinutes });

    return navigate(`/register/${typeUser}/2`);
  }

  return (
    <div
      style={{ maxHeight: "660px" }}
      className="lg:w-1/3 w-full flex flex-col items-center m-auto px-4 py-6 shadow-[0px_7px_20px_20px_#cdcdcd] rounded-lg"
    >
      <FormProvider {...createUserForm}>
        <Title.TitleField>
          <Title.Description>Cadastro</Title.Description>
        </Title.TitleField>
        <form
          onSubmit={handleSubmit(createUserEmailForm)}
          className="flex flex-col gap-6"
        >
          <Form.Field>
            <Form.Label>Email</Form.Label>
            <Form.Input
              type="email"
              name="email"
              placeholder="Insira seu email"
            />
            <Form.ErrorMessage field="email" />
          </Form.Field>
          <Form.Field>
            <Form.Label>Senha</Form.Label>
            <Form.Input
              type="password"
              name="password"
              placeholder="Insira sua senha"
            />
          </Form.Field>
          <Form.Field>
            <Form.Label>Confirmar Senha</Form.Label>
            <Form.Input
              type="password"
              name="checkPassword"
              placeholder="Insira sua senha"
            />
            <Form.ErrorMessage field="password" />
            <Form.ErrorMessage field="checkPassword" />
          </Form.Field>
          <Form.Button type="submit">Avançar</Form.Button>
        </form>
      </FormProvider>
    </div>
  );
}
