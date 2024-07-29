import '/src/css/App.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useTheme } from '../ThemeContext';


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