const Renovate = () => (
  <>
    <p>
      Dependency updates are the housework of software. Nobody is promoted for
      doing them, the work is never finished, and the cost of skipping them is
      deferred rather than avoided. A project that ignores updates for a year
      has not saved any effort. It has moved that effort into a single painful
      week, usually the week something urgent forces the issue.
    </p>
    <p>
      Tools like Renovate are often sold as the answer to that, and the pitch is
      straightforward: instead of a backlog nobody can see, you get a stream of
      small pull requests, each with a version bump and a link to what changed.
      That framing is genuinely useful. Reviewing a patch release on its own is
      a different task from auditing eighteen months of drift, even when the
      total work is identical.
    </p>
    <p>
      What the tool cannot do is create attention. A bot that opens pull
      requests does not make anyone read them. The common failure is not a
      missed update; it is twenty open update branches that everyone has learned
      to scroll past. That is the original backlog with better formatting, and
      it is arguably worse, because the team now believes the problem is
      handled.
    </p>
    <p>
      So the interesting configuration is not which tool you pick but how much
      it is allowed to ask of people. Grouping low-risk changes together helps,
      because lockfile refreshes and development tooling rarely deserve
      individual attention. Limiting how many branches can be open at once
      matters more than it sounds, since the queue is a form of pressure on
      reviewers. Major versions belong on their own, where a person can give
      them the reading they need.
    </p>
    <p>
      Automatic merging is where opinions get strong, and I think the honest
      test is narrow. Auto-merge is defensible when the test suite is a real
      gate for the thing being changed. If the checks are thorough and
      trustworthy, letting a patch release merge itself is reasonable. If they
      are shallow or flaky, auto-merge is not automation, it is a scheduled way
      of shipping code nobody examined. The tool has not made the risk
      disappear, only harder to notice.
    </p>
    <p>
      The security argument deserves more scepticism than it usually gets.
      Staying current does shorten the window where a published advisory applies
      to you, and that is a real benefit. It also shortens the distance between
      a compromised release and your build, because the same automation that
      delivers a security patch quickly will deliver a malicious version
      quickly. Those pull in opposite directions, and the usual answer is to
      treat routine updates and advisory-driven updates differently: let
      ordinary versions settle for a few days before adopting them, while
      keeping a faster path for genuine vulnerabilities.
    </p>
    <p>
      There is also a limit to what any of this fixes. Automated updates handle
      the versions, not the consequences. A major release with changed behaviour
      still needs someone who understands the code to work out what it means,
      and no bot will tell you that your tests never covered the path that just
      changed. The work that requires judgement stays where it was.
    </p>
    <p>
      That is why I still think it is worth doing. Not because it removes the
      housework, but because it changes when the housework happens. Small,
      regular, slightly boring reviews build the habit and the familiarity that
      make the rare urgent update survivable. Automate the noticing, keep the
      judgement, and be suspicious of any setup that quietly does both.
    </p>
    <img
      src="../assets/thumbnails/blogs/renovate.png"
      alt="A small robot placing packages onto a conveyor"
    />
  </>
);

export default Renovate;
