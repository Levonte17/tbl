///////// COMPONENTS //////////

import Credability from '../components/Credability';
import Why from '../components/Why';
import Dash from '../components/Dash';

function Homepage(props) {
  return(
<div className='main'>
  <Dash />
  <Credability />
  <Why />
</div>
  )
};

export default Homepage;