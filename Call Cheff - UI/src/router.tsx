import { createBrowserRouter } from "react-router-dom";
import { HomePage, FormAddress, FormEmail, FormPersonalInfo  } from "./pages/index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "register/:params/1",
    element: <FormEmail />,
  },
  {
    path: "register/:params/2",
    element: <FormPersonalInfo />,
  },
  {
    path: "register/:params/3",
    element: <FormAddress />,
  }
]);
