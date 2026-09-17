const ArgoRollouts = () => (
  <>
    <p>
      We used to deploy by hand. I do not miss it. Someone would copy a folder,
      hold their breath, and hope the next hour was quiet.
    </p>
    <p>
      The usual instinct was to make a large upgrade overnight. Fewer customers
      were awake, but fewer engineers were at their best too. One tired person
      had to separate a real fault from the noise of a large change while the
      clock quietly made every decision worse.
    </p>
    <p>
      Working hours have the opposite trade-off. There are more people to help,
      but also more opinions, messages and live customers who can feel a bad
      release. Moving the same risky manual process into daylight does not make
      it safe. It only changes who is watching.
    </p>
    <p>
      Argo CD made the cluster reconcile towards the state described in Git.
      That is a nicer argument than "please remember the extra step". A rollout
      can then send a little traffic to the new version, watch its health and
      stop or step back before everyone receives it.
    </p>
    <p>
      Automatic rollback changes the conversation. Instead of choosing between a
      lonely overnight upgrade and exposing every customer during the day, the
      team can make a smaller change while the right people are available. The
      size of the failure is limited before anyone has to become a hero.
    </p>
    <p>
      Automation is only as good as the signal it watches. A service can return
      healthy responses while doing the wrong thing, so metrics, traces and a
      clear rollback threshold have to describe what customers actually need. If
      the health check is theatre, the safety is theatre too.
    </p>
    <p>
      The point is not the tool name. It is that a bad release should be
      reversible without a hero. If the only rollback plan is "I am on Slack",
      that is not a plan.
    </p>
    <img
      src="../assets/thumbnails/blogs/argo-rollouts.png"
      alt="A small boat of containers on a calm wave"
    />
  </>
);

export default ArgoRollouts;
