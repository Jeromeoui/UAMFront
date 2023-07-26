import * as React from 'react';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { ListItemButton } from '@mui/material';
import { useState, useEffect } from 'react';

const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));

export default function DocList({title, documents}){
    // (window.innerHeight-56)/2
    const [WindowWidth, setScreenWidth] = useState(window.innerWidth);
    const [WindowHeight, setScreenHeight] = useState();

    useEffect(() => {
        const handleResize = () => {
        setScreenWidth(window.innerWidth);
        setScreenHeight();
        };
        
        window.addEventListener('resize', handleResize);
    }, []);

    return (
        <Grid item xs={12} md={6} >
            <Grid container alignItems="flex" display='flex' sx={{width: WindowWidth, height: WindowHeight, backgroundColor: "#F2F5FA"}}>
                <Grid item xs={12} sx={{ p: 2, marginTop: '-10px' }}>
                <Typography sx={{ mt: 4, mb: 2, pl: 4.5 }} variant="h6" component="div" align="left" fontWeight="bold">
                    {title}
                </Typography>
                </Grid>
                <Grid item xs={12}>
                <Demo>
                    <List style={{minHeight: WindowHeight, padding: 0 }}>
                        {
                            documents.map((item, index) => (
                                <ListItem key={index}>
                                    <ListItemButton component="a" href={item.url}>
                                        <ListItemIcon>
                                            <PictureAsPdfIcon style={{ color: '#ff0000' }} />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={item.docname}
                                            // secondary={secondary ? 'Test' : "Test"}
                                        />
                                    </ListItemButton>
                                </ListItem>
                            ))
                        }
                    </List>
                </Demo>
                </Grid>
            </Grid>
        </Grid>
    );
}