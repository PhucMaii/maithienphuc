import { Box, BoxProps } from '@mui/material';
import { FC } from 'react';
import styled from 'styled-components';

interface ButtonContainerProps extends BoxProps {
    $isHovered: boolean
}

export const ProjImg = styled.img`
    &:hover {
        opacity: 0.5;
    }
    max-height: 700px;
    max-width: 100%;
    border-radius: 20px;
`
export const ButtonContainer: FC<ButtonContainerProps> = styled(Box)<ButtonContainerProps>`
    display: ${props => props.$isHovered ? 'flex' : 'none'};
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    width: 100%;

`
