import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:'transparent',
    // theme.palette.mode === 'dark'
    //   ? 'rgba(255, 255, 255, .05)'
    //   : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));



export default function QnA(props) {
    const {data} = props;
  const [expanded, setExpanded] = React.useState([]);

  const handleChange = (panel) => (event, isExpanded) => {
    if (isExpanded) {
        setExpanded((prevExpanded) => [...prevExpanded, panel]);
      } else {
        setExpanded((prevExpanded) => prevExpanded.filter((p) => p !== panel));
      }
  };

  return (
    <div>
        {data.map((item, index) => (
            <Accordion 
                key={index}
                style={{backgroundColor: '#F3F8FF'}}
                expanded={expanded.includes(`panel${index}`)} 
                onChange={handleChange(`panel${index}`)}
            >
                <AccordionSummary 
                    aria-controls={`panel${index}-content`} 
                    id={`panel${index}-header`}
                >
                    <Typography fontWeight="bold">{item.qn}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography align="left">
                        {item.ans}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        ))}
    </div>
  );
}

export function Category(props) {
    const {name} = props;

    return (
        <div>
            <Box style={{background: '#0B2F70', height: '50px', alignItems: 'center', display: 'flex'}}>
            <Typography
                style={{fontSize: '20px', fontWeight: 'bold'}}
                color="white"
                fontWeight="bold"
                marginLeft="30px"
                align="left">
            {name}
            </Typography>
            </Box>
        </div>
    );
}