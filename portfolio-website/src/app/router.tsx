import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./HomePage";
import BlogPostPage from "../features/blog/BlogPostPage";
import BlogsPage from "../features/blog/BlogsPage";
import CommuteHeatmapPage from "../features/commute-heatmap/CommuteHeatmapPage";
import ExperiencePage from "../features/experience/ExperiencePage";
import ProjectsPage from "../features/projects/ProjectsPage";
import ErrorPage from "../shared/pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/Portfolio",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "experience",
        element: <ExperiencePage />,
      },
      {
        path: "projects",
        element: <ProjectsPage />,
      },
      {
        path: "blogs",
        element: <BlogsPage />,
      },
      {
        path: "blogs/:blogId",
        element: <BlogPostPage />,
      },
      {
        path: "commuterHeatmap",
        element: <CommuteHeatmapPage />,
      },
    ],
  },
]);
