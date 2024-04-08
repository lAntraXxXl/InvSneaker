import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <p>No Found</p>
            <span><Link to="/">Back Home</Link></span>
        </div>
    );
}
 
export default NotFound;