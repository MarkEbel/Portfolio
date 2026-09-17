import "./NowSection.css";

/** Keep this current: a stale "now" reads worse than no "now" at all. */
const updated = { label: "September 2026", dateTime: "2026-09" };

const nowItems = [
  "Helping replace a twenty-year-old platform with something we can grow into.",
  "Helping run my local scuba diving club as a committee member.",
  "Tinkering with this site, which has changed a lot in the last month.",
];

const NowSection = () => (
  <div className="now">
    <ul className="now__list">
      {nowItems.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
    <p className="now__updated">
      Last updated <time dateTime={updated.dateTime}>{updated.label}</time>
    </p>
  </div>
);

export default NowSection;
