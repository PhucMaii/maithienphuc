import React from "react";
import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { HomePageContainer, ImageStyle } from "./styles";
import DownloadIcon from "@mui/icons-material/Download";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Technologies } from "../../components/Technologies/Technologies";
import { SkillSet } from "../../components/SkillSet/SkillSet";
import { Projects } from "../../components/Projects/Projects";
import { FadeIn } from "../../HOC/FadeIn";
import resume from "../../assets/MaiThienPhuc(Resume).pdf";

export const HomePage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <FadeIn>
      <HomePageContainer container columnSpacing={2} m={0} rowGap={2}>
        <Grid item xs={12} md={6}>
          <Box display="flex" flexDirection="column" gap={2}>
            <Typography
              variant="h2"
              fontWeight="bold"
              textAlign={isSmallScreen ? "center" : "left"}
            >
              Hello, I am Mai Thien Phuc
            </Typography>
            <Typography
              variant="h4"
              textAlign={isSmallScreen ? "center" : "left"}
            >
              Full Stack Web Developer
            </Typography>
            <Typography
              variant="body1"
              textAlign={isSmallScreen ? "center" : "left"}
            >
              As a Full Stack Developer, I specialize in creating end-to-end
              solutions with a focus on user-centric design and scalable
              architecture.
            </Typography>
            <a href={resume} download="Resume">
              <Button
                variant="contained"
                color="info"
                sx={{
                  width: isSmallScreen ? "100%" : "fit-content",
                  textAlign: "center",
                }}
              >
                Resume <DownloadIcon />
              </Button>
            </a>
            <Box
              display="flex"
              alignItems="center"
              justifyContent={isSmallScreen ? "center" : ""}
              gap={1}
            >
              <Typography variant="h6">My profiles: </Typography>
              <a
                style={{ color: "white" }}
                href="https://github.com/PhucMaii?tab=overview&from=2023-12-01&to=2023-12-31"
              >
                <GitHubIcon />
              </a>
              <a
                style={{ color: "white" }}
                href="https://www.linkedin.com/in/phuc-bin-mai-5ba164254/"
              >
                <LinkedInIcon />
              </a>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} textAlign="center">
          <ImageStyle src="/homePageImg.JPG" />
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
              id="Projects"
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
  );
};
