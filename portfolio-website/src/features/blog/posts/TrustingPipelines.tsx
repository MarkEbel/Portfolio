const TrustingPipelines = () => (
  <>
    <p>
      A green pipeline is a lovely colour. It is also easy to stop believing,
      once you have watched it go green while production fell over.
    </p>
    <p>
      Trust is boring work. Pin your actions. Do not let a script curl something
      unsigned. Keep secrets out of logs. Make the path to production the same
      path every time, so "it worked on my machine" is not a release strategy.
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
