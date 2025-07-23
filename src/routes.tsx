import App from "./App";
import Home from "@/pages/Home";
import Contact from "@/pages/Contact";
import { createHashRouter } from "react-router-dom";
import { NotFound } from "@/pages/NotFound";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
