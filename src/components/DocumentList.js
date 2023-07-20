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

function generate(element) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }

const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));

export default function DocList({title, documents}){
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);
    // const {title} = prop1;
    // const {documents} = prop2;

    return (
        <Grid item xs={12} md={6} >
            <Grid container direction="column" alignItems="flex" display='flex'>
                
                <Typography sx={{ mt: 4, mb: 2, pl: 4.5 }} variant="h6" component="div" align="left" fontWeight="bold">
                    {title}
                </Typography>
                <Box sx={{ height: '250px', overflow: 'auto' }}>
                <Demo>
                    <List dense={dense}>
                        {
                            documents.map((item) => (
                                <ListItem>
                                    <ListItemButton component="a" href={item.url}>
                                        <ListItemIcon>
                                            <PictureAsPdfIcon style={{ color: '#ff0000' }} />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={item.docname}
                                            secondary={secondary ? 'Secondary text' : null}
                                        />
                                    </ListItemButton>
                                </ListItem>
                            ))
                        }
                    </List>
                </Demo>
                </Box>
            </Grid>
        </Grid>
    );
}