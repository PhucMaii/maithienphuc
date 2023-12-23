import { Grid } from '@mui/material';
import styled from 'styled-components';

export const ImageStyle = styled.img`
    width: 450px;
    height: 500px;
    border-radius: 20px;
`

export const HomePageContainer = styled(Grid)`
    padding-right: 5%;
    padding-left: 5%;
  @media screen and (min-width: 1500px) {
    padding-right: 20%;
    padding-left: 20%;
  }
`