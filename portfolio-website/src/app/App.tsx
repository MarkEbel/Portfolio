import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";

const App = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="app">
      <div
        className="torch-effect"
        style={{
          background: `radial-gradient(circle 410px at ${mousePos.x}px ${mousePos.y}px, rgba(28, 15, 216, 0.14),rgba(17, 23, 42, 0.25))`,
        }}
      />
      <Outlet />
    </div>
  );
};

export default App;
