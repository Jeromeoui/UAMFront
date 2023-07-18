import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import HelpIcon from '@mui/icons-material/Help'
import { useMediaQuery } from '@mui/material';
import SideMenu from './SideMenu';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius, 
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(50),
  marginLeft: 'auto',
  width: '1000px',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: '100%',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,

    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '41ch',
      '&:focus': {
        width: '45ch',
      },
    },
  },
}));

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
            <Grid item xs={1}>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ mr: 2 }}
                    style={{ marginLeft : isXlScreen ? '-100px ': '-50px' }}
                    onClick={onMenuClick}
                >
                    <MenuIcon />
                </IconButton>
            </Grid>
        <Grid item xs={7} md={4}>
            <Typography
                variant="h6"
                noWrap component="div"
                // style={{ marginLeft : isXlScreen ? '-100px ': '-200px' }}
                sx={{ flexGrow: 1 }}>
                User Access Management (UAM)
            </Typography>
        </Grid>
        {isWindowMaximized && (
          <Grid item xs={3}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                style={{ textAlign : "left"}}
              />
            </Search>
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
