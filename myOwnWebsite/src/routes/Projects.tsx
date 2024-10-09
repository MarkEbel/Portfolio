import React from 'react';
import '/src/css/Projects.css';

import exeterLogo from '../assets/ExeterLogo.png';
// Helper function to chunk the project data into rows of 3
const chunkArray = (array: any[], size: number) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const ProjectsHistory: React.FC = () => {
  const projectData = [
    { title: 'My Personal Website', description: 'This website', gitUrl: 'https://github.com/MarkEbel/resume', image: 'src/assets/ExeterLogo.png' },
    { title: 'My Personal Website 2', description: 'This website', gitUrl: 'https://github.com/MarkEbel/resume', image: 'src/assets/ExeterLogo.png' },
    { title: 'Project 3', description: 'Description 3', gitUrl: '#', image: exeterLogo },
    { title: 'Project 4', description: 'Description 4', gitUrl: '#', image: 'src/assets/ExeterLogo.png' },
    { title: 'Project 5', description: 'Description 5', gitUrl: '#', image: 'src/assets/ExeterLogo.png' },
  ];  

  // Chunk the project data into groups of 3 items
  const chunkedData = chunkArray(projectData, 3);

  return (
    <div className="projects-history">
      <h2>Projects</h2>
      <p>work in progress</p>
      <table>
        <tbody>
          {chunkedData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((item, index) => (
                <td key={index}>
                  <a href={item.gitUrl} target="_blank" rel="noopener noreferrer">
                    <img src={item.image} className="projectImage" alt={item.title} />
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </a>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <br />
    </div>
  );
};

export default ProjectsHistory;
