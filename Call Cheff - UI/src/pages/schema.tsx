
import { z } from "zod"

const createUserFormAdressInfoSchema = z.object({
  Endereço: z.string()
    .nonempty('Insira o endereço.'),
  CEP: z.string().nonempty('O CEP é obrigatório.'),
  Número: z.string().nonempty('O numero é obrigatório.'),
  Complemento: z.string()

})

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

const createUserFormPersonalInfoSchema = z.object({
  Name: z.string()
    .nonempty('O nome é obrigatório.'),
  LastName: z.string()
    .nonempty('O sobrenome é obrigatório.'),
  Cpf: z.string().nonempty('O CPF é obrigatório.').refine((value) => /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test(value), {
    message: "CPF inválido."
  }),
  CellPhone: z.string().nonempty('O CPF é obrigatório.').refine((value) => /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/.test(value), {
    message: "Número de telefone inválido."
  }),
  DateBirth: z.date()
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


export { createUserFormAdressInfoSchema, createUserFormSchema, createUserFormPersonalInfoSchema }