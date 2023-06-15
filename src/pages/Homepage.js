///////// COMPONENTS //////////

import Credability from '../components/Credability';
import Reviews from '../components/Reviews';
import Posters from '../components/Posters';
import Dash from '../components/Dash';

function Homepage(props) {
  return(
<div className='main'>
  <Dash />
  <Posters />
  <Credability />
  <Reviews />
</div>
  )
};

export default Homepage;