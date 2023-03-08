
import chris from '../assets/chris.png';

function Chris(props) {
  return(
<div className="sidebyside">
<div className="side">
<img
  src={chris} 
  alt='chris'
  className="sbs"
/>
</div>
    <div className="side">
    <h1> CHRIS </h1>
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

export default Chris;