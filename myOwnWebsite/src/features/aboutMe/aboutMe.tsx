import SubSection from "../../components/subsection/subsection";
import TimelineItem from "../../components/timelineItem/timelineItem";

const AboutMe = () => {
  return (
    <div>
        <SubSection id="contentGuru">
          <TimelineItem
           id="contentGuru"
           title="Software Engineer"
           company="Content Guru"
           hyperlinkTitle="https://www.contentguru.com/en-gb/about-us/"
           date="August 2022 - Present"
           description=" I've started my career at Redwood Technologies (also known as Content
            Guru). Where I've learnt..."
           skills="list of skills"/>
        </SubSection>
        <SubSection id="exeter">
          <TimelineItem
           id="exeter"
           title="MSc Data Science With AI"
           company="University of Exeter"
           hyperlinkTitle="https://www.exeter.ac.uk/"
           date="2021 - 2022"
           description="I attended the University of Exeter, I completed a masters in Data
          Science with Artificial Intelligence."
           skills="list of skills"/>
        </SubSection>
        <SubSection id="aston">
          <TimelineItem
           id="aston"
           title="BSc Computer Science"
           company="Aston University"
           hyperlinkTitle="https://www.aston.ac.uk/"
           date="2018 - 2021"
           description="At Aston University completed a Bsc in Computer Science."
           skills="list of skills"/>  
        </SubSection>
    </div>
  );
};

export default AboutMe;
