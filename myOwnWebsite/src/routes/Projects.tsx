import React from 'react';
import '/src/css/Projects.css';

const ProjectsHistory: React.FC = () => {
  const projectData = [
    { title: 'My Personal Website', description: 'This website', gitUrl: 'https://github.com/MarkEbel/resume', image: 'src/assets/ExeterLogo.png' },
  ];  

  return (
    <div className="projects-history">
      <h2>Projects</h2>
      <p>work in progress</p>
      <table>
        <tbody>
          {projectData.map((item, index) => (
            <tr key={index}>
              <a href={item.gitUrl} target="_blank">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <img src={item.image} className="companyLogo" alt={item.image} />
              </a>
            </tr>
          ))}
        </tbody>
      </table>
      <br></br>
    </div>
    
  );
};

export default ProjectsHistory;
