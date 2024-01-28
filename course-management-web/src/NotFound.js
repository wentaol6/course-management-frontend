import {NavLink} from 'react-router-dom';


const NotFound = () => {
    return (
        <div className="not-found" style={{marginLeft:"5vw"}}>
            <h1>404</h1>
            <h2>That page cannot be found</h2>
            <NavLink to="/">Back to the homepage...</NavLink>
            
        </div>
    );
}
 
export default NotFound;