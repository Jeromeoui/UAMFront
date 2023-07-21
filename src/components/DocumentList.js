import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { ListItemButton } from '@mui/material';
import { useState, useEffect } from 'react';

const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));

export default function DocList({title, documents}){
 
    const [WindowWidth, setScreenWidth] = useState(window.innerWidth);
    const [WindowHeight, setScreenHeight] = useState((window.innerHeight-56)/2);

    useEffect(() => {
        const handleResize = () => {
        setScreenWidth(window.innerWidth);
        setScreenHeight((window.innerHeight-56)/2);
        };
        
        window.addEventListener('resize', handleResize);
    }, []);

    return (
        <Grid item xs={12} md={6} >
            <Grid container direction="column" alignItems="flex" display='flex' sx={{height: WindowHeight, backgroundColor: "#F2F5FA"}}>
                <Grid item xs={12} sx={{ p: 2 }}>
                <Typography sx={{ mt: 4, mb: 2, pl: 4.5 }} variant="h6" component="div" align="left" fontWeight="bold">
                    {title}
                </Typography>
                </Grid>
                <Grid item xs={12} sx={{ height: WindowHeight, minHeight: WindowHeight, overflow: 'auto', flexGrow: 1 }}>
                <Demo>
                    <List style={{minHeight: WindowHeight}}>
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