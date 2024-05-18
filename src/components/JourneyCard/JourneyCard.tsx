import React from 'react'
import { CardContainer } from './styles'
import { Box, Typography } from '@mui/material'

export default function JourneyCard({
    title,
    subtitle,
    period,
    description,
    highlight
}) {
  return (
    <CardContainer
      borderRadius={2}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      p={1.5}
      gap={1}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body1">{period}</Typography>
      </Box>
      <Typography variant="body1">{subtitle}</Typography>
      <Typography>{description}</Typography>
      <Typography fontWeight="bold" variant="body1">{highlight}</Typography>
    </CardContainer>
  );
}
