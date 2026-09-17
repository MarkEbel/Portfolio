const AiDangers = () => (
  <>
    <p>
      Most conversations about the danger of AI start too far from here. They
      jump to a machine with intentions, or to a future so abstract that nobody
      has to change what they are doing this week. The nearer risks are less
      cinematic and harder to dismiss, because they are already in the work.
    </p>
    <p>
      For the industry, the first is deskilling dressed as productivity. When
      generating a plausible change is cheap, the obvious reaction is to hire
      fewer people who can still make one from scratch. That looks efficient
      until you need someone who can tell a green test suite from a correct
      system. Judgement is built by doing the dull work, not by approving it. If
      the junior path disappears, the senior one does not appear from nowhere a
      few years later.
    </p>
    <p>
      The second is concentration. A handful of model providers now sit
      underneath a great deal of software work, and a great deal of the tools
      around it. That is a supply-chain risk as ordinary as any other vendor
      lock-in, only larger: pricing, outages, policy changes and training-data
      disputes all become everybody's problem at once. Teams that cannot
      describe what they would do if the API vanished have already chosen a
      dependency, whether they wrote it down or not.
    </p>
    <p>
      The third is a quieter kind of liability. Fluent output is easy to merge
      and hard to attribute. When something goes wrong, "the model wrote it" is
      not a defence anyone outside the team will accept, and it should not be
      one we accept internally either. The person who shipped the change still
      owns it. Tools that make it faster to ship without reading make that
      ownership easier to forget.
    </p>
    <p>
      Those are industry problems. They matter because they change who can still
      understand the systems other people have to live with. The world facing
      risks are broader, and they do not require a superintelligence to be real.
    </p>
    <p>
      The most immediate is the collapse of cheap signals for truth. Text,
      images and voices that used to be expensive to fake are now cheap to
      produce at scale. That does not invent lying, but it does remove friction
      from it. Journalism, hiring, customer support and public debate all
      assumed that producing a convincing artefact took time. When it does not,
      the burden shifts onto everyone else to check, and most people will not
      have the time or the tools.
    </p>
    <p>
      Labour is the next. Plenty of work that was called knowledge work was
      really the production of fluent documents. Some of that work should go.
      Some of it was how people entered better work, and removing the first rung
      is not the same as automating a chore. A society that accelerates that
      shift without a story for the people on the rung will not get a tidy
      productivity miracle. It will get a political problem.
    </p>
    <p>
      Energy and material cost sit underneath both. Training and serving large
      models consume power and hardware that have to come from somewhere, and
      "the cloud" is a way of not looking at the somewhere. That does not make
      every local alternative virtuous, but it does mean treating inference as
      free is a bookkeeping trick.
    </p>
    <p>
      The through-line is not that the tools are evil. It is that they are good
      at sounding finished. Finished-sounding software, finished-sounding
      evidence, finished-sounding policy. Engineers are supposed to distrust
      that register. So is everyone else, and they are being asked to do it with
      less training and more volume. The danger I take seriously is not a plot.
      It is the habit of letting fluency stand in for a decision.
    </p>
    <img
      src="../assets/thumbnails/blogs/ai-dangers.png"
      alt="A desk lamp and a distant city joined by a thin amber line"
    />
  </>
);

export default AiDangers;
