import { NavLink } from "react-router-dom";
import myFace from "/public/assets/face.jpg";
import "./home.css";

const Home = () => {
  return (
    <main className="home">
      <section className="welcomeMessage">
        <h1>Hi,</h1>
        <h1>
          I'm <span className="myName">Mark</span>
        </h1>
        <h1>A Software Developer!</h1>
        <NavLink to="Contact">
          <button aria-label="Contact me">Contact</button>
        </NavLink>
      </section>
      <aside className="logoContainer">
        <img 
          src={myFace} 
          className="logo" 
          alt="Portrait of Mark Ebel, a software developer"
        />
      </aside>
    </main>
  );
};

export default Home;
