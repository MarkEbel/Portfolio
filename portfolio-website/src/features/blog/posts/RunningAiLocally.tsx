const RunningAiLocally = () => (
  <>
    <p>
      I like running models on a machine I can unplug. It can be slower and a
      bit fiddly, but the interesting parts of a problem do not have to leave
      the room.
    </p>
    <p>
      For a lot of product work, a hosted API is fine. For defence, government,
      and anyone else who is not allowed to send their estate to someone else's
      GPU, "just use the cloud" is not an answer. The model has to live where
      the data already lives.
    </p>
    <p>
      Local does not mean private by magic. Models still need to be obtained,
      servers need sensible network boundaries, and prompts and logs need the
      same care as the data that went into them. The useful question is not
      merely where inference runs, but where every part of the request can go.
    </p>
    <p>
      Hardware is usually the first honest constraint. A model has to fit, and
      the answer still has to arrive quickly enough to be useful. Starting with
      a smaller model and a real task tells me more than choosing the largest
      model on a leaderboard.
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
      server. That compatibility matters because an application can talk to a
      local endpoint without being rewritten around a new client. It does not
      remove the need to authenticate the endpoint, control its network or
      review the model being served.
    </p>
    <p>
      That is the version of AI I care about: useful, a bit boring and inside a
      boundary someone understands. Fancy demos are easy. Knowing where the
      weights, prompts, responses and logs live is the actual job.
    </p>
    <img
      src="../assets/thumbnails/blogs/local-ai.png"
      alt="A closed server cabinet with a warm glow inside"
    />
  </>
);

export default RunningAiLocally;
