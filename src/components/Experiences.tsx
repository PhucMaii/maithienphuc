/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import JourneyCard from "./JourneyCard/JourneyCard";
import { journeys } from "../utils/constant";

export default function Experiences() {
  return (
    <Timeline position="alternate">
      {
        journeys && journeys.map((journey: any) => {
          const {icon, ...journeyProps} = journey
          return (
            <TimelineItem>
            <TimelineSeparator>
              <journey.icon />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <JourneyCard
                {...journeyProps}
              />
            </TimelineContent>
          </TimelineItem>
          )
        })
      }
    </Timeline>
  );
}
