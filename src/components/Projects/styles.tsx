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
    transition: opacity 0.3s ease-in-out;
`
export const ButtonContainer: FC<ButtonContainerProps> = styled(Box)<ButtonContainerProps>`
    display: flex;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    width: 100%;
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
    opacity: ${props => (props.$isHovered ? 1 : 0)};
    visibility: ${props => (props.$isHovered ? 'visible' : 'hidden')};
    pointer-events: ${props => (props.$isHovered ? 'auto' : 'none')};
`
