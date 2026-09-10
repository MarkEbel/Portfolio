import { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import { useTheme } from "../shared/theme/useTheme";
import "./App.css";

const App = () => {
  const { theme } = useTheme();
  const torchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (theme !== "dark") {
      return;
    }

    // Write straight to CSS custom properties: React state here would re-render
    // the whole routed page on every mouse move.
    const handleMouseMove = (e: MouseEvent) => {
      const torch = torchRef.current;
      if (!torch) {
        return;
      }
      torch.style.setProperty("--torch-x", `${e.clientX}px`);
      torch.style.setProperty("--torch-y", `${e.clientY}px`);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [theme]);

  return (
    <div className="app">
      {theme === "dark" && <div ref={torchRef} className="torch-effect" />}
      <Outlet />
    </div>
  );
};

export default App;
