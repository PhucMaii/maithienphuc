import styled from 'styled-components';
import { Box, BoxProps } from '@mui/material';
import { FC } from 'react';

interface NavLinkProps extends BoxProps {
    $isCurPath: boolean;
}

export const NavLink: FC<NavLinkProps> = styled(Box)<NavLinkProps>`
    padding: 8px 15px;
    border-radius: 10px;
    background-color: ${ props => props.$isCurPath ? 'white' : '#042B44' };
    color: ${props => props.$isCurPath ? '#042B44' : 'white'};
    transition: background-color 0.3s, color 0.3s;
    &:hover {
        background-color: white;
        color: #042B44;
        cursor: pointer;
    }
`