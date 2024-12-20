import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./root";
import ErrorPage from "./features/error/error-page";
import AboutMe from "./features/aboutMe/aboutMe";
import ContactMe from "./features/contactMe/contactMe";
import Blog from "./features/blog/blog";
import Home from "./features/home/home";
import ProjectsHistory from "./features/projects/projects";
import { ThemeProvider } from "./components/theming/themeContext";

const router = createBrowserRouter([
  {
    path: "/resume",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "AboutMe",
        element: <AboutMe />,
      },
      {
        path: "Skills",
        element: <Blog />,
      },
      {
        path: "Projects",
        element: <ProjectsHistory />,
      },
      {
        path: "Contact",
        element: <ContactMe />,
      },
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
