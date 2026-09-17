const TrustingPipelines = () => (
  <>
    <p>
      A green pipeline is a strong signal and a slightly dangerous one. The
      useful question is not whether the checks passed, but what passing
      entitles anyone to believe. Most pipelines make a much weaker claim than
      the team acts on, and the gap between those two things is where bad
      releases live.
    </p>
    <p>
      It helps to read a pipeline as a statement: this change is safe to
      release. Written out like that, it is obviously too strong. What the
      checks usually establish is narrower. The code compiles, the behaviour
      someone previously described still holds, and no rule in a fixed list was
      broken. That is worth having, and it is not the same claim.
    </p>
    <p>
      Flakiness corrodes all of it. A suite that fails at random teaches people
      to retry, and retrying is individually rational and collectively
      disastrous, because once retrying is normal a red result no longer means
      stop. At that point the pipeline has become a delay rather than a gate,
      and the team has lost the ability to tell a real failure from noise.
      Tolerating a flaky test is a decision, even when nobody makes it out loud.
    </p>
    <p>
      There is a deeper limit that no amount of reliability fixes. Tests assert
      the behaviour someone already thought of, which means a green suite
      confirms you have not changed what was previously encoded, including any
      mistakes in it. Coverage figures describe how much code ran, not how much
      behaviour was verified, and the two are easy to confuse when a number is
      on a dashboard.
    </p>
    <p>
      This site is a small, honest example. Every change goes through ESLint,
      Prettier, TypeScript and a British English spell checker. Playwright then
      opens it in desktop and phone-sized Chromium, and axe checks each page
      against the WCAG 2.2 AA rules it can automate. Dependency review runs
      separately, because application tests cannot tell me a new package version
      carries a known advisory, and deployment only happens from the main branch
      once those gates pass.
    </p>
    <p>
      What that setup cannot do is more interesting than what it can. The
      accessibility rules that can be automated are a minority of the standard,
      so a page can pass while still being awkward with a keyboard. The browser
      tests only know the journeys I thought to write down. Everything runs in
      one engine. None of that makes the checks pointless; it means the result
      narrows the review rather than replacing it.
    </p>
    <p>
      Speed matters more than people like to admit, because a pipeline nobody
      waits for is a pipeline that gets bypassed. But fast because it checks
      very little is a false economy, and the most revealing exercise is asking
      which check you would delete. If the answer is that none of them have ever
      caught anything, they are ceremony. If the answer is that you dare not
      remove any, you probably do not know what they are each protecting.
    </p>
    <p>
      The supply chain deserves its own paragraph, because it is where trust is
      most often assumed. Pin the actions you depend on, keep secrets out of
      logs, and make the route to production identical every time. A pipeline
      that can be edited by the same change it is testing is not a gate, it is a
      suggestion, and that is true however green it looks.
    </p>
    <p>
      So I would rather have a pipeline that fails loudly and explains itself
      than one that is fast and mysterious. Not because failure is virtuous, but
      because a check is only worth the belief it earns, and the ones that
      cannot explain themselves end up being believed anyway.
    </p>
    <img
      src="../assets/thumbnails/blogs/pipelines.png"
      alt="A pipeline with locks at the joints"
    />
  </>
);

export default TrustingPipelines;
