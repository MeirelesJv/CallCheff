import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";

import { CreateUser } from "../../services/utils/createUser";
import { Title } from "../../components/title";
import { Form } from "../../components/form/index";

//Validação Formulário
const createUserFormAddressInfoSchema = z.object({
  Address: z.string().nonempty("Insira o endereço."),
  Cep: z.string().nonempty("O Cep é obrigatório."),
  numberHouse: z.string().nonempty("O numero é obrigatório."),
  Reference: z.string(),
  House: z.enum(["Casa", "Apartamento"]),
});

type CreateUserData = z.infer<typeof createUserFormAddressInfoSchema>;

export function FormAddress() {
  const params = useParams();
  const { id: typeUser } = params;

  const navigate = useNavigate();

  const createUserAddressInfoForm = useForm<CreateUserData>({
    resolver: zodResolver(createUserFormAddressInfoSchema),
  });

  const { handleSubmit } = createUserAddressInfoForm;

  //Função que envia os dados para o api de cadastramento.
  async function createAddressInfoUser(
    data: CreateUserData,
    typeUser: unknown
  ) {
    const { Email, Id, Name, Password, Tel, lastName, Birthday } =
      Cookies.get();
    const { Cep, numberHouse, House, Address, Reference } = data;

    CreateUser({
      typeUser,
      Email,
      Password,
      Name,
      lastName,
      Id,
      Birthday,
      Tel,
      Cep,
      Address,
      numberHouse,
      Reference,
      House,
    });

    return navigate("/");
  }

  return (
    <div
      style={{ maxHeight: "660px" }}
      className="lg:w-1/3 w-full flex flex-col items-center m-auto px-4 py-6 shadow-[0px_7px_20px_20px_#cdcdcd] rounded-lg"
    >
      <FormProvider {...createUserAddressInfoForm}>
        <Title.TitleField>
          <Title.Description>Endereço</Title.Description>
        </Title.TitleField>
        <form
          onSubmit={handleSubmit(createAddressInfoUser)}
          className="flex flex-col gap-6"
        >
          <Form.Field>
            <Form.Label>Cep</Form.Label>
            <Form.Input type="text" name="Cep" placeholder="Insira seu Cep" />
            <Form.ErrorMessage field="Cep" />
          </Form.Field>
          <Form.Field>
            <Form.Label>Endereço</Form.Label>
            <Form.Input
              type="text"
              name="Address"
              placeholder="Insira seu endereço"
            />
            <Form.ErrorMessage field="Address" />
          </Form.Field>
          {typeUser == "user" ? (
            <Form.Field>
              <Form.Label>Tipo do Local</Form.Label>
              <Form.Input
                type="text"
                name="House"
                placeholder="Insira o tipo de local (Casa ou Apartamento)"
              />
              <Form.ErrorMessage field="House" />
            </Form.Field>
          ) : (
            <></>
          )}
          <Form.Field>
            <Form.Label>Número</Form.Label>
            <Form.Input
              type="numberHouse"
              name="numberHouse"
              placeholder="Insira seu número"
            />
            <Form.ErrorMessage field="numberHouse" />
          </Form.Field>
          {typeUser == "user" ? (
            <Form.Field>
              <Form.Label>Complemento</Form.Label>
              <Form.Input
                type="text"
                name="Reference"
                placeholder="Insira um complemento"
              />
            </Form.Field>
          ) : (
            <></>
          )}
          <Form.Button type="submit">Concluir</Form.Button>
        </form>
      </FormProvider>
    </div>
  );
}
