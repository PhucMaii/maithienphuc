import { Button, Grid, TextField } from '@mui/material';
import styled from 'styled-components';

export const ButtonStyled = styled(Button)`
    padding: 8px 40px !important;
`

export const ContactField = styled(Grid)`
    padding: 20px;
    border: 1px solid white;
`

export const TextFieldStyled = styled(TextField)`
    & .MuiInputBase-input {
        color: white;
    }
    & .MuiOutlinedInput-notchedOutline {
        border-color: white;
    }
    & .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
        border-color: white !important;
    }
    & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: white !important;
    }
    & .MuiInputLabel-root {
        color: white;
        &.Mui-focused {
            color: white !important;
        }
    }
`