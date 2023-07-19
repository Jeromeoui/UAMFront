import React from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function PageHeader(props) {
    const {title} = props;
    const containerStyles = {
        width: '100%',
        height: '250px',
        backgroundImage: `url(${require('./assets/PurpleDigitalNetwork1.jpg')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'flex-end',
    };

    const typographyStyles = {
        position: 'absolute',
        margin: '10px',
        color: 'white',
        marginLeft: '30px',
        fontSize: '45px'
      };

    return <Box sx={containerStyles}>
        <Typography
            style={typographyStyles}
            component="h1"
            fontWeight="bold"
            align="left">
            {title}
        </Typography>
    </Box>;
}