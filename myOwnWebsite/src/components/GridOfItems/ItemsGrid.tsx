import './ItemsGrid.css';

// Helper function to chunk the project data into rows of 3
const chunkArray = (array: any[], size: number) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

interface ProjectsHistoryProps<T> {
  data: T[];
  renderItem: (item: T) => JSX.Element;  // Render function for custom components
}

const ProjectsHistory = <T,>({ data, renderItem }: ProjectsHistoryProps<T>) => {
  // Chunk the project data into groups of 3 items
  const chunkedData = chunkArray(data, 3);

  return (
    <div className="projects-history">
      <h2>Projects</h2>
      <table>
        <tbody>
          {chunkedData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((item, index) => (
                <td key={index}>
                  {renderItem(item)} {/* Call the render function here */}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectsHistory;
