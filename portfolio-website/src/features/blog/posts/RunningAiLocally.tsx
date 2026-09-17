const RunningAiLocally = () => (
  <>
    <p>
      I like running models on a machine I can unplug. It is slower and a bit
      fiddly, and it means the interesting bits of a problem do not have to
      leave the room.
    </p>
    <p>
      For a lot of product work, a hosted API is fine. For defence, government,
      and anyone else who is not allowed to send their estate to someone else's
      GPU, "just use the cloud" is not an answer. The model has to live where
      the data already lives.
    </p>
    <p>
      That is the version of AI I care about at work: useful, a bit boring, and
      inside the building. Fancy demos are easy. Keeping the prompts, the logs
      and the weights on servers you already trust is the actual job.
    </p>
    <img
      src="../assets/thumbnails/blogs/local-ai.png"
      alt="A closed server cabinet with a warm glow inside"
    />
  </>
);

export default RunningAiLocally;
