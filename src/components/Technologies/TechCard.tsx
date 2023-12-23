import React from 'react'
import { Typography } from "@mui/material";
import { FC } from "react";
import { CardContainer } from "./styles";

export interface Tech {
  icon: string;
  name: string;
}

export const TechCard: FC<Tech>  = ({ icon, name }) => {
  return (
    <CardContainer 
        alignItems="center" 
        display="flex" 
        justifyContent="center"
        gap={1}
    >
        <img src={icon} width="30px" />
        <Typography variant="subtitle1">{name}</Typography>
    </CardContainer> 
  )
}
