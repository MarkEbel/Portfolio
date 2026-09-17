const ConventionalCommits = () => (
  <>
    <p>
      Early on I treated commit messages as notes to myself. Then I had to
      bisect a bug and realised past-me had written "fixes" six times in a row.
      Not helpful.
    </p>
    <p>
      Conventional commits sound fussy until you have a changelog to write or a
      revert to find. A small prefix (feat, fix, chore) and a sentence that says
      what changed, not how you felt about it, is usually enough.
    </p>
    <p>
      I still do not police every character. I do care that the history can be
      grepped. If a commit message only makes sense to the person who wrote it
      at 11pm, it is not done yet.
    </p>
    <img
      src="../assets/thumbnails/blogs/conventional-commits.png"
      alt="Tidy stack of commit blocks"
    />
  </>
);

export default ConventionalCommits;
