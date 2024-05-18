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
    <CardContainer borderRadius={2} p={1.5}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body1">{period}</Typography>
      </Box>
    </CardContainer>
  )
}
