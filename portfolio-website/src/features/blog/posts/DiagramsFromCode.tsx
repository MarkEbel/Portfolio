const DiagramsFromCode = () => (
  <>
    <p>
      I used to put off diagrams until someone asked for a slide. Then I would
      draw boxes from memory and hope they still matched the repo.
    </p>
    <p>
      Asking a model to walk the codebase and spit out Mermaid is a nicer
      starting point. Not because it is always right. It is often confidently
      wrong about the weird edge. A wrong diagram is still easier to argue with
      than a blank page.
    </p>
    <p>
      I keep the markdown next to the code and treat it like any other file. If
      the diagram and the folder disagree, the folder wins, and the diagram gets
      a pull request.
    </p>
    <img
      src="../assets/thumbnails/blogs/diagrams.png"
      alt="Boxes and arrows forming a simple diagram"
    />
  </>
);

export default DiagramsFromCode;
