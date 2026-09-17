const DeveloperAudits = () => (
  <>
    <p>
      Audits used to feel like something that happened to other people, then
      someone asked me where the logs were retained and I went very quiet.
    </p>
    <p>
      PCI and FedRAMP sound like paperwork. A lot of it is just: can you prove
      what you think is true? Who can deploy. What was scanned. Which ticket
      closed the finding. If that only lives in someone's head, the auditor will
      find it.
    </p>
    <p>
      Accessibility is the same shape. WCAG 2.0 is a list of ways people get
      locked out of a page. Catching contrast and names in CI is cheaper than
      catching them in a review you cannot postpone. I would rather fail a build
      than fail a person.
    </p>
    <img
      src="../assets/thumbnails/blogs/audits.png"
      alt="A clipboard and a small shield"
    />
  </>
);

export default DeveloperAudits;
