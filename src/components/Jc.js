import { Link } from 'react-router-dom';

import aa from '../assets/aa.png';

function Jc(props) {
  return(
<div className="jc">
<img 
        src={aa} 
        alt='jc'
        className="jcimg" 
/>
<Link to='/jclark'>
    <h2> View J-Clark</h2>
</Link>

</div>        
  )
};

export default Jc;