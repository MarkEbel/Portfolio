const UsingCursorLocally = () => (
  <>
    <p>
      Most arguments about AI editors are about whether the code is any good.
      The more interesting question is where the work happens, because that
      determines what the tool can check and what you are obliged to check
      yourself.
    </p>
    <p>
      Working in the repository rather than in a chat window is the practical
      difference. The same build, the same tests and the same version control
      apply, so a suggested change can be run rather than merely admired. A
      model that can execute the test suite is in a position to find out it was
      wrong. One that can only produce text is not, and the gap between those
      two situations is most of the value.
    </p>
    <p>
      "Local" needs a careful definition, because it is doing a lot of quiet
      work in marketing. The local agent edits files and runs tools on my
      machine, but inference is still hosted, and relevant prompts and code can
      be sent away for processing.{" "}
      <a
        href="https://cursor.com/privacy-overview"
        target="_blank"
        rel="noopener noreferrer"
      >
        Privacy Mode
      </a>{" "}
      prevents that material being used for training. It does not turn a hosted
      model into one running on my laptop, and anyone with a data residency
      obligation needs the second thing rather than the first.
    </p>
    <p>
      That distinction is not pedantry, it decides which work the tool is
      eligible for. Whether prompts and file contents may leave the building is
      a question with a policy answer in most regulated environments, and "local
      agent" is not an answer to it. Being precise about the data flow is what
      lets you use the tool confidently on the work where it is allowed.
    </p>
    <p>
      In use, I get better results from a narrow outcome than a broad
      instruction, and from asking for inspection before editing. Repository
      rules carry the conventions I should not have to restate, such as where
      code belongs and which checks matter. It helps to leave room for the agent
      to find its own evidence rather than handing it my first guess as fact,
      because a confident guess in the prompt tends to come back as a confident
      conclusion.
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
      are the other half of the boundary. Sandboxing can limit which files and
      network destinations supported terminal commands reach, while review
      decides what runs without stopping. Auto-review helps, but its classifier
      can be wrong and is not a security boundary, so more autonomy is not
      automatically better once a task touches credentials, external services or
      files outside the project.
    </p>
    <p>
      The cost that gets discussed least is review load. Generating a plausible
      diff is now much faster than understanding one, so the bottleneck moves to
      the person at the end, and the temptation is to skim because the code
      looks reasonable and the tests are green. Volume makes that worse. I would
      rather have a small change I have actually read than a large one I have
      approved on the strength of its formatting.
    </p>
    <p>
      There is a longer-term version of the same worry. The ability to review
      well comes from having built things, and if reviewing is all you ever do,
      the mental model that makes your review worth anything slowly stops being
      refreshed. I do not have a tidy answer to that beyond doing some work by
      hand on purpose, particularly in parts of the system I need to understand
      properly.
    </p>
    <p>
      I also expect failed attempts to be removed rather than left underneath
      the version that worked. A change should make sense without its
      conversation. Used that way the tool feels less like an oracle and more
      like another pair of hands at the desk: it can do a great deal of the
      reading and typing, and I still have to decide what belongs.
    </p>
    <img
      src="../assets/thumbnails/blogs/cursor-local.png"
      alt="A cursor-shaped lamp beside a laptop and a developer's hand"
    />
  </>
);

export default UsingCursorLocally;
