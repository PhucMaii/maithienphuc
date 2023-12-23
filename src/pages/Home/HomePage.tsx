import React from 'react';
import { Box, Button, Grid, Typography } from "@mui/material";
import { HomePageContainer, ImageStyle } from "./styles";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Technologies } from "../../components/Technologies/Technologies";
import { SkillSet } from "../../components/SkillSet/SkillSet";
import { Projects } from "../../components/Projects/Projects";
import { FadeIn } from '../../HOC/FadeIn';

export const HomePage = () => {
  return (
    <FadeIn>
        <HomePageContainer 
            container 
            columnSpacing={2} 
            m={8} 
            rowGap={2}
        >
            <Grid item xs={12} md={6}>
                <Box display="flex" flexDirection="column" gap={1}>
                    <Typography variant="h2" fontWeight="bold">Hello, I am Mai Thien Phuc</Typography>
                    <Typography variant="h4">Full Stack Web Developer</Typography>
                    <Typography variant="body1">
                        As a Full Stack Developer, I specialize in creating end-to-end solutions
                        with a focus on user-centric design and scalable architecture.
                    </Typography>
                    <Button 
                        variant="contained"
                        color="info"
                        sx={{width: 'fit-content'}}
                    >
                        Resume
                    </Button>
                    <Box display="flex" alignItems="center" gap={1}>
                        <Typography variant="h6">My Profiles: </Typography>
                        <GitHubIcon />
                        <LinkedInIcon />
                     </Box>
                </Box>
            </Grid>
            <Grid item xs={12} md={6} textAlign="center">
                <ImageStyle 
                    src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/344756849_780270453653257_5098434844172212863_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=sOOHvPksC-UAX9ajWkQ&_nc_ht=scontent-sea1-1.xx&oh=00_AfAEZ9E36pjmVW8vbK5fHwIobUFEBnyeGc1yCjATntEsUg&oe=658800EB"
                />
            </Grid>
            <Grid item xs={12}>
                <Box>
                    <Typography 
                        variant="h4" 
                        textAlign="center" 
                        fontWeight="bold"
                        mt={4}
                    >
                        Technologies
                    </Typography>
                    <Technologies />
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box>
                    <Typography 
                        variant="h4" 
                        textAlign="center" 
                        fontWeight="bold"
                        mt={4}
                    >
                        My Skill Set
                    </Typography>
                    <SkillSet />                
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box>
                    <Typography 
                        variant="h4" 
                        textAlign="center" 
                        fontWeight="bold"
                        mt={4}
                    >
                        Projects
                    </Typography>
                    <Projects />
                </Box>
            </Grid>
        </HomePageContainer>
    </FadeIn>
  )
}
