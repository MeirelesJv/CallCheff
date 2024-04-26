import { api, axiosConfig } from "..";

interface UserProps{
  typeUser:"user"|"cheff"|unknown
  Name:string,
  Email:string,
  Password:string, 
  lastName:string,
  Id:string,
  Birthday:string,
  Tel:string,
  Cep: string,
  numberHouse :string,
  House?:"Casa" | "Apartamento" | null,
  Address:string,
  Reference?:string | null
}

export function CreateUser({typeUser,Birthday,Cep,Email,Id,Name,Password,Tel,Address,lastName,numberHouse, Reference,House}:UserProps) {

  Reference ? Reference : Reference = null

  if(typeUser == "user") {
    const Cpf = Id
    api.post("/users/create/dados",
    {Birthday,Cep,Email,Cpf,Name,Password,Tel,Address,lastName,numberHouse,Reference,House},
    axiosConfig);
  } 
  if(typeUser == "user") {
    const Cnpj = Id
    api.post(
      "/chefs/create/dados",
      {Birthday,Cep,Email,Cnpj,Name,Password,Tel,Address,lastName,numberHouse},
      axiosConfig
    );
  }
  return console.log("Deu certo") 
}
