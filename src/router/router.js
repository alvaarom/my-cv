import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Certificates from "../pages/Certificates/Certificates";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/certificates",
    element: <Certificates />,
  },
]);

export default router;
