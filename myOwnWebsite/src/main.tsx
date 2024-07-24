import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './css/index.css'
import Root from "./routes/root";
import ErrorPage from "./routes/error-page";
import HireMe from './routes/HireMe';



const Blog = () => <h2>Services</h2>;
const SalaryHistory = () => <h2>Contact</h2>;
const router = createBrowserRouter(
  [{
    path: "/resume",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "HireMe",
        element: <HireMe />,
      },
      {
        path: "Blog",
        element: <Blog />,
      },
      {
        path: "Salary",
        element: <SalaryHistory />,
      },
    ],
  }]
);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)

