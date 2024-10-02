import astonLogo from '../assets/AstonLogo.png';
import exeterLogo from '../assets/ExeterLogo.png';
import redwoodTechLogo from '../assets/RedwoodTechLogo.png';
//import '/src/css/AboutMe.css'

const AboutMe = () => {
  return (
    <div>
      <div className="intro">

        {/* <p>Hello, I'm Mark! I am a software developer, who enjoys writing code.</p> */}
      </div>
      <div className="AboutSection">
        <img src={redwoodTechLogo} className="companyLogo" alt="Redwood Technologies Ltd" />
        <p>I've started my career at Redwood Technologies (also known as Content Guru). Where I've learnt...</p>
      </div>
      <div className="AboutSection">
        <img src={exeterLogo} className="companyLogo" alt="University of Exeter" />
        <p>I attended the University of Exeter, I completed a masters in Data Science with Artificial Intelligence.</p>
      </div>
      <div className="AboutSection">
        <img src={astonLogo} className="companyLogo" alt="Aston University" />
        <p>At Aston University completed a Bsc in Computer Science.</p>
      </div>

    </div>
  );
};

export default AboutMe;
