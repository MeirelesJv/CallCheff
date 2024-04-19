import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { RegisterPage } from "./pages/RegisterPage";
import { FormEndereco } from "./components/register/FormEndereco";
import { Teste } from "./pages/teste";

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
