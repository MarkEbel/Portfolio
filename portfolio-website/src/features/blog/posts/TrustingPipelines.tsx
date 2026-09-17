const TrustingPipelines = () => (
  <>
    <p>
      A green pipeline is a lovely colour. It is also easy to stop believing,
      once you have watched it go green while production fell over.
    </p>
    <p>
      A pipeline earns trust by checking the failures the team actually cares
      about and explaining what broke. More checks are not automatically better.
      A flaky suite that everyone retries teaches people to ignore red, which is
      worse than having no check at all.
    </p>
    <p>
      This portfolio is a small example. Every change is checked with ESLint,
      Prettier, TypeScript and a British English spell checker. Playwright then
      opens it in desktop and phone-sized Chromium, while axe checks the pages
      against the WCAG 2.2 AA rules it can automate.
    </p>
    <p>
      Dependencies get their own review because application tests cannot tell me
      that a new package version has a known advisory. Deployment only runs from
      the main branch after those quality, browser and dependency gates succeed.
      The same commit that passed is the one GitHub Pages receives.
    </p>
    <p>
      None of that proves the site is good. Automated accessibility checks do
      not understand whether the writing is clear, and a browser test only knows
      the journeys I thought to describe. The pipeline narrows the review; it
      does not replace it.
    </p>
    <p>
      Trust is boring work. Pin actions, keep secrets out of logs and make the
      path to production the same path every time. When a check becomes noisy,
      repair it rather than teaching the team to step around it.
    </p>
    <p>
      I would rather a pipeline that fails loudly than one that is fast and
      mysterious. If we cannot explain why this commit is allowed out, it should
      not go out.
    </p>
    <img
      src="../assets/thumbnails/blogs/pipelines.png"
      alt="A pipeline with locks at the joints"
    />
  </>
);

export default TrustingPipelines;
