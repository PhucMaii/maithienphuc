import { Grid } from '@mui/material';
import styled from 'styled-components';

export const ImageStyle = styled.img`
    width: 100%;
    height: 500px;
    border-radius: 20px;
    @media screen and (max-width: 650px) {
      width: 100%;
    }
`

export const HomePageContainer = styled(Grid)`
    padding-right: 5%;
    padding-left: 5%;
  @media screen and (min-width: 1500px) {
    padding-right: 20%;
    padding-left: 20%;
  }
  @media screen and (max-width: 650px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`