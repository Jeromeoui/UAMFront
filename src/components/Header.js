import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import HelpIcon from '@mui/icons-material/Help'
import { useMediaQuery } from '@mui/material';


import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import { responsiveFontSizes, createTheme, ThemeProvider } from '@mui/material/styles';

const pages = [
  {
    title: 'Pre-Requisites',
    url: '/prereqs',
  }, 
  {
    title: 'Processes',
    url: '/processes',
  }, 
  {
    title: 'FAQ',
    url: '/faq',
  },
];

export default function SearchAppBar({onMenuClick}) {
  const isWindowMaximized = useMediaQuery('(min-width: 960px)');
  const isXlScreen = useMediaQuery('(min-width: 1920px)');

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{backgroundColor: '#0d47a1', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
        <Grid 
            container spacing={1}
            direction="row"
            justifyContent="space-between"
            alignItems="center">
          
        <Grid item xs={7} md={4}>
          <Link to="/" style={{ textDecoration: 'none', color: 'white', display: 'flex',
          '&:hover': {
            textDecoration: 'none',
            color: 'blue'
          }, 
        }}>
          <Grid container alignItems="center" spacing={1.5}>
          <Grid item>
            <HomeIcon style={{ marginTop: '6px' }}/>
          </Grid>
          <Grid item>
            <Typography
                variant="h6"
                style={{ marginTop: '1px', fontSize: '20px' }}
                noWrap component="div"
                // style={{ marginLeft : isXlScreen ? '-100px ': '-200px' }}
                sx={{ flexGrow: 1 }}>
                User Access Management (UAM)
            </Typography>
            </Grid>
            </Grid>
          </Link>
        </Grid>
        {isWindowMaximized && (
          <Grid item xs={3} md={4}>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex", lg: "flex" }}}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, mx: {md: 0, lg: 2}, color: "white", display: "block",
                fontSize: {md: "14px", lg: "15px"},
                marginTop: '19px' }}
                component='a'
                href={page.url}
              >
                {page.title}
              </Button>
            ))}
          </Box>
          </Grid>
        )}
        {isWindowMaximized && (
          <Grid item xs={1}>
              <Button variant="contained" 
              component='a' href="https://hiskcuivsweb01.healthgrp.com.sg/uam"
              style={{ marginLeft : isXlScreen ? '190px ': '60px' }}
              >Login
              </Button>
          </Grid>
        )}
        <Grid item xs={1}>
            <IconButton color="white" aria-label="add an alarm">
                <HelpIcon/>
            </IconButton>
        </Grid>
        </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
