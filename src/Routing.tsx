import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./shared/Layout";
import { InterestingJsPage } from "./pages/InterestingJsPage";
import { HomePage } from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "js", element: <InterestingJsPage /> },
    ],
  },
]);

export const Routing = () => {
  return <RouterProvider router={router} />;
};
