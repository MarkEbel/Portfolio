import { Outlet, ScrollRestoration } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      {/* A new page opens at the top. Back restores where you were. */}
      <ScrollRestoration />
      <Outlet />
    </div>
  );
};

export default App;
