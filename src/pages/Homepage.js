///////// COMPONENTS //////////

import Credability from '../components/Credability';
import Reviews from '../components/Reviews';
import Why from '../components/Why';
import Dash from '../components/Dash';
import Athletes from '../components/Athletes';

function Homepage(props) {
  return(
<div className='main'>
  <Dash />
  <Athletes />
  <Credability />
  <Why />
  <Reviews />
</div>
  )
};

export default Homepage;