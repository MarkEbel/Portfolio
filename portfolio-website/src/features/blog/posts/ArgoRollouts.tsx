const ArgoRollouts = () => (
  <>
    <p>
      We used to deploy by hand. I do not miss it. Someone would copy a folder,
      hold their breath, and hope the next hour was quiet.
    </p>
    <p>
      Argo CD made the cluster the thing that wanted the same state as git. That
      is a nicer argument than "please remember the extra step". Rollouts on top
      of that mean you can send a little traffic first, watch it, and step back
      if it misbehaves.
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
