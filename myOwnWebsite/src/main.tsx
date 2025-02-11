import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./root";
import ErrorPage from "./features/error/error-page";;
import { ThemeProvider } from "./components/theming/themeContext";

const router = createBrowserRouter([
  {
    path: "/resume",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
