import React, { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function BackToTopButton () {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.pageYOffset;
  
        if (scrollTop > 100) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    return (
      <>
        {isVisible && (
          <IconButton
            aria-label="Back to Top"
            onClick={handleScrollToTop}
            sx={{
              position: 'fixed',
              bottom: '20px',
              right: '20px',
              backgroundColor: 'primary.main',
              color: 'primary.contrastText',
              '&:hover': {
                backgroundColor: 'primary.dark',
              },
            }}
          >
            <KeyboardArrowUpIcon />
          </IconButton>
        )}
      </>
    );
  };
  