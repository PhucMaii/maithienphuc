import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { FC } from 'react'
import { Hobbies } from '../../components/Hobbies/Hobbies'
import { FadeIn } from '../../HOC/FadeIn'
import { AboutMeContainer, ImageStyle } from './styles'

export const AboutPage: FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <FadeIn>
      <Grid container px={isSmallScreen ? 4 : 8} columnSpacing={isSmallScreen ? 0 : 4}>
          <Grid item xs={12} md={4}>
            <ImageStyle src="/aboutPageImg.png"/>
          </Grid>
          <AboutMeContainer item xs={12} md={8}>
            <Box display="flex" flexDirection="column" gap={1}>
              <Typography variant="h4" fontWeight="bold">About me</Typography>
              <Box display="flex" gap={2} alignItems="center">
                <Typography sx={{paddingY: '5px'}} variant="subtitle1">My hobbies:</Typography>
                <Hobbies />
              </Box>
              <Typography variant="body1">
                Hi there, my name is Mai Thien Phuc (Bin) and I am a full stack web developer in Vancouver, Canada. 
                I am a technology enthusiastic individual who love solving problems, 
                and the comprehensive of both front end and back end development. 
                My passion extends beyond the technical aspects; it includes a dedication to crafting 
                user-centric experiences. I approach every projects with sense of loyalty, strong belief, 
                and a desire to build technology that just not meets the requirement but also creating
                meaningful connection with users. Come along with me, and let's work together to create
                outstanding and meaningful digital solutions. 
              </Typography>
            </Box>
          </AboutMeContainer>
      </Grid>
    </FadeIn>
  )
}
