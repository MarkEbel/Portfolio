import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./HomePage";
import BlogPostPage from "../features/blog/BlogPostPage";
import CommuteHeatmapPage from "../features/commute-heatmap/CommuteHeatmapPage";
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
