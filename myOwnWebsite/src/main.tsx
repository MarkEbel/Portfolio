import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'
import Root from "./root";
import ErrorPage from "./features/error/error-page";
import AboutMe from './features/aboutMe/AboutMe';
import ContactMe from './features/contactMe/ContactMe';
import Blog from './features/blog/Blog';
import Home from './features/home/Home';
import ProjectsHistory from './features/projects/Projects';
import { ThemeProvider } from './components/theming/ThemeContext';

const router = createBrowserRouter(
  [{
    path: "/resume",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
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
  }]
);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
  </React.StrictMode>,
)

