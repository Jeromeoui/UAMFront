import { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import BackToTopButton from './BackToTop';

export default function Footer() {
    const [WindowWidth, setScreenWidth] = useState(window.innerWidth);
    const [WindowHeight, setScreenHeight] = useState(window.innerHeight / 7);

    useEffect(() => {
        const handleResize = () => {
        setScreenWidth(window.innerWidth);
        setScreenHeight(window.innerHeight / 5);
        };
        
        window.addEventListener('resize', handleResize);
    }, []);

    const BoxStyles = {
        width: WindowWidth,
        height: WindowHeight,
        overflow: 'auto',
        backgroundColor: '#0d47a1',
        py: 6,
        display: 'flex',
        alignItems: 'center',
      };

    return (
        <Box style={BoxStyles}>
            <Container maxWidth="lg">
                {/* <Typography 
                    variant="h6" 
                    align="center" 
                    gutterBottom color="white">
                    Test
                </Typography> */}
                <BackToTopButton/>
                <Typography
                    variant="subtitle1"
                    style={{textAlign: 'center'}}
                    align="center"
                    color="white"
                    component="p">
                    For any further queries, kindly contact the UAM team via UAM@ihis.com.sg
                </Typography>
            </Container>
        </Box>
    );
}