import reactLogo from '/src/assets/react.svg'
import myFace from '/Face.jpg'
import '/src/css/App.css'
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';


export default function Root() {
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
        
      <div style={{ padding: '20px' }}>
        <Outlet />
      </div>
      </>
    );
  }