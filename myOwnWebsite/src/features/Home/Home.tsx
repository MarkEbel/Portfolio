import { NavLink } from 'react-router-dom';
import myFace from '/public/assets/face.jpg'
import './home.css'

const Home = () => {
    return (
      <div className='home'>
        <div className="welcomeMessage">
        <h1>Hi,</h1>
        <h1>I'm <span className='myName'>Mark</span></h1>
        <h1>A Software Developer!</h1>
        <NavLink to="Contact"><button>Contact</button></NavLink>
        </div>
        <div className='logoContainer'>
          <img src={myFace} className="logo" alt="Vite logo" />
        </div>
      </div>
    );
  };
  
  export default Home;
  