import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { canonicalPortfolioPath } from "./app/canonicalPath";
import { router } from "./app/router";
import { ThemeProvider } from "./shared/theme/ThemeProvider";
import "./styles/global.css";

const { pathname, search, hash } = window.location;
const canonical = canonicalPortfolioPath(pathname);

if (canonical !== pathname) {
  window.location.replace(`${canonical}${search}${hash}`);
} else {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </React.StrictMode>,
  );
}
