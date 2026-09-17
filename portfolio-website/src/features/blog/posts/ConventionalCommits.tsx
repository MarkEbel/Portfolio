const ConventionalCommits = () => (
  <>
    <p>
      A diff can only ever tell you what changed. The commit message is the one
      place where the reason survives, and it is written at the worst possible
      moment, when the work is finished and the author wants to stop thinking
      about it. That timing explains most bad commit history better than any
      lack of discipline does.
    </p>
    <p>
      It helps to be specific about who the message is for. There is the person
      narrowing down a regression, who wants to know which commit is worth
      reading. There is the person assembling release notes, who wants the
      change described in terms of behaviour. And there is the person in a year
      asking why a line exists at all, who has no context and no way to ask.
      None of them are the author, which is the whole problem.
    </p>
    <p>
      Conventional commits are the usual answer: a prefix such as feat, fix or
      chore, an optional scope, then a short description. The genuine benefit is
      that this makes history machine-readable. Changelogs can be generated,
      versions can be inferred, and history can be filtered to one kind of
      change. That is a real gain, but it only pays off if something actually
      consumes the format. Without that, the convention is decoration.
    </p>
    <p>
      The obvious criticism is that a format guarantees shape, not content.
      Twenty commits reading "chore: update" satisfy every linter and tell a
      future reader nothing. Enforcing structure can even make things worse, by
      producing history that looks disciplined while carrying no information. It
      is easy to mistake a passing commit lint for a useful log.
    </p>
    <p>
      There is a subtler cost too. Strict conventions add friction to
      committing, and friction pushes people towards fewer, larger commits so
      they only have to categorise once. A tidy history of enormous commits is
      harder to bisect than an untidy history of small ones, so the rule can
      quietly damage the thing it was adopted to protect.
    </p>
    <p>
      That suggests the format is the least important part. Granularity matters
      more: one reason per commit, so that reverting or isolating a change is
      possible at all. The body matters more as well, because that is where the
      why belongs. Linking a ticket is worth doing, but a tracker is a system
      that can be migrated or switched off, and the repository usually outlives
      it.
    </p>
    <p>
      Squash merging complicates this further, and teams often adopt both
      without noticing the tension. If every branch is squashed, the individual
      messages are discarded and the pull request title becomes the permanent
      record. In that setup, careful per-commit discipline is mostly private
      bookkeeping, and the effort belongs in the title and description instead.
      Either choice is defensible; being unclear about which one is the record
      is not.
    </p>
    <p>
      Generated commit messages are the newest version of the same confusion. A
      model can read a diff and produce a tidy, correctly prefixed summary of
      it, which sounds like the problem solved. What it is summarising is the
      one thing a reader can already see. The reason for the change, the option
      that was rejected, the constraint that made an obvious approach
      impossible: none of that is in the diff, so none of it can be in a message
      derived from the diff. The result is history that reads well and says
      nothing new.
    </p>
    <p>
      So I do not police the characters. I care that the history can be
      searched, that a change can be understood without the author in the room,
      and that the format is either feeding a tool or getting out of the way. A
      message that only makes sense to the person who wrote it late on a
      Thursday is not finished, whatever prefix it carries.
    </p>
    <img
      src="../assets/thumbnails/blogs/conventional-commits.png"
      alt="Tidy stack of commit blocks"
    />
  </>
);

export default ConventionalCommits;
