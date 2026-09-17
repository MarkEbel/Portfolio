const ArgoRollouts = () => (
  <>
    <p>
      Deployment risk is usually discussed as a tooling problem. In practice it
      is mostly two questions: who is awake when it goes wrong, and how quickly
      the change can be undone. Tools matter because of how they affect those
      two answers, not in their own right.
    </p>
    <p>
      The traditional instinct is to do large upgrades overnight, and the logic
      is sound as far as it goes. Fewer customers are using the system, so fewer
      people are affected if it breaks. The unstated cost is that the smallest
      and most tired group of engineers is on hand, the people who know the
      system best are asleep, and every decision is made against a clock that
      makes rushing feel reasonable.
    </p>
    <p>
      Daylight releases invert that. There are more people available to help and
      better odds that someone recognises the failure, but there are also more
      customers exposed and considerably more noise. Simply moving a risky
      manual process into working hours does not make it safe. It changes who is
      watching, which is worth something, but it does not change what happens
      when the change is bad.
    </p>
    <p>
      Framed that way, the timing debate is a symptom. The variable that
      actually matters is reversibility. If a release can be undone in a minute
      by anyone on the team, the hour it happens becomes a minor detail. If it
      cannot, no scheduling choice will save you, and the overnight window is
      really just an attempt to limit the blast radius of a process nobody
      trusts.
    </p>
    <p>
      This is where declarative deployment earns its reputation. When the
      cluster continuously reconciles towards a state described in version
      control, the desired state is reviewable, repeatable and identical across
      environments. That is a better argument than asking people to remember an
      extra step, and it matters far more than which tool implements it.
      Progressive rollouts build on that by sending a fraction of traffic to the
      new version, watching it, and stopping before everyone is affected.
    </p>
    <p>
      The critical caveat is that automated rollback is only as good as the
      signal it watches. A health check that confirms the process is running
      will happily report success while the service returns wrong answers to
      every request. Unless the metrics describe what users actually need, the
      automation is making confident decisions from evidence that does not
      support them, which is worse than a human pausing to look.
    </p>
    <p>
      Rollback is also less complete than the word suggests. Stateless services
      go back cleanly. Database migrations, message schemas and anything that
      has already been written by the new version do not, and a team that says
      it can always roll back usually means it can roll back the easy half.
      Designing changes to be reversible, by separating schema changes from
      behaviour changes, does more for safety than any deployment tool.
    </p>
    <p>
      None of this machinery is free either. Progressive delivery adds
      components, configuration and new failure modes, and it can fail in ways
      that are harder to understand than the problem it replaced. For a small
      system with a fast, boring redeploy, a canary you do not fully understand
      is a downgrade dressed as maturity.
    </p>
    <p>
      The useful test is not whether a team deploys at two in the morning. It is
      whether a bad release requires one specific person to be online. If it
      does, the schedule is doing the work that the architecture should be
      doing.
    </p>
    <img
      src="../assets/thumbnails/blogs/argo-rollouts.png"
      alt="A small boat of containers on a calm wave"
    />
  </>
);

export default ArgoRollouts;
