import DocList from "./DocumentList";
import HomeImage from "./HomeImage";
import Grid from "@mui/system/Unstable_Grid/Grid";
import Typography from "@mui/material/Typography";

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
    ];

    return (
        <div>
            {/* <PageHeader title='Home'/> */}
            <HomeImage/>
            <About/>
            <DocList title="Announcements" documents={Announcements}/>
            <DocList title="Useful Links" documents={docData}/>
        </div>

    );
}

function About(){
    const about = {
            header: "About",
            summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus 
            ex, sit amet blandit leo lobortis eget.`,
    };

    return (
        <Grid item xs={12} md={6} >
            <Grid container direction="column" alignItems="flex" display='flex'>
                <Typography sx={{ mt: 4, mb: 0, pl: 4.5 }} variant="h6" component="div" align="left" fontWeight="bold">
                    {about.header}
                </Typography>
                <Typography sx={{ mt: 4, mb: 0, pl: 4.5 }} variant="p" component="div" align="left">
                    {about.summary}
                </Typography>
                
            </Grid>
        </Grid>
    );
}