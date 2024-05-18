import styled from 'styled-components';
import { AppBar, Box, BoxProps, Drawer, Fab } from '@mui/material';
import { FC } from 'react';

interface NavLinkProps extends BoxProps {
    $isCurPath: boolean;
}

export const AppBarStyled = styled(AppBar)`
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    overflow-x: hidden !important;
`

export const DrawerStyled = styled(Drawer)`
    width: 30% !important;
`

export const NavLink: FC<NavLinkProps> = styled(Box)<NavLinkProps>`
    padding: 8px 15px;
    border-radius: 10px;
    background-color: ${ props => props.$isCurPath ? 'white' : '#021927' };
    color: ${props => props.$isCurPath ? '#021927' : 'white'};
    transition: background-color 0.3s, color 0.3s;
    &:hover {
        background-color: white;
        color: #021927;
        cursor: pointer;
    }
`

export const StyledFab = styled(Fab)`
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
`