const DiagramsFromCode = () => (
  <>
    <p>
      Most architecture diagrams are wrong within a few weeks of being drawn.
      They get made for a particular audience, usually a slide deck, and then
      nobody has a reason to touch them again until the next time somebody needs
      a slide.
    </p>
    <p>
      The underlying problem is that a diagram is a copy of knowledge that lives
      somewhere else. Copies drift, and this one has no mechanism to notice it
      has drifted. The code changes because a test failed or a customer
      complained; the picture changes only when a person remembers it exists,
      which is not a process anyone should rely on.
    </p>
    <p>
      Asking a model to read the repository and produce Mermaid is a decent
      answer to the blank page. It is fast, it is usually right about the
      obvious structure, and arguing with a wrong diagram is easier than
      starting from nothing. Keeping the result as text in the repository also
      means it can be reviewed, diffed and changed in the same pull request as
      the code it describes.
    </p>
    <p>
      The risk is worth stating plainly. A generated diagram is confidently
      wrong in exactly the places that matter, which tend to be the unusual
      paths and the historical compromises. Worse, it looks authoritative, and
      its value depends entirely on whether the reader can spot the errors. For
      someone experienced it is a useful draft. For someone new it can be
      actively misleading, and they are the audience most likely to trust it.
    </p>
    <p>
      That is an argument for treating generated diagrams as drafts for review
      rather than artefacts of truth. The same standard as code: it arrives as a
      proposal, someone who knows the system checks it, and when the picture and
      the repository disagree the repository wins and the picture gets a pull
      request.
    </p>
    <p>
      The opposite approach, generating diagrams automatically from the running
      system or the dependency graph, trades one problem for another. Those are
      accurate and frequently unreadable, because they show everything, and
      everything is not a diagram. A picture of two hundred services with every
      connection drawn is technically correct and communicates nothing.
    </p>
    <p>
      Which points at what diagrams are actually for. They are arguments about
      what matters, not maps of what exists. Two perfectly valid diagrams of the
      same system can look completely different because one is answering a
      question about data flow and the other about ownership. The omissions are
      the content, and omission is the one thing automation is bad at.
    </p>
    <p>
      Most diagrams fail before any of that, by trying to serve everyone at
      once. A picture that has to satisfy someone deciding on budgets and
      someone debugging a timeout will satisfy neither, because they need
      different levels of detail and different vocabulary. Separate diagrams for
      separate questions is less elegant and much more useful than one canonical
      image that everyone has to interpret.
    </p>
    <p>
      The moment they are most valuable is also the moment they are least often
      drawn: before the code exists. Sketching a proposed change tends to expose
      the coupling nobody wanted to discuss, and it is far cheaper to move a box
      than to move a service. After the fact, a diagram mostly documents
      decisions that are already expensive to revisit.
    </p>
    <p>
      So I keep them in version control, generate them to get moving, and try to
      remember that the value was never in the drawing. It is in deciding what
      to leave out, and then being willing to change it when the code disagrees.
    </p>
    <img
      src="../assets/thumbnails/blogs/diagrams.png"
      alt="Boxes and arrows forming a simple diagram"
    />
  </>
);

export default DiagramsFromCode;
