import './App.css'
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useTheme } from './components/theming/themeContext';


const Root = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark-mode' : 'light-mode';
  }, [theme]);

  return (
    <>
      <div className="root-layout">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Root;