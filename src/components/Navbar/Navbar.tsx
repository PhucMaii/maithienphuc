import React, { FC, ReactNode, useEffect, useState } from 'react';
import { 
    AppBar, 
    Box, 
    Grid, 
    IconButton, 
    Toolbar, 
    Typography, 
    useMediaQuery, 
    useTheme 
} from '@mui/material'
import { NavLink } from './styles';
import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import InfoIcon from '@mui/icons-material/Info';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import { useLocation, useNavigate } from 'react-router-dom';

interface Tab {
    name: string;
    path?: string;
    icon: ReactNode;
    curTabIcon: ReactNode;
}

const tabs: Tab[] = [
    {
        name: 'Home',
        path: '/',
        icon: <HomeOutlinedIcon fontSize='large' />,
        curTabIcon: <HomeIcon fontSize='large' />
    },
    {
        name: 'Projects',
        icon: <AssignmentOutlinedIcon fontSize='large' />,
        curTabIcon: <AssignmentLateIcon fontSize='large' />  
    },
    {
        name: 'About',
        path: '/about',
        icon: <InfoOutlinedIcon fontSize='large'/>,
        curTabIcon: <InfoIcon fontSize='large' />
    },
    {
        name: 'Contact',
        path: '/contact',
        icon: <ContactPageOutlinedIcon fontSize='large' />,
        curTabIcon: <ContactPageIcon fontSize='large' />
    },
];

export const Navbar: FC = () => {
    const [currentTab, setCurrentTab] = useState<Tab>({
        name: 'Home',
        path: '/',
        icon: <HomeOutlinedIcon />,
        curTabIcon: <HomeIcon />
    });
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname;
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        const currTab: Tab | undefined = tabs.find((tab) => {
            return tab.path === pathname;
        });
        if(currTab) {
            setCurrentTab(currTab);
        }
    }, []);

    const scrollToProjects = () => {
        if(currentTab.path !== '/') {
            navigate('/');
        }
        const projectsSection = document.getElementById('Projects');
        if(projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

  return (
    <Grid container m={isSmallScreen ? 0 : 4}>
        {
            isSmallScreen ? (
                <AppBar 
                    position="fixed"  
                    sx={{ 
                        width: '100%', 
                        top: 'auto', 
                        bottom: 0, 
                        backgroundColor: '#275D80',
                        boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px;' 
                    }}
                >
                    <Toolbar sx={{width: '100%'}}>
                        <Grid container>
                            {
                                tabs && tabs.map((tab, index) => {
                                    if(tab.name === 'Projects') {
                                        return;
                                    }
                                    return (
                                        <Grid item xs={4} textAlign="center" key={index}>
                                            <IconButton 
                                                id={tab.name}
                                                color="inherit" 
                                                aria-label="open drawer"
                                                onClick={() => {
                                                    setCurrentTab(tab);
                                                    navigate(tab.path ? tab.path : '/');
                                                }}
                                            >
                                                {
                                                    currentTab === tab ? tab.curTabIcon : tab.icon
                                                }
                                            </IconButton>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Toolbar>
              </AppBar>
            ) : (
            <Grid item xs={4}>
                <Typography variant="h4">BIN</Typography>
            </Grid>
            )
        }

        {
            !isSmallScreen && 
                <Grid item xs={8} textAlign="left">
                    <Box display="flex" justifyContent="left" gap={6}>
                        {
                            tabs && tabs.map((tab, index) => {
                                return (
                                    <NavLink 
                                        $isCurPath={currentTab.name === tab.name} 
                                        key={index} 
                                        onClick={() => {
                                            setCurrentTab(tab);
                                            if(!tab.path) {
                                                scrollToProjects();
                                                return;
                                            }
                                            navigate(tab.path);
                                        }}
                                    >
                                        <Typography variant="h6">{tab.name}</Typography>
                                    </NavLink>
                                )
                            })
                        }
                    </Box>
                </Grid>
        }
    </Grid>
  )
}
