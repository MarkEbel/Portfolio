import reactLogo from '/src/assets/react.svg'
import myFace from '/Face.jpg'
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
        <Navbar />

        <div>
          <a href="https://www.linkedin.com/in/mark-ebel/" target="_blank">
            <img src={myFace} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Welcome to my page!</h1>
        <p>( This is a work in progress! )</p>
        

        <div className="root-layout">
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      </>
  );
};

export default Root;