const RunningAiLocally = () => (
  <>
    <p>
      "Just run it locally" has become a slogan, and like most slogans it
      bundles several different arguments together. Some of them are strong,
      some are wishful, and they are worth separating before deciding whether to
      build anything.
    </p>
    <p>
      The strongest version is not a preference at all. Defence, government,
      healthcare and anyone operating under a data residency obligation may
      simply not be permitted to send their estate to someone else's hardware.
      In that situation the hosted option is not expensive or distasteful, it is
      unavailable, and the model has to live where the data already lives.
    </p>
    <p>
      The weaker version is the assumption that local means private. It does
      not, by itself. The weights came from somewhere and were chosen by
      someone. The server needs network boundaries that somebody has actually
      configured. Prompts, responses and logs deserve the same handling as the
      data that produced them, and a local deployment that writes full prompts
      to a shared log has moved the exposure rather than removed it.
    </p>
    <p>
      Hardware is the first honest constraint. A model has to fit, and then it
      has to answer quickly enough to be useful, and then it has to keep doing
      that for everyone using it at once. Those are three different problems,
      and the last one surprises people, because a model that feels responsive
      for one person can fall over at ten.
    </p>
    <p>
      The cost argument is usually the weakest of the lot. Self-hosting is not
      free after the hardware: accelerators sit idle most of the day, they draw
      power while they do it, and somebody has to maintain the thing. At modest
      volumes a hosted API is often cheaper, and pretending otherwise makes the
      case look dishonest to whoever approves the budget. The real benefits are
      control, predictability and the absence of a third party in the data path,
      which are worth paying for when they are genuinely required.
    </p>
    <p>
      Capability is the other trade nobody enjoys stating. The largest hosted
      models are generally ahead of what fits comfortably on modest local
      hardware, and the useful question is not which is better in the abstract
      but whether a smaller model is good enough for one specific task. That is
      answerable, and it is answered by trying the real task rather than by
      reading a leaderboard.
    </p>
    <p>
      The{" "}
      <a
        href="https://docs.vllm.ai/en/stable/getting_started/quickstart.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        vLLM Quickstart
      </a>{" "}
      is a practical way into both offline inference and an OpenAI-compatible
      server. That compatibility matters more than it first appears, because an
      application can point at a local endpoint without being rebuilt around a
      new client, which keeps the decision reversible. It does not remove the
      need to authenticate that endpoint, control what can reach it, or think
      about which model is being served.
    </p>
    <p>
      What tends to get underestimated is that you have adopted a production
      service. It needs versioning, monitoring, capacity planning and a story
      for upgrades, and the person who set it up is now on the hook when it is
      slow. Teams that treat a local model as a piece of infrastructure do fine.
      Teams that treat it as a clever afternoon end up with an unmaintained
      dependency in the middle of a product.
    </p>
    <p>
      That is the version of this I care about: useful, fairly boring, and
      inside a boundary somebody understands. Demonstrations are easy. Knowing
      where the weights, the prompts, the responses and the logs actually live
      is the work.
    </p>
    <img
      src="../assets/thumbnails/blogs/local-ai.png"
      alt="A closed server cabinet with a warm glow inside"
    />
  </>
);

export default RunningAiLocally;
