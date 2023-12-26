import { Grid } from '@mui/material';
import styled from 'styled-components';

export const AboutMeContainer = styled(Grid)`
    background-color: white;
    padding: 20px;
    color: black;
    width: 100%;
    border-radius: 20px;
`

export const ImageStyle = styled.img`
    width: 98%;
    height: 500px;
    border-radius: 20px;
    @media screen and (max-width: 650px) {
        width: 100%;
    }
`