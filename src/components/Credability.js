import { Link } from "react-router-dom";

function Credability(props) {
    return(
<div className="credability">
<div className="cr">
<div className="cred">
<Link to='/athletes'>
    <h2> 
        View Athletes
    </h2>
</Link>
<br />
<hr />
<br />
<Link to='/people'>
    <h2> 
        Contact Us
    </h2>
</Link>
<br />
<hr />
<br />
<Link to='/about-me'>
    <h2> 
        About Coach Lockdown
    </h2>
</Link>
<br />
<hr />
<br />
</div>
<div className="credable">
<Link to='/locations'>
    <h2> 
        Locations
    </h2>
</Link>
<br />
<hr />
<br />
<Link to='/about-us'>
    <h2> 
        What's TBL
    </h2>
</Link>
<br />
<hr />
<br />
<Link to='/blogs'>
    <h2> 
        TBL Blogs
    </h2>
</Link>
<br />
<br />
<br />
<br />
<hr />
</div>        
</div>        

</div>        
    )
};

export default Credability;