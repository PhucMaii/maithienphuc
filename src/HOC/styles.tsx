import { Box, BoxProps } from '@mui/material';
import { FC } from 'react';
import styled from 'styled-components';

interface FadeInProps extends BoxProps {
    $isAppear: boolean;
}

export const FadeInContainer: FC<FadeInProps> = styled(Box)<FadeInProps>`
    opacity: ${props => props.$isAppear ? '1' : '0'};
    transition: opacity 1.5s;
`