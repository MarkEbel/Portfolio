const ProgrammingStyleAi = () => (
  <>
    <p>
      I use AI to write code. I also delete a surprising amount of what it
      writes. The skill I care about more now is taste: does this look like
      something I would sign?
    </p>
    <p>
      It is useful as a first reviewer. It does not get tired, it will trace a
      call through several files, and it often spots the dull omission that a
      person skims past. I use it to challenge names, tests, error paths and the
      shape of a change before another person has to spend time on them.
    </p>
    <p>
      That is not the same as approval. A model does not own the requirement,
      carry the pager or explain the decision in a review. It can tell me that
      the tests pass without noticing that the tests describe the wrong
      behaviour. A human still has to understand the diff, check the assumptions
      and decide whether the result belongs in the system.
    </p>
    <p>
      The dangerous failures are often delivered in the same calm voice as the
      correct answers. A model can invent an API, misread a security boundary or
      quietly replace an awkward requirement with an easier one. Asking again
      may fix it, or may produce a more confident defence of the same mistake.
    </p>
    <p>
      In that respect, working with one can feel like mentoring an eager junior
      developer. Confidence is not evidence, context has to be shared, and a
      plausible answer still needs checking. The comparison stops there: people
      learn responsibility and judgement through experience, while a model
      remains a tool whose output belongs to the person using it.
    </p>
    <p>
      Good style in this era is not cleverness. It is names that still make
      sense at 8am, small functions and comments that explain why rather than
      what. A model will happily invent a helper that only makes sense while the
      chat is open.
    </p>
    <p>
      My rule is that I have to be able to change the code without the chat
      history. I run the tests myself, read every changed line and remove
      anything I cannot explain. If the pull request needs the prompt to make
      sense, it is not ready.
    </p>
    <img
      src="../assets/thumbnails/blogs/style-ai.png"
      alt="A laptop and a small lamp looking at tidy notes"
    />
  </>
);

export default ProgrammingStyleAi;
