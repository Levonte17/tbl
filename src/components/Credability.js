import { Link } from "react-router-dom";

function Credability(props) {
    return(
<div className="credability">

<Link to='/people'>
    <h2> 
        Contact Us
    </h2>
</Link>

<Link to='/locations'>
    <h2> 
        Locations
    </h2>
</Link>

<Link to='/prices'>
    <h2> 
        Workout Prices
    </h2>
</Link>

<Link to='/about-us'>
    <h2> 
        About TBL
    </h2>
</Link>

</div>        
    )
};

export default Credability;