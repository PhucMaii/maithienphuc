import React, { useEffect, useState } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { FC } from 'react'
import { NavLink } from './styles'
import { useLocation, useNavigate } from 'react-router-dom';

interface Tab {
    name: string;
    path: string;
}

const tabs: Tab[] = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'About',
        path: '/about'
    },
    {
        name: 'Contact',
        path: '/contact'
    },
];

export const Navbar: FC = () => {
    const [currentTab, setCurrentTab] = useState<Tab>({
        name: '',
        path: ''
    });
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname;

    useEffect(() => {
        const currTab: Tab | undefined = tabs.find((tab) => {
            return tab.path === pathname;
        });
        if(currTab) {
            setCurrentTab(currTab);
        }
    }, [])

  return (
    <Grid container m={4}>
        <Grid item xs={4}>
            <Typography variant="h4">BIN</Typography>
        </Grid>
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
    </Grid>
  )
}
