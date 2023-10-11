import DocList from "./DocumentList";
import HomeImage from "./HomeImage";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { useMediaQuery } from "@mui/material";

export default function Home() {

    const docData = [
        {
            docname: 'User Guide',
            url: '/pdf',
        },
        {
            docname: 'User Guide',
            url: '/pdf',
        },
        {
            docname: 'User Guide',
            url: '/pdf',
        },
        {
            docname: 'User Guide',
            url: '/pdf',
        },
        {
            docname: 'User Guide',
            url: '/pdf',
        },
    ];

    const Announcements = [
        {
            docname: 'Announcement',
            url: '/pdf',
        },
        {
            docname: 'Announcement',
            url: '/pdf',
        },
        {
            docname: 'Announcement',
            url: '/pdf',
        },
        {
            docname: 'Announcement',
            url: '/pdf',
        },
        {
            docname: 'Announcement',
            url: '/pdf',
        },
        {
            docname: 'Announcement',
            url: '/pdf',
        },
        {
            docname: 'Announcement',
            url: '/pdf',
        },
        {
            docname: 'Announcement',
            url: '/pdf',
        },
        {
            docname: 'Announcement',
            url: '/pdf',
        },
        {
            docname: 'Announcement',
            url: '/pdf',
        },
    ];

    return (
        <div>
            {/* <PageHeader title='Home'/> */}
            <Box xs={12}>
            <HomeImage/>
            <DocList title="Announcements" documents={Announcements}/>
            </Box>
            <About/>
            <DocList title="Useful Links" documents={docData}/>
        </div>

    );
}

export function About(){
    const about = {
            header: "About",
            summary: `Lortem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus 
            ex, sit amet blandit leo lobortis eget.`,
    };

    const isXlScreen = useMediaQuery('(min-width: 1920px)');

    return (
        <Box sx={{maxWidth: window.innerWidth}} >
                <Typography sx={{ mt: 4, mb: 0, pl: 4.5 }} variant="h6" component="div" align="left" fontWeight="bold">
                    {about.header}
                </Typography>
                <Typography sx={{ mt: 4, mb: 4, pl: 4.5, maxWidth: isXlScreen ? (window.innerWidth - 40) : (window.innerWidth - 70)}} variant="p" component="div" align="left">
                    {about.summary}
                </Typography>
        </Box>
    );
}