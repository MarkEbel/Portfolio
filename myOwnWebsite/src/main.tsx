import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./app";
import ErrorPage from "./features/error/error-page";
import { ThemeProvider } from "./components/theming/themeContext";
import BlogPost from "./features/blogs/blogPost"; // New component for individual blog pages
import CommuteHeatmap from "./features/commuterHeatmap/commuterHeatmap";

const router = createBrowserRouter([
  {
    path: "/Portfolio",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "blogs/:blogId",
        element: <BlogPost />,
      },
      {
        path: "commuterHeatmap",
        element: <CommuteHeatmap />,
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
