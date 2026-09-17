const UsingCursorLocally = () => (
  <>
    <p>
      I use Cursor close to the code: in the repository, with the same build,
      tests and version control I would use without it. That makes it useful for
      more than producing a hopeful block of code in a chat window. It can read
      the surrounding system, make a small change and find out whether the
      project still agrees.
    </p>
    <p>
      "Local" needs a careful definition. The local agent works with files and
      runs tools on my machine, but model inference is still hosted. Relevant
      prompts and code can be sent for processing.{" "}
      <a
        href="https://cursor.com/privacy-overview"
        target="_blank"
        rel="noopener noreferrer"
      >
        Privacy Mode
      </a>{" "}
      prevents that material being used for training; it does not turn a hosted
      model into one running on my laptop.
    </p>
    <p>
      I prefer giving an agent a narrow outcome and asking it to inspect before
      editing. The repository's rules carry the things I should not have to
      repeat, such as where code belongs, which checks matter and what must not
      be changed. A good request still leaves room for the agent to find the
      evidence rather than feeding it my first guess as fact.
    </p>
    <p>
      The{" "}
      <a
        href="https://cursor.com/docs/agent/security/run-modes"
        target="_blank"
        rel="noopener noreferrer"
      >
        local agent run modes
      </a>{" "}
      are part of that boundary. Sandboxing can limit which files and network
      destinations supported terminal commands can reach, while review decides
      what can run without stopping. Auto-review helps, but its classifier can
      make mistakes and is not a security boundary. More autonomy is not
      automatically better if the task touches credentials, external services or
      files outside the project.
    </p>
    <p>
      The useful loop is still human. I read the diff, check the claim against
      the code and run the project's own quality gates. If the agent tried an
      approach that failed, I expect that attempt to be removed rather than
      hidden under the working version. The final change has to make sense
      without its conversation.
    </p>
    <p>
      Used that way, Cursor feels less like an oracle and more like another pair
      of hands at the desk. It can do a lot of reading and typing. I still have
      to decide what belongs.
    </p>
    <img
      src="../assets/thumbnails/blogs/cursor-local.png"
      alt="A cursor-shaped lamp beside a laptop and a developer's hand"
    />
  </>
);

export default UsingCursorLocally;
