import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { RegisterPage } from "./pages/RegisterPage";
import { ErrorPage } from "./pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RegisterPage />
  },
  {
    path: "/resgiter",
    element: <RegisterPage />,
    errorElement: <ErrorPage />
  },
])