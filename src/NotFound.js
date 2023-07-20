import { Link } from "react-router-dom";
import PageHeader from "./components/PageHeader";

export default function NotFound() {
    return (
      <div>
        <PageHeader title='Page Not Found'/>
        <p>The page you are looking for does not exist.</p>
        <Link to="/">Go back to the Home page</Link>
      </div>
    );
  }
  