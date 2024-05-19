import React from 'react';
import { CardContainer } from './styles';
import { Box, Typography } from '@mui/material';

interface IJourneyProps {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  highlights?: string[];
}

export default function JourneyCard({
    title,
    subtitle,
    period,
    description,
    highlights
}: IJourneyProps) {
  return (
    <CardContainer
      borderRadius={2}
      display="flex"
      flexDirection="column"
      // justifyContent="center"
      p={1.5}
      gap={1}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body1">{period}</Typography>
      </Box>
      <Typography textAlign="left" variant="body2">{subtitle}</Typography>
      <Typography textAlign="left" variant="body2">{description}</Typography>
      {
        highlights && highlights.map((highlight: string) => {
          return (
            <Typography fontWeight="bold" variant="body1">{highlight}</Typography>
          )
        })
      }
    </CardContainer>
  );
}
