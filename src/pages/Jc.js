import { Link } from 'react-router-dom';
import aa from '../assets/aa.png';

function Athlete(props) {
  return(
<div className="athlete">
  
<Link to='/athletes' className='athleteimg'>
  <img className='athleteimg' src={aa} alt='aa' />
</Link>

  <Link to='/jclark'>
    <h2> View J-Clark</h2>
  </Link>

</div>        
  )
};

export default Athlete;