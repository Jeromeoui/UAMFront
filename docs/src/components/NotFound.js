import { Link } from "react-router-dom";
import PageHeader from "./PageHeader";
import { Box } from "@mui/system";
import Picture from "./assets/Purple5.jpg"

export default function NotFound() {
    return (
      <div>
        <PageHeader title='Page Not Found' pic={Picture}/>
        <Box display='grid' justifyItems='center' sx={{backgroundColor: "#F2F5FA", marginBottom: "10px"}}>
            <h3>Unfortunately, the page you are looking for does not exist.</h3>
            <Link to="/">Click to return to the Home page.</Link>
        </Box>
      </div>
    );
  }
  