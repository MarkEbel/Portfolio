const MentorshipOnboarding = () => (
  <>
    <p>
      Every codebase has doors that are not marked on any map. Which environment
      is safe to break. Why that test is skipped. Who to ask about the service
      nobody has touched in two years. None of it is secret on purpose. It is
      simply knowledge that lives in people, and people rarely notice they are
      carrying it.
    </p>
    <p>
      Onboarding is usually described as a checklist: accounts, access, a
      machine that builds the project. That part is real work, but it is the
      part that can be finished. The expensive half is the undocumented
      knowledge, and it is invisible to exactly the people best placed to write
      it down, because once you know where a door is you stop seeing it as a
      door.
    </p>
    <p>
      The common response is the guided walkthrough, where someone experienced
      spends a day explaining the system. It feels generous and it is genuinely
      useful to the person receiving it. It also scales terribly and leaves
      nothing behind, so the next joiner needs the same day from the same
      person. Anything that has to be repeated verbally is a process that has
      not been finished.
    </p>
    <p>
      Documentation is the obvious alternative, and it deserves more scepticism
      than it usually gets. Written instructions rot, and a confidently wrong
      document is worse than no document, because it is trusted and followed.
      The useful discipline is not writing everything down; it is being honest
      about which knowledge changes slowly enough to survive in prose, and
      letting the fast-moving parts live in scripts and automation where they
      break loudly when they are wrong.
    </p>
    <p>
      A better measure than any of this is how long it takes a new person to
      ship something small to production, and how many people they had to
      interrupt on the way. That number tells you how many undocumented doors
      are between a joiner and a result. It is also uncomfortable, which is
      probably why teams prefer to measure whether the checklist was completed.
    </p>
    <p>
      That measure can be gamed, though, and it usually is. If the target is a
      fast first release, the obvious move is to hand someone a trivial change
      that touches nothing important, which produces a good number and teaches
      them very little. A first task is better chosen for what it forces someone
      to encounter: a real service, a real review, a real deployment. Slower,
      and considerably more informative for everyone.
    </p>
    <p>
      Mentoring later is the same problem with the timescale stretched out. The
      gap is almost never capability, it is context, and the most common mistake
      is answering the question that was asked rather than working out the one
      that was meant. Saying that you do not know and then looking together is
      more useful than an authoritative answer, partly because it is honest and
      partly because it demonstrates the method rather than the conclusion.
    </p>
    <p>
      Where mentoring tends to fail is structural rather than personal. It is
      treated as something generous people do in the gaps, with no time
      allocated and no acknowledgement in planning. The result is that it
      happens through interruptions, falls unevenly on whoever is least able to
      say no, and quietly disappears whenever delivery gets tight. A team that
      says it values mentoring but has never given it a slot in the plan does
      not value it yet.
    </p>
    <p>
      The same reasoning applies to hiring. Specific stack knowledge is the most
      learnable thing a candidate can bring and the easiest to overvalue,
      because it is easy to test. What is harder to teach is the instinct to ask
      a clarifying question instead of guessing, and that is the trait I would
      rather bet on.
    </p>
    <img
      src="../assets/thumbnails/blogs/mentorship.png"
      alt="Two people talking at a whiteboard"
    />
  </>
);

export default MentorshipOnboarding;
