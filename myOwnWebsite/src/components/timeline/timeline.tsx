import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import astonLogo from "../assets/AstonLogo.png";
import exeterLogo from "../assets/ExeterLogo.png";
import redwoodTechLogo from "../assets/RedwoodTechLogo.png";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import "./Timeline.css"; // Import the new CSS file

export default function CustomizedTimeline() {
  return (
    <Timeline position="alternate" className="timeline">
      <TimelineItem>
        <TimelineOppositeContent
          className="timelineOppositeContentLeft"
          variant="body2"
        >
          What's next?
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined">
            <AddIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className="timelineContent">
          <Typography variant="h6" component="span">
            Hire me <TagFacesIcon /> (Or promote me!)
          </Typography>
          <Typography> </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          className="timelineOppositeContentRight"
          variant="body2"
        >
          August 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <img
              src={redwoodTechLogo}
              className="companyLogo logo"
              alt="Redwood Technologies Ltd"
            />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className="timelineContent">
          <Typography variant="h6" component="span">
            Software Developer
          </Typography>
          <Typography>Redwood Technologies Ltd</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          className="timelineOppositeContentLeft"
          variant="body2"
        >
          September 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot variant="outlined">
            <img
              src={exeterLogo}
              className="companyLogo logo"
              alt="University of Exeter"
            />
          </TimelineDot>
          <TimelineConnector className="connectorSecondary" />
        </TimelineSeparator>
        <TimelineContent className="timelineContent">
          <Typography variant="h6" component="span">
            MSc in Data Science with AI
          </Typography>
          <Typography>University of Exeter</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          className="timelineOppositeContentRight"
          variant="body2"
        >
          September 2018
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <img
              src={astonLogo}
              className="companyLogo logo"
              alt="Aston University"
            />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className="timelineContent">
          <Typography variant="h6" component="span">
            Bsc Computer Science
          </Typography>
          <Typography>Aston University</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
