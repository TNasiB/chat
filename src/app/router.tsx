import Auth from "pages/Auth";
import { Workplace } from "pages/Workplace";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Workplace></Workplace>,
  },
  {
    path: "/auth",
    element: <Auth></Auth>,
  },
]);
