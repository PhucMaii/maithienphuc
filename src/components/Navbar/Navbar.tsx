import React, { FC, ReactNode, useEffect, useState } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { NavLink } from "./styles";
import HomeIcon from "@mui/icons-material/Home";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import AssignmentLateIcon from "@mui/icons-material/AssignmentLate";
import InfoIcon from "@mui/icons-material/Info";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import { useLocation, useNavigate } from "react-router-dom";

interface Tab {
  name: string;
  path?: string;
  icon: ReactNode;
  curTabIcon: ReactNode;
}

const tabs: Tab[] = [
  {
    name: "Home",
    path: "/",
    icon: <HomeIcon />,
    curTabIcon: <HomeIcon />,
  },
  {
    name: "Projects",
    icon: <AssignmentOutlinedIcon />,
    curTabIcon: <AssignmentLateIcon />,
  },
  {
    name: "About",
    path: "/about",
    icon: <InfoIcon />,
    curTabIcon: <InfoIcon />,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: <ContactPageIcon />,
    curTabIcon: <ContactPageIcon />,
  },
];

export const Navbar: FC = () => {
  const [currentTab, setCurrentTab] = useState<Tab>({
    name: "Home",
    path: "/",
    icon: <HomeOutlinedIcon />,
    curTabIcon: <HomeIcon />,
  });
  const [tabIndex, setTabIndex] = useState<number>(0);
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const currTab: Tab | undefined = tabs.find((tab) => {
      return tab.path === pathname;
    });
    if (currTab) {
      setCurrentTab(currTab);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollToProjects = () => {
    if (currentTab.path !== "/") {
      navigate("/");
    }
    const projectsSection = document.getElementById("Projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  console.log(currentTab)

  return (
    <Grid container m={isSmallScreen ? 0 : 4}>
      {isSmallScreen ? (
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 100, backgroundColor: '#021927 !important' }}
          elevation={3}
        >
          <BottomNavigation
            showLabels
            value={tabIndex}
            onChange={(_event, newValue) => {
                setTabIndex(newValue);
              setCurrentTab(tabs[newValue]);
            }}
            sx={{ width: "100vw !important", backgroundColor: '#021927 !important' }}
          >
            {tabs &&
              tabs.map((tab) => {
                return (
                  <BottomNavigationAction sx={{color: 'white', '.css-75i2ki-MuiButtonBase-root-MuiBottomNavigationAction-root.Mui-selected':{color: 'blue !important'}}} label={tab.name} icon={tab.icon} />
                );
              })}
          </BottomNavigation>
        </Paper>
      ) : (
        <Grid item xs={4}>
          <Typography variant="h4">BIN</Typography>
        </Grid>
      )}

      {!isSmallScreen && (
        <Grid item>
          <Box display="flex" justifyContent="left" gap={6}>
            {tabs &&
              tabs.map((tab, index) => {
                return (
                  <NavLink
                    $isCurPath={currentTab.name === tab.name}
                    key={index}
                    onClick={() => {
                      setCurrentTab(tab);
                      if (!tab.path) {
                        scrollToProjects();
                        return;
                      }
                      navigate(tab.path);
                    }}
                  >
                    <Typography variant="h6">{tab.name}</Typography>
                  </NavLink>
                );
              })}
          </Box>
        </Grid>
      )}
    </Grid>
  );
};
