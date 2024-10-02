import myFace from '/Face.jpg'
import '/src/css/home.css'

const Home = () => {
    return (
      <div>
        <div>
          <a href="https://www.linkedin.com/in/mark-ebel/" target="_blank">
            <img src={myFace} className="logo" alt="Vite logo" />
          </a>
        </div>
        <h1>Welcome to my page!</h1>
          <p>
            Please click around to discover more 
          </p>
      </div>
    );
  };
  
  export default Home;
  