import React from 'react';
import ProjectsHistory from '../../components/gridOfItems/ItemsGrid';
import exeterLogo from '/public/assets/logos/ExeterLogo.png';

interface Project {
  title: string;
  description: string;
  gitUrl: string;
  image: string;
}

const projectData = [
  { title: 'My Personal Website', description: 'This website', gitUrl: 'https://github.com/MarkEbel/resume', image: exeterLogo },
  { title: 'Project 2', description: 'Description 2', gitUrl: '#', image: exeterLogo },
  { title: 'Project 3', description: 'Description 3', gitUrl: '#', image: exeterLogo },
  { title: 'Project 4', description: 'Description 4', gitUrl: '#', image: exeterLogo },
];

const renderProjectItem = (item: Project) => (
  <a href={item.gitUrl} target="_blank" rel="noopener noreferrer">
    <img src={item.image} className="projectImage" alt={item.title} />
    <h3>{item.title}</h3>
    <p>{item.description}</p>
  </a>
);

const App: React.FC = () => {
  return <ProjectsHistory data={projectData} renderItem={renderProjectItem} />;
};

export default App;
