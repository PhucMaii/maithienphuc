import { Box } from '@mui/material';
import React, { FC } from 'react'
import { HobbyCard } from './HobbyCard';

export const Hobbies: FC = () => {
    const hobbies: string[] = ['Sports', 'Coding', 'Researching', 'Travelling'];
    return (
        <Box 
            display="flex" 
            gap={1} 
            alignItems="center"
            flexWrap="wrap"
        >
            {
                hobbies && hobbies.map((hobby) => {
                    return <HobbyCard hobby={hobby} />
                })
            }
        </Box>
  )
}
