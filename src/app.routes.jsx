import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Landing from "./features/landing/pages/Landing";

export const routes = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
    ],
  },
]);
