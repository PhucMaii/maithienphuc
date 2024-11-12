import React from 'react';
import { Button, Box, Grid, Typography } from "@mui/material"
import { FC, useState } from "react"
import { ButtonContainer, ProjImg } from "./styles"

export interface ProjectCardProps {
    img: string;
    title: string;
    description: string;
    technologies: string;
    versionControl: string;
    githubLink: string;
    deploymentLink?: string;
    timeRange: string;
}

interface CardProps {
    proj: ProjectCardProps
}

export const ProjectCard: FC<CardProps> = ({proj}) => {
    const [isImgHover, setIsImgHover] = useState<boolean>(false);

    return (
    <Grid container mt={4} justifyContent="center" alignItems="center">
        <Grid item textAlign="center" xs={12} sx={{position: 'relative'}}>
            <ProjImg 
                onMouseEnter={() => setIsImgHover(true)} 
                onMouseLeave={() => setIsImgHover(false)} 
                src={proj.img} 
            />
            <ButtonContainer            
                onMouseEnter={() => setIsImgHover(true)} 
                onMouseLeave={() => setIsImgHover(false)}  
                gap={2} 
                justifyContent="center" 
                $isHovered={isImgHover}
            >
                {proj.githubLink === 'private' ? (<>
                    <Button variant="contained">Sorry Github Link is Private</Button></>) : <Button 
                    variant="contained"
                    color="info"
                    onClick={() => window.location.href = proj.githubLink}
                    >
                    Github Link
                </Button>}
                    {
                        proj.deploymentLink && (
                            <Button 
                                variant="contained" 
                                color="info"
                                onClick={() => window.location.href = proj.deploymentLink ? proj.deploymentLink : '' }
                            >
                                Deployment Link
                            </Button>
                        ) 
                    }
            </ButtonContainer>
        </Grid>
        <Grid item xs={12}>
            <Box display="flex" gap={2} alignItems="center">
                <Typography variant="h6" fontWeight="bold">
                    {proj.title}
                </Typography>
                <Typography variant="subtitle1">({proj.timeRange})</Typography>
            </Box>
            <Typography variant="body1" fontWeight="light">{proj.description}</Typography>
            <Typography variant="body1" fontWeight="bold">Tehcnologies used: {proj.technologies} </Typography>
            <Typography variant="body1" fontWeight="bold">Version Control: {proj.versionControl}</Typography>
        </Grid>
    </Grid>    
  )
}
