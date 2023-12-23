import { Box, Grid, Typography } from '@mui/material'
import React, { FC } from 'react'
import { Hobbies } from '../../components/Hobbies/Hobbies'
import { FadeIn } from '../../HOC/FadeIn'
import { AboutMeContainer, ImageStyle } from './styles'

export const AboutPage: FC = () => {
  return (
    <FadeIn>
      <Grid container px={8} columnSpacing={4}>
          <Grid item xs={12} md={5}>
            <ImageStyle src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/344756849_780270453653257_5098434844172212863_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=sOOHvPksC-UAX9ajWkQ&_nc_ht=scontent-sea1-1.xx&oh=00_AfAEZ9E36pjmVW8vbK5fHwIobUFEBnyeGc1yCjATntEsUg&oe=658800EB"/>
          </Grid>
          <AboutMeContainer item xs={12} md={7}>
            <Box display="flex" flexDirection="column" gap={1}>
              <Typography variant="h4" fontWeight="bold">About me</Typography>
              <Box display="flex" gap={2}>
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
