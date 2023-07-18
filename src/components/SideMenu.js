import React from 'react';
import { makeStyles } from '@mui/styles';
import { List, ListItem, ListItemText, ListItemButton, Drawer, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Collapse from '@mui/material/Collapse';
import FormControlLabel from '@mui/material/FormControlLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(2),
    width: '250px',
  },
  listItem: {
    marginBottom: theme.spacing(1),
  },
}));



function SideMenu({isOpen}) {
  const classes = useStyles();

//   const [checked, setChecked] = React.useState(false);

//   const handleChange = () => {
//     setChecked((prev) => !prev);
//   };

  return (
    <Grid item xs={10}>
        <Drawer anchor="left" 
            open={isOpen} 
            onClose={() => {}}
            PaperProps={{
                style: { position: 'absolute', top: '64px', height: 'calc(100% - 64px'},
            }}
            variant="static"
            sx={{
            width: 240,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
            }}>
            <div className={classes.root}>
            <List>
                <ListItemButton component="a" href="/" className={classes.listItem}>
                <ListItemText primary="Home" />
                </ListItemButton>
                {/* <ListItemButton component="a" href="https://hiskcuivsweb01.healthgrp.com.sg/uam" className={classes.listItem}>
                <ListItemText primary="Login" />
                </ListItemButton> */}
                <ListItemButton component="a" href="/prereqs" className={classes.listItem}>
                <ListItemText primary="Pre-Requisites" />
                </ListItemButton>
                <ListItemButton component="a" href="/processes" className={classes.listItem}>
                <ListItemText primary="Processes" />
                </ListItemButton>
                <ListItemButton component="a" href="/faq" className={classes.listItem}>
                <ListItemText primary="FAQ" />
                </ListItemButton>
            </List>
            </div>
        </Drawer>
    </Grid>
  );
}

export default SideMenu;