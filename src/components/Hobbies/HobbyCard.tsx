import { Typography } from '@mui/material';
import React, { FC } from 'react'
import { HobbyCardContainer } from './styles';

export const HobbyCard: FC<{ hobby: string }> = ({ hobby }: { hobby: string }) => {
  return (
    <HobbyCardContainer>
        <Typography variant="subtitle2">{hobby}</Typography>
    </HobbyCardContainer>
  )
}
