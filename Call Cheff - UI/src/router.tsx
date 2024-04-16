import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { RegisterPage } from "./pages/RegisterPage";
import { ErrorPage } from "./pages/ErrorPage";
import { Teste } from "./pages/teste";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage /> ,
  },
  {
    path: "cadastro/",
    element: <RegisterPage />,
    errorElement: <ErrorPage />,
  },
]);
