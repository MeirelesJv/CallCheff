import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { RegisterPage } from "./pages/RegisterPage";
import { RegisterTeste } from "./pages/RegisterTeste";
import { ErrorPage } from "./pages/ErrorPage";
import { FormEmail } from "./components/register/FormEmail";
import { FormDadosPessoais } from "./components/register/FormDadosPessoais";
import { FormEndereco } from "./components/register/FormEndereço";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "cadastro/",
    element: <RegisterPage />,
  }
]);
