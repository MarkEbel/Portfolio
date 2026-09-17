const MakingYourselfReplaceable = () => (
  <>
    <p>
      "Automate yourself out of a job" gets repeated often enough to have
      stopped being an argument. It is worth treating as a claim that might be
      wrong, because the version people usually state leaves out the part that
      makes it difficult.
    </p>
    <p>
      The case for it is arithmetic. A task that takes five minutes every week
      is several hours a year, and it never stops. Automating it converts a
      recurring cost into a fixed one, and the fixed cost is paid once by
      someone who has the context to pay it properly. Manual work also degrades
      under pressure, which is precisely when it is most likely to be needed.
    </p>
    <p>
      The stronger argument is about concentration rather than time. If a system
      can only be released, debugged or restored by one person, that person is a
      risk the team is carrying rather than an asset it is using. Holidays,
      illness and resignations are not edge cases. A team that cannot ship while
      someone is away has discovered a design problem, not a staffing one.
    </p>
    <p>
      Here is the part the slogan skips. Work that stops happening is invisible.
      An engineer who quietly removes a recurring failure looks less busy than
      one who visibly rescues the same failure every month, and most
      organisations are better at noticing rescues than absences. Advising
      people to make themselves replaceable without acknowledging that is naive
      advice, and it is usually given by people whose contributions are already
      visible.
    </p>
    <p>
      The practical answer is not to avoid the work but to make it legible. What
      the problem used to cost, what it costs now, and what the team can do that
      it could not before. That is not self-promotion, it is the same
      information anyone would want before deciding whether the automation was
      worth building.
    </p>
    <p>
      It is also worth being clear that this is partly a bet on your employer.
      In a team that notices prevention, removing a recurring problem is
      obviously good for you as well as for everyone else. In a team that only
      rewards visible rescue, the same act makes you quieter and the person
      firefighting monthly looks indispensable. The advice is still right, but
      it is not risk-free, and anyone repeating it should say so.
    </p>
    <p>
      There is also a limit to what should be automated at all. Every automation
      is a thing that can break, drift and need maintaining. A script that runs
      twice a year, silently stops working, and is trusted anyway is worse than
      a documented manual step that someone reads each time. Frequency,
      consequence and stability all matter, and only the first one tends to get
      considered.
    </p>
    <p>
      Automation encodes assumptions too. Built in a hurry by the one person who
      understands the problem, it can replace an obvious dependency on a person
      with a subtler dependency on a system nobody else can modify. That is not
      progress, it is the same bus factor wearing a hard hat, and it is harder
      to spot because the pipeline appears to be doing the work.
    </p>
    <p>
      So the goal I would actually defend is narrower than the slogan. Be
      replaceable on the routine, where predictability is the point, and hard to
      replace on judgement, where it is not. That version is good for the team
      and survivable for you, which the original phrasing quietly assumes
      without ever checking.
    </p>
    <img
      src="../assets/thumbnails/blogs/replaceable.png"
      alt="A pipeline of gears running without anyone holding them"
    />
  </>
);

export default MakingYourselfReplaceable;
