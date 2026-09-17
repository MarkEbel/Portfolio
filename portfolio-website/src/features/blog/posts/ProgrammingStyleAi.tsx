const ProgrammingStyleAi = () => (
  <>
    <p>
      Writing code has become the cheap part. What has not become cheaper is
      deciding what should exist, and that shift changes which skills are
      actually scarce. Style used to be about how you wrote a function. It is
      increasingly about what you are willing to keep.
    </p>
    <p>
      As a first reviewer, a model is genuinely good. It does not get bored, it
      will follow a call through several files without complaining, and it
      reliably notices the dull omission a person skims past: the unhandled
      error, the case the tests never touch, the name that no longer matches
      what the function does. Used before another human sees the change, that is
      real value, and it respects the reviewer's time.
    </p>
    <p>
      It is not approval, though, and the distinction is not pedantic. A model
      does not own the requirement, will not be paged when the service falls
      over, and cannot answer for the decision six months later. It can report
      that the tests pass without noticing that the tests describe the wrong
      behaviour, because nothing in its position requires it to care whether the
      specification was right.
    </p>
    <p>
      The failure mode that matters most is tonal. Correct answers and confident
      inventions arrive in the same calm register, with the same fluent
      explanation attached. There is no signal in the writing that separates the
      two. Asking again does not reliably help either, since a follow-up
      question can produce a more elaborate defence of the original mistake
      rather than a correction.
    </p>
    <p>
      People often compare this to working with a junior developer, and the
      comparison is useful up to a point. Both can be confidently wrong, both
      need context rather than instructions, and both produce work that has to
      be checked. The analogy then breaks, because a junior developer is
      accumulating judgement and responsibility with every mistake, and a model
      is not. The output has no author in the sense that matters; it belongs to
      whoever merges it.
    </p>
    <p>
      There is also a quieter problem of volume. When generating a hundred lines
      is nearly free, the default drifts towards more code: another helper,
      another abstraction, another configuration option, each locally reasonable
      and collectively incoherent. All of it has to be maintained by somebody.
      Deleting has become a larger part of the job than writing, and it is the
      part that still requires understanding the whole.
    </p>
    <p>
      That is what taste means in practice now. Names that still make sense a
      month later, functions small enough to hold in your head, comments that
      explain why rather than restating what. These were always good habits.
      They matter more when the cost of producing plausible code has collapsed,
      because plausibility is no longer evidence of anything.
    </p>
    <p>
      There is a limit, and we cross it often. Arguing about whether a helper
      should be extracted, or whether the names are elegant enough, can turn
      into grating cheese on the "correct" edge of the grater when it is all
      going to be mixed together anyway. We talk as if we were artists. We are
      not. We are engineers. The cheese still has to feed people, and the code
      still has to ship, run and be changed by somebody else. Style that reduces
      the cost of the next change is engineering. Style that only satisfies the
      person writing it is garnish.
    </p>
    <p>
      Consistency is the quiet casualty. A codebase develops local habits for
      good reasons, and a model trained on everyone else's code will reach for
      the most common idiom instead of yours. Accept enough of those and the
      project drifts towards a generic average, which is not obviously wrong
      anywhere and no longer coherent anywhere either. Reviewing a lot of
      generated code also recalibrates you, because the median suggestion starts
      to feel like the standard.
    </p>
    <p>
      My rule has not changed much: I have to be able to change the code without
      the conversation that produced it. I run the tests myself rather than
      trusting a summary of them, I read every line I am putting my name to, and
      I remove anything I cannot explain. If a pull request needs the prompt
      history to make sense, it is not finished.
    </p>
    <img
      src="../assets/thumbnails/blogs/style-ai.png"
      alt="A laptop and a small lamp looking at tidy notes"
    />
  </>
);

export default ProgrammingStyleAi;
