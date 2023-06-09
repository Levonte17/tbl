///////// COMPONENTS //////////

import Credability from '../components/Credability';
import Reviews from '../components/Reviews';
import Dash from '../components/Dash';

function Homepage(props) {
  return(
<div className='main'>
  <Dash />
  <Credability />
  <Reviews />
</div>
  )
};

export default Homepage;