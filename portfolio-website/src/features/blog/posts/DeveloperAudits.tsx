const DeveloperAudits = () => (
  <>
    <p>
      From a distance, audits look like paperwork. Closer up they are a demand
      for evidence, which turns out to be a different thing from being secure.
      Most of the discomfort engineers feel about compliance comes from
      confusing the two.
    </p>
    <p>
      A lot of audit work is translation. The team already restricts who can
      deploy, already scans dependencies, already reviews changes. What it often
      cannot do is show that, in a form somebody outside the team can check. So
      the work becomes making existing practice legible: who has access, what
      was scanned and when, which change closed which finding.
    </p>
    <p>
      That gap between doing and proving is where the interesting failures sit,
      and it runs in both directions. A careful team with no records can fail an
      audit while being genuinely safe. A team with excellent records can pass
      while being unsafe, because the standard measures whether evidence exists,
      not whether the underlying control works. Compliance is a floor and a
      proxy, and treating it as a verdict on security is a mistake in either
      direction.
    </p>
    <p>
      The honest benefit is that externalising knowledge has value on its own.
      If the only record of a control is in one person's memory, it is not
      really a control, because it cannot be checked, handed over or relied on
      when that person is unavailable. Audits force that question in a way
      internal good intentions rarely do.
    </p>
    <p>
      The honest cost is that compliance work competes with the work it is meant
      to protect. Hours spent producing artefacts are hours not spent fixing the
      dull problems that actually cause incidents. Checkbox culture is not a
      straw man, and it is what happens when the deadline is the audit rather
      than the risk. Frameworks like PCI and FedRAMP are most useful when
      treated as a structured prompt, and least useful when treated as the goal.
    </p>
    <p>
      The way out of that trap is to stop producing evidence as a separate
      activity. If the control is enforced by a pipeline, the pipeline's own
      records are the evidence, and no one has to reconstruct anything from
      memory at the end of the year. Evidence that is a by-product of doing the
      work stays true; evidence assembled for an audit describes a particular
      fortnight and starts decaying immediately.
    </p>
    <p>
      The annual rhythm causes its own damage. A yearly deadline encourages a
      scramble, and a scramble encourages exactly the paperwork-shaped thinking
      that makes engineers cynical about the whole exercise. Controls that are
      checked continuously are both less work and more honest, because nobody
      has to remember what was true nine months ago.
    </p>
    <p>
      Accessibility has the same shape, which is why I think of it in the same
      category. WCAG is a catalogue of ways people get locked out of a page, and
      automated tooling can only detect a portion of it. Contrast, missing names
      and structural errors are checkable. Whether a page is actually navigable
      by keyboard, or whether the reading order makes sense to somebody using a
      screen reader, largely is not.
    </p>
    <p>
      So the automation is triage rather than proof. Failing a build over a
      contrast ratio is cheap and worth doing, and I would rather fail a build
      than fail a person. But a green accessibility check proves considerably
      less than teams assume, and quoting a passing scan as evidence of an
      accessible product is exactly the substitution of evidence for reality
      that makes audits frustrating in the first place.
    </p>
    <p>
      The version of all this I have come to like is simple. Write down what you
      already believe is true about the system, then try to evidence each claim.
      The parts where you cannot are the useful output. That exercise is worth
      doing whether or not anyone is coming to inspect.
    </p>
    <img
      src="../assets/thumbnails/blogs/audits.png"
      alt="A clipboard and a small shield"
    />
  </>
);

export default DeveloperAudits;
