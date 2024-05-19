/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import JourneyCard from "./JourneyCard/JourneyCard";
import { journeys } from "../utils/constant";
import { useMediaQuery, useTheme } from "@mui/material";

export default function Experiences() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Timeline
      position={isSmallScreen ? 'right' : 'alternate'}
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      {journeys &&
        journeys.map((journey: any) => {
          const { icon, ...journeyProps } = journey;
          return (
            <TimelineItem>
              <TimelineSeparator>
                <journey.icon />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <JourneyCard {...journeyProps} />
              </TimelineContent>
            </TimelineItem>
          );
        })}
    </Timeline>
  );
}
