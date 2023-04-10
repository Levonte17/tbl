
import jr from '../assets/jr.png';

function Jr(props) {
  return(
<div className="sidebyside">
<div className="side">
<img
  src={jr} 
  alt='Jr'
  className="sbs"
/>
</div>
    <div className="side">
    <h1> ANT </h1>
    <a href='https://www.youtube.com/watch?v=xFLjPdMGNRY'>
      Day 1
    </a>
    <br/>
    <a href='https://www.youtube.com/watch?v=MZKqtzgoqAs'>
      Day 2
    </a>
    </div>
    </div>
    )
};

export default Jr;