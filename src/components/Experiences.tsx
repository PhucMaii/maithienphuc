import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import SchoolIcon from "@mui/icons-material/School";
import JourneyCard from "./JourneyCard/JourneyCard";

export default function Experiences() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Eat</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Code</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Sleep</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <SchoolIcon />
        </TimelineSeparator>
        <TimelineContent>
          <JourneyCard
            title="VCC"
            period="Sep 2022 - Apr 2024"
            subtitle="Diploma in Computer System Technology"
            description="This is a place where I first fall in love with computer, especially programming. It opens a new chapter in my life and have gained a lot of great experience with it by doing lots of hands on coding project from simple to very complex."
          />
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
