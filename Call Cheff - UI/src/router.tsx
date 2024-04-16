import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { RegisterPage } from "./pages/RegisterPage";
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
    errorElement: <ErrorPage />,
    children: [
      {
        path: "1/",
        element: <FormDadosPessoais />,
      },
      {
        path: "2/",
        element: <FormEndereco />,
      }
    ]
  }
]);
