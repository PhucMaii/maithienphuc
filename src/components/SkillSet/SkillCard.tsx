import React from 'react'
import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import { SkillContainer, Tag } from './styled';

export interface SkillCard {
    title: string;
    description: string;
    tags: string[];
}

export const SkillCard: FC<SkillCard> = ({
    title,
    description,
    tags
}) => {
  return (
    <SkillContainer display="flex" flexDirection="column" gap={2}>
        <Typography variant="h6" fontWeight="bold">{title}</Typography>
        <Typography variant="body1">{description}</Typography>
        <Box display="flex" flexWrap="wrap" gap={2}>
            {
                tags && tags.map((tag, index) => {
                    return <Tag key={index}>
                        <Typography variant="body2">{tag}</Typography>
                    </Tag>
                })
            }
        </Box>
    </SkillContainer>
  )
}
