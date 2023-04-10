
import trey from '../assets/trey.png';

function Trey(props) {
  return(
<div className="sidebyside">
<div className="side">
<img
  src={trey} 
  alt='Trey'
  className="sbs"
/>
</div>
    <div className="side">
    <h1> III </h1>
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

export default Trey;